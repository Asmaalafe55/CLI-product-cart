import { reactive, computed, watch } from 'vue'
import { products } from '@/data/products'

const STORAGE_KEY = 'splendid-market-v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function uid() {
  return `ord_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`
}

export function createStore() {
  const saved = load()

  const state = reactive({
    products,
    users: saved.users || [],
    sessionEmail: saved.sessionEmail || null,
    carts: saved.carts || {},
    wishlists: saved.wishlists || {},
    orders: saved.orders || {},
    guestCart: saved.guestCart || {},
    guestWishlist: saved.guestWishlist || [],
    showCart: false,
    toasts: []
  })

  function persist() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        users: state.users,
        sessionEmail: state.sessionEmail,
        carts: state.carts,
        wishlists: state.wishlists,
        orders: state.orders,
        guestCart: state.guestCart,
        guestWishlist: state.guestWishlist
      })
    )
  }

  watch(state, persist, { deep: true })

  const currentUser = computed(() =>
    state.users.find((u) => u.email === state.sessionEmail) || null
  )

  const isAuthenticated = computed(() => !!currentUser.value)

  const cart = computed({
    get() {
      if (state.sessionEmail) {
        if (!state.carts[state.sessionEmail]) state.carts[state.sessionEmail] = {}
        return state.carts[state.sessionEmail]
      }
      return state.guestCart
    },
    set(value) {
      if (state.sessionEmail) state.carts[state.sessionEmail] = value
      else state.guestCart = value
    }
  })

  const wishlist = computed({
    get() {
      if (state.sessionEmail) {
        if (!state.wishlists[state.sessionEmail]) state.wishlists[state.sessionEmail] = []
        return state.wishlists[state.sessionEmail]
      }
      return state.guestWishlist
    },
    set(value) {
      if (state.sessionEmail) state.wishlists[state.sessionEmail] = value
      else state.guestWishlist = value
    }
  })

  const userOrders = computed(() => {
    if (!state.sessionEmail) return []
    return state.orders[state.sessionEmail] || []
  })

  const cartCount = computed(() =>
    Object.values(cart.value).reduce((sum, qty) => sum + qty, 0)
  )

  const cartTotal = computed(() =>
    Object.entries(cart.value).reduce((sum, [id, qty]) => {
      const product = getProduct(Number(id))
      return sum + (product ? product.price.USD * qty : 0)
    }, 0)
  )

  function toast(message, tone = 'info') {
    const id = Date.now() + Math.random()
    state.toasts.push({ id, message, tone })
    setTimeout(() => {
      state.toasts = state.toasts.filter((t) => t.id !== id)
    }, 2800)
  }

  function getProduct(id) {
    return state.products.find((p) => p.id === id)
  }

  function addToCart(productId, quantity = 1) {
    const amount = Number(quantity)
    if (!amount || amount < 1) return false
    const product = getProduct(productId)
    if (!product) return false
    const next = { ...cart.value }
    const current = next[productId] || 0
    const capped = Math.min(current + amount, product.stock)
    next[productId] = capped
    cart.value = next
    return true
  }

  function setCartQty(productId, quantity) {
    const amount = Math.max(0, Number(quantity) || 0)
    const next = { ...cart.value }
    if (amount <= 0) delete next[productId]
    else {
      const product = getProduct(productId)
      next[productId] = product ? Math.min(amount, product.stock) : amount
    }
    cart.value = next
  }

  function removeFromCart(productId) {
    const next = { ...cart.value }
    delete next[productId]
    cart.value = next
  }

  function clearCart() {
    cart.value = {}
  }

  function toggleWishlist(productId) {
    const list = [...wishlist.value]
    const idx = list.indexOf(productId)
    if (idx >= 0) list.splice(idx, 1)
    else list.push(productId)
    wishlist.value = list
    return idx < 0
  }

  function isWishlisted(productId) {
    return wishlist.value.includes(productId)
  }

  function register({ name, email, password }) {
    const normalized = String(email).trim().toLowerCase()
    if (state.users.some((u) => u.email === normalized)) {
      return { ok: false, error: 'exists' }
    }
    state.users.push({
      name: String(name).trim() || 'Guest',
      email: normalized,
      password: String(password)
    })
    // merge guest cart/wishlist into new account
    state.carts[normalized] = { ...state.guestCart }
    state.wishlists[normalized] = [...state.guestWishlist]
    state.orders[normalized] = []
    state.guestCart = {}
    state.guestWishlist = []
    state.sessionEmail = normalized
    return { ok: true }
  }

  function signIn({ email, password }) {
    const normalized = String(email).trim().toLowerCase()
    const user = state.users.find((u) => u.email === normalized && u.password === password)
    if (!user) return { ok: false, error: 'invalid' }
    // merge guest cart into user cart
    const existing = state.carts[normalized] || {}
    const merged = { ...existing }
    Object.entries(state.guestCart).forEach(([id, qty]) => {
      merged[id] = (merged[id] || 0) + qty
    })
    state.carts[normalized] = merged
    const wish = new Set([...(state.wishlists[normalized] || []), ...state.guestWishlist])
    state.wishlists[normalized] = [...wish]
    state.guestCart = {}
    state.guestWishlist = []
    state.sessionEmail = normalized
    return { ok: true }
  }

  function signOut() {
    state.sessionEmail = null
  }

  function checkout() {
    if (!state.sessionEmail) return { ok: false, error: 'required' }
    const entries = Object.entries(cart.value)
    if (!entries.length) return { ok: false, error: 'empty' }

    const items = entries.map(([id, quantity]) => {
      const product = getProduct(Number(id))
      return {
        productId: Number(id),
        quantity,
        price: product ? product.price.USD : 0,
        name: product ? product.name : { en: 'Item' }
      }
    })

    const order = {
      id: uid(),
      createdAt: new Date().toISOString(),
      total: cartTotal.value,
      items
    }

    if (!state.orders[state.sessionEmail]) state.orders[state.sessionEmail] = []
    state.orders[state.sessionEmail] = [order, ...state.orders[state.sessionEmail]]
    clearCart()
    state.showCart = false
    return { ok: true, order }
  }

  function reorder(orderId) {
    const order = userOrders.value.find((o) => o.id === orderId)
    if (!order) return
    order.items.forEach((item) => addToCart(item.productId, item.quantity))
    state.showCart = true
  }

  return {
    state,
    currentUser,
    isAuthenticated,
    cart,
    wishlist,
    userOrders,
    cartCount,
    cartTotal,
    toast,
    getProduct,
    addToCart,
    setCartQty,
    removeFromCart,
    clearCart,
    toggleWishlist,
    isWishlisted,
    register,
    signIn,
    signOut,
    checkout,
    reorder
  }
}
