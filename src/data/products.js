const productImage = (slug) => `${process.env.BASE_URL}img/products/${slug}.jpg`

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
    image: productImage('radishes'),
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
    image: productImage('artichokes'),
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
    image: productImage('broccoli'),
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
    image: productImage('cabbages'),
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
    image: productImage('cherries'),
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
    image: productImage('carrots'),
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
    image: productImage('corn'),
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
    image: productImage('grapes'),
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
    image: productImage('onions'),
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
    image: productImage('oranges'),
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
    image: productImage('peas'),
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
    image: productImage('pineapples'),
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
    image: productImage('steaks'),
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
    image: productImage('watermelons'),
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
    image: productImage('sausages'),
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
    image: productImage('avocado'),
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
    image: productImage('strawberries'),
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
    image: productImage('tomatoes'),
    name: { en: 'Tomatoes', he: 'עגבניות', ar: 'طماطم' },
    description: {
      en: 'Sun-ripened for sauces, salads, and snacking.',
      he: 'בשלות שמש לרטבים, סלטים ונשנושים.',
      ar: 'ناضجة للشمس للصلصات والسلطات والوجبات الخفيفة.'
    }
  }
]
