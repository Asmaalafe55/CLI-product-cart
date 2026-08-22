export const products = [
  {
    id: 1,
    slug: 'radishes',
    icon: 'raddish',
    type: 'vegetable',
    price: { USD: 3.26 },
    stock: 48,
    rating: 4.6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Radishes', he: 'צנוניות', ar: 'فجل' },
    description: {
      en: 'Crisp bunches with a peppery bite — perfect for salads.',
      he: 'צרורות פריכות עם נגיעה חריפה — מושלמות לסלט.',
      ar: 'حزم مقرمشة بطعم فلفلي — مثالية للسلطات.'
    }
  },
  {
    id: 2,
    slug: 'artichokes',
    icon: 'artichoke',
    type: 'vegetable',
    price: { USD: 9.44 },
    stock: 22,
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1601493700631-88475873e891?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Artichokes', he: 'ארטישוק', ar: 'خرشوف' },
    description: {
      en: 'Tender hearts ready for roasting or dipping.',
      he: 'לבבות רכים מושלמים לקלייה או לטבילה.',
      ar: 'قلوب طرية مثالية للشوي أو التغميس.'
    }
  },
  {
    id: 3,
    slug: 'broccoli',
    icon: 'broccoli',
    type: 'vegetable',
    price: { USD: 5.2 },
    stock: 35,
    rating: 4.4,
    featured: true,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Broccoli', he: 'ברוקולי', ar: 'بروكلي' },
    description: {
      en: 'Deep green florets packed with freshness.',
      he: 'תפרחות ירוקות עמוקות מלאות רעננות.',
      ar: 'زهرات خضراء غنية بالانتعاش.'
    }
  },
  {
    id: 4,
    slug: 'cabbages',
    icon: 'cabbage',
    type: 'vegetable',
    price: { USD: 0.95 },
    stock: 60,
    rating: 4.2,
    featured: false,
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Cabbages', he: 'כרוב', ar: 'ملفوف' },
    description: {
      en: 'Sweet crunch for slaws and slow braises.',
      he: 'פריכות מתוקה לסלטים ולבישול איטי.',
      ar: 'قرمشة حلوة للسلطات والطهي البطيء.'
    }
  },
  {
    id: 5,
    slug: 'cherries',
    icon: 'cherry',
    type: 'fruit',
    price: { USD: 1.04 },
    stock: 40,
    rating: 4.9,
    featured: true,
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Cherries', he: 'דובדבנים', ar: 'كرز' },
    description: {
      en: 'Ruby-sweet and juicy — snack straight from the bowl.',
      he: 'מתוקים ועסיסיים — נשנוש ישר מהקערה.',
      ar: 'حلاوة ياقوتية وعصيرية — للوجبات الخفيفة.'
    }
  },
  {
    id: 6,
    slug: 'carrots',
    icon: 'carrot',
    type: 'vegetable',
    price: { USD: 4.82 },
    stock: 55,
    rating: 4.5,
    featured: false,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Carrots', he: 'גזר', ar: 'جزر' },
    description: {
      en: 'Earthy sweetness for roasting and juicing.',
      he: 'מתיקות אדמתיות לקלייה ולמיצים.',
      ar: 'حلاوة ترابية للشوي والعصائر.'
    }
  },
  {
    id: 7,
    slug: 'corn',
    icon: 'corn',
    type: 'vegetable',
    price: { USD: 7.53 },
    stock: 28,
    rating: 4.7,
    featured: false,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Corn', he: 'תירס', ar: 'ذرة' },
    description: {
      en: 'Golden ears with buttery summer flavor.',
      he: 'שיבולים זהובות בטעם קיץ חמאתי.',
      ar: 'كيزان ذهبية بنكهة صيفية زبدية.'
    }
  },
  {
    id: 8,
    slug: 'grapes',
    icon: 'grapes',
    type: 'fruit',
    price: { USD: 4.94 },
    stock: 33,
    rating: 4.6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Grapes', he: 'ענבים', ar: 'عنب' },
    description: {
      en: 'Cool clusters for cheese boards and kids\' snacks.',
      he: 'אשכולות קרירים למגשי גבינות ולנשנושים.',
      ar: 'عناقيد منعشة لأطباق الجبن والوجبات الخفيفة.'
    }
  },
  {
    id: 9,
    slug: 'onions',
    icon: 'onion',
    type: 'vegetable',
    price: { USD: 6.45 },
    stock: 70,
    rating: 4.1,
    featured: false,
    image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Onions', he: 'בצל', ar: 'بصل' },
    description: {
      en: 'Kitchen essential — caramelizes into pure comfort.',
      he: 'יסוד במטבח — מתקרמל לנוחות טהורה.',
      ar: 'أساسي في المطبخ — يتكرمل ليصبح راحة خالصة.'
    }
  },
  {
    id: 10,
    slug: 'oranges',
    icon: 'orange',
    type: 'fruit',
    price: { USD: 9.95 },
    stock: 45,
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Oranges', he: 'תפוזים', ar: 'برتقال' },
    description: {
      en: 'Bright citrus sunshine in every peel.',
      he: 'שמש הדרים בכל קליפה.',
      ar: 'شمس حمضيات مشرقة في كل قشرة.'
    }
  },
  {
    id: 11,
    slug: 'peas',
    icon: 'peas',
    type: 'vegetable',
    price: { USD: 2.61 },
    stock: 38,
    rating: 4.3,
    featured: false,
    image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Peas', he: 'אפונה', ar: 'بازلاء' },
    description: {
      en: 'Sweet little pearls for pasta and spring plates.',
      he: 'פנינים מתוקות לפסטה ולמנות אביב.',
      ar: 'لآلئ حلوة للمعكرونة وأطباق الربيع.'
    }
  },
  {
    id: 12,
    slug: 'pineapples',
    icon: 'pineapple',
    type: 'fruit',
    price: { USD: 1.62 },
    stock: 18,
    rating: 4.7,
    featured: false,
    image: 'https://images.unsplash.com/photo-1490885578174-ecda6e5f4d6a?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Pineapples', he: 'אננס', ar: 'أناناس' },
    description: {
      en: 'Tropical tang — grill it or juice it.',
      he: 'חמיצות טרופית — לקלייה או למיץ.',
      ar: 'حموضة استوائية — للشوي أو العصير.'
    }
  },
  {
    id: 13,
    slug: 'steaks',
    icon: 'steak',
    type: 'meat',
    price: { USD: 8.32 },
    stock: 16,
    rating: 4.9,
    featured: true,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Steaks', he: 'סטייקים', ar: 'شرائح لحم' },
    description: {
      en: 'Butcher-cut richness for weekend feasts.',
      he: 'עשירות לקולקציה של סוף השבוע.',
      ar: 'غنى مقطوع بعناية لمآدب نهاية الأسبوع.'
    }
  },
  {
    id: 14,
    slug: 'watermelons',
    icon: 'watermelon',
    type: 'fruit',
    price: { USD: 5.08 },
    stock: 12,
    rating: 4.8,
    featured: false,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784422?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Watermelons', he: 'אבטיחים', ar: 'بطيخ' },
    description: {
      en: 'Hydrating summer icon — chill before slicing.',
      he: 'אייקון הקיץ — לקרר לפני החיתוך.',
      ar: 'أيقونة الصيف — برّده قبل التقطيع.'
    }
  },
  {
    id: 15,
    slug: 'sausages',
    icon: 'sausage',
    type: 'meat',
    price: { USD: 3.69 },
    stock: 26,
    rating: 4.4,
    featured: false,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Sausages', he: 'נקניקיות', ar: 'نقانق' },
    description: {
      en: 'Savory links for grill nights and brunch.',
      he: 'טעמים עשירים למנגל ולארוחות בוקר.',
      ar: 'روابط لذيذة للمشاوي والإفطار.'
    }
  },
  {
    id: 16,
    slug: 'avocado',
    icon: 'peas',
    type: 'fruit',
    price: { USD: 2.4 },
    stock: 30,
    rating: 4.9,
    featured: true,
    image: 'https://images.unsplash.com/photo-1523049673857-eb3fef66137e?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Avocados', he: 'אבוקדו', ar: 'أفوكادو' },
    description: {
      en: 'Creamy green gold for toast and bowls.',
      he: 'זהב ירוק קרמי לטוסט ולקערות.',
      ar: 'ذهب أخضر كريمي للتوست والأطباق.'
    }
  },
  {
    id: 17,
    slug: 'strawberries',
    icon: 'cherry',
    type: 'fruit',
    price: { USD: 3.15 },
    stock: 42,
    rating: 4.9,
    featured: true,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Strawberries', he: 'תותים', ar: 'فراولة' },
    description: {
      en: 'Perfume-sweet berries for desserts and breakfast.',
      he: 'מתוקות ובשמיות לקינוחים ולארוחת בוקר.',
      ar: 'توت عطري حلو للحلويات والإفطار.'
    }
  },
  {
    id: 18,
    slug: 'tomatoes',
    icon: 'raddish',
    type: 'vegetable',
    price: { USD: 2.85 },
    stock: 50,
    rating: 4.6,
    featured: false,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=80',
    name: { en: 'Tomatoes', he: 'עגבניות', ar: 'طماطم' },
    description: {
      en: 'Sun-ripened for sauces, salads, and snacking.',
      he: 'בשלות שמש לרטבים, סלטים ונשנושים.',
      ar: 'ناضجة للشمس للصلصات والسلطات والوجبات الخفيفة.'
    }
  }
]
