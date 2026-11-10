export interface Flavor {
  id: string;
  name: string;
  type: 'kombucha' | 'aqua-seltzer';
  tagline: string;
  subhead?: string;
  shortDesc: string;
  fullDesc: string;
  tastingNotes: string[];
  ingredients: string;
  canImage: string;
  lifestyleImage: string;
  artImage: string;
  color: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    badgeBg: string;
  };
  featured?: boolean;
  nutrition: {
    calories: string;
    sugar: string;
    abv: string;
    probiotics: string;
  };
  verifiedClaims: string[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Retailer {
  name: string;
  logo: string;
  locationNote?: string;
}

export interface BrandStoryMilestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const OFFICIAL_BADGES: Badge[] = [
  {
    id: 'verified-alcohol-extracted',
    name: 'Verified Alcohol Extracted',
    icon: '/assets/badges/verified-alcohol-extracted.png',
    description: 'Proprietary spinning cone technology gently extracts alcohol without boiling or pasteurization, guaranteeing under 0.5% ABV while keeping live probiotics vibrant.'
  },
  {
    id: 'natural-probiotics',
    name: 'Natural Live Probiotics',
    icon: '/assets/badges/natural-probiotics.png',
    description: 'Authentically fermented with live symbiotic cultures to nurture digestive vitality and natural gut flora balance.'
  },
  {
    id: 'organic-ingredients',
    name: 'Organic Ingredients',
    icon: '/assets/badges/organic-ingredients.png',
    description: 'Steeped with certified organic green and black teas, organic whole juices, and sustainably sourced botanicals.'
  },
  {
    id: 'lower-sugar',
    name: 'Lower Sugar & Calories',
    icon: '/assets/badges/lower-sugar.png',
    description: 'Healthier, naturally lighter effervescence crafted with substantially lower residual sugars than ordinary commercial kombuchas.'
  },
  {
    id: 'clean-ingredients',
    name: 'Clean Ingredients',
    icon: '/assets/badges/clean-ingredients.png',
    description: 'Zero artificial preservatives, zero synthetic colors, and zero chemical extracts. Simply real, wholesome ingredients.'
  },
  {
    id: 'gmo-free',
    name: 'GMO Free',
    icon: '/assets/badges/gmo-free.png',
    description: 'Every ingredient is rigorously verified non-GMO from farm to can.'
  },
  {
    id: 'gluten-free',
    name: 'Gluten Free',
    icon: '/assets/badges/gluten-free.png',
    description: 'Naturally brewed without wheat, barley, or gluten-containing grains for pure, worry-free hydration.'
  },
  {
    id: 'antioxidants-enzymes',
    name: 'Antioxidants & Enzymes',
    icon: '/assets/badges/antioxidants-enzymes.png',
    description: 'Naturally rich in bioavailable tea polyphenols and active metabolic fermentation enzymes.'
  },
  {
    id: 'vegan-friendly',
    name: 'Vegan Friendly',
    icon: '/assets/badges/vegan-friendly.png',
    description: '100% plant-based brewing process from organic tea leaves to pure botanical fruit essences.'
  },
  {
    id: 'paleo-friendly',
    name: 'Paleo Friendly',
    icon: '/assets/badges/paleo-friendly.png',
    description: 'Primitive, primal nourishment honoring ancient naturopathic "food as medicine" traditions.'
  }
];

export const RETAILERS: Retailer[] = [
  { name: 'Hannaford', logo: '/assets/retailers/hannaford.png' },
  { name: 'Price Chopper Market 32', logo: '/assets/retailers/price-chopper.png' },
  { name: "Shaw's", logo: '/assets/retailers/shaws.png' },
  { name: 'Healthy Living Market & Cafe', logo: '/assets/retailers/healthy-living.png' },
  { name: 'City Market Onion River Co-op', logo: '/assets/retailers/city-market.png' },
  { name: 'Middlebury Natural Foods Co-op', logo: '/assets/retailers/middlebury-coop.png' }
];

export const FLAVORS: Flavor[] = [
  // KOMBUCHA
  {
    id: 'strawberry-sage',
    name: 'Strawberry Sage',
    type: 'kombucha',
    tagline: 'Soft & Sweet',
    subhead: 'Official Featured Flavor',
    shortDesc: 'Soft strawberries mingling with subtle notes of sage, basil and mint.',
    fullDesc: 'Soft and sweet strawberries mingle with subtle notes of sage, basil and mint, creating a gentle yet refreshing and satisfying flavor. Handcrafted in Vermont with live cultures.',
    tastingNotes: ['Soft Strawberries', 'Earthy Sage', 'Sweet Basil', 'Crisp Peppermint'],
    ingredients: 'Kombucha* (Filtered Water, Kombucha Culture, Black Tea, Green Tea, Cane Sugar), Strawberry Juice from Concentrate*, Strawberry Flavor*, Sage Flavor*, Basil Flavor*, Peppermint flavor*',
    canImage: '/assets/original/strawberry-sage/can.png',
    lifestyleImage: '/assets/original/strawberry-sage/lifestyle.jpg',
    artImage: '/assets/original/strawberry-sage/art.jpg',
    color: {
      primary: '#9c2438',
      secondary: '#4d101a',
      accent: '#e75a70',
      glow: 'rgba(231, 90, 112, 0.45)',
      badgeBg: 'bg-rose-950/60 border-rose-500/30 text-rose-200'
    },
    featured: true,
    nutrition: {
      calories: '50 cal',
      sugar: '10g sugar',
      abv: '< 0.5% ABV',
      probiotics: 'Live Probiotics'
    },
    verifiedClaims: ['Soft & Sweet Strawberry Notes', 'Subtle Sage & Basil Aromatics', 'Verified Alcohol Extracted', 'Guaranteed <0.5% ABV']
  },
  {
    id: 'blueberry-social',
    name: 'Blueberry Social',
    type: 'kombucha',
    tagline: 'Sweet, Tangy & Smoky',
    shortDesc: 'Blueberry sweetness mingling with the tang of lemon and cool smokiness from cardamom.',
    fullDesc: 'The combination of blueberry sweetness mingling with the tang of lemon and a touch of cool smokiness from cardamom offers all a refreshing and revitalizing indulgence.',
    tastingNotes: ['Wild Blueberry Sweetness', 'Zesty Lemon Tang', 'Smoky Cardamom', 'Crisp Green Tea'],
    ingredients: 'Kombucha* (Filtered Water, Kombucha Culture, Black Tea, Green Tea, Cane Sugar), Blueberry Juice from Concentrate*, Lemon Juice from Concentrate*, Blueberry Flavor*, Cardamom Flavor*',
    canImage: '/assets/original/blueberry-social/can.png',
    lifestyleImage: '/assets/original/blueberry-social/lifestyle.jpg',
    artImage: '/assets/original/blueberry-social/art.jpg',
    color: {
      primary: '#213a70',
      secondary: '#111d38',
      accent: '#5e85db',
      glow: 'rgba(94, 133, 219, 0.45)',
      badgeBg: 'bg-blue-950/60 border-blue-500/30 text-blue-200'
    },
    nutrition: {
      calories: '50 cal',
      sugar: '10g sugar',
      abv: '< 0.5% ABV',
      probiotics: 'Live Probiotics'
    },
    verifiedClaims: ['Wild Blueberry & Cardamom', 'Refreshing & Revitalizing', 'Authentically Fermented', 'Lower Sugar & Calories']
  },
  {
    id: 'elderberry',
    name: 'Elderberry',
    type: 'kombucha',
    tagline: 'Potent & Immune-Studied',
    shortDesc: 'Sweet and delicious, potent digestive aid all year round and a good sidekick during cold season.',
    fullDesc: 'Sweet and delicious, this blend is not only a potent digestive aid all year round, but a good sidekick during cold season. Elderberries have long been studied for their immune-boosting effects.',
    tastingNotes: ['Ripe Elderberries', 'Dark Berry Tartness', 'Smooth Tannins', 'Clean Herbal Finish'],
    ingredients: 'Kombucha* (Filtered Water, Kombucha Culture, Black Tea, Green Tea, Cane Sugar), Elderberry Juice from Concentrate*',
    canImage: '/assets/original/elderberry/can.png',
    lifestyleImage: '/assets/original/elderberry/lifestyle.jpg',
    artImage: '/assets/original/elderberry/art.jpg',
    color: {
      primary: '#531b3e',
      secondary: '#280c1d',
      accent: '#b2478a',
      glow: 'rgba(178, 71, 138, 0.45)',
      badgeBg: 'bg-fuchsia-950/60 border-fuchsia-500/30 text-fuchsia-200'
    },
    nutrition: {
      calories: '45 cal',
      sugar: '9g sugar',
      abv: '< 0.5% ABV',
      probiotics: 'Live Probiotics'
    },
    verifiedClaims: ['Immune-Studied Elderberry', 'Potent Digestive Aid', 'Cold Season Ally', '100% Organic Elderberry Juice']
  },
  {
    id: 'peach-out',
    name: 'Peach Out',
    type: 'kombucha',
    tagline: 'Juicy Peach & Fresh Mint',
    shortDesc: 'A delightful blend of juicy peach, refreshing mint and bubbly kombucha.',
    fullDesc: 'A delightful blend of juicy peach, refreshing mint and bubbly kombucha, this flavor will delight experienced kombucha lovers and rookies alike.',
    tastingNotes: ['Juicy Summer Peach', 'Crisp Peppermint', 'Effervescent Sparkle', 'Balanced Tartness'],
    ingredients: 'Kombucha* (Filtered Water, Kombucha Culture, Black Tea, Green Tea, Cane Sugar), Peach Juice from Concentrate*, Peach Flavor*, Peppermint flavor*',
    canImage: '/assets/original/peach-out/can.png',
    lifestyleImage: '/assets/original/peach-out/lifestyle.jpg',
    artImage: '/assets/original/peach-out/art.jpg',
    color: {
      primary: '#bd532f',
      secondary: '#4d1e0d',
      accent: '#f28e6b',
      glow: 'rgba(242, 142, 107, 0.45)',
      badgeBg: 'bg-orange-950/60 border-orange-500/30 text-orange-200'
    },
    nutrition: {
      calories: '50 cal',
      sugar: '10g sugar',
      abv: '< 0.5% ABV',
      probiotics: 'Live Probiotics'
    },
    verifiedClaims: ['Luscious Peach & Garden Mint', 'Crowd-Pleasing Favorite', 'Subtle Effervescence', 'Pure Organic Cane Ferment']
  },
  {
    id: 'blood-orange',
    name: 'Blood Orange',
    type: 'kombucha',
    tagline: 'Sweet, Tangy & Madagascar Vanilla',
    shortDesc: 'Reminiscent of a refreshing creamsicle on a hot summer day with real Madagascar vanilla beans.',
    fullDesc: 'Sweet and tangy, our Blood Orange is reminiscent of a refreshing creamsicle on a hot summer day. Prepare to be delighted by the smooth vanilla finish, brought to you by real, organic Madagascar vanilla beans.',
    tastingNotes: ['Sun-Drenched Blood Orange', 'Creamy Vanilla Bean', 'Zesty Citrus Tang', 'Velvety Finish'],
    ingredients: 'Kombucha* (Filtered Water, Kombucha Culture, Black Tea, Green Tea, Cane Sugar), Blood Orange Juice from Concentrate*, Blood Orange Flavor*, Vanilla Flavor*',
    canImage: '/assets/original/blood-orange/can.png',
    lifestyleImage: '/assets/original/blood-orange/lifestyle.jpg',
    artImage: '/assets/original/blood-orange/art.png',
    color: {
      primary: '#b23720',
      secondary: '#541509',
      accent: '#f26e52',
      glow: 'rgba(242, 110, 82, 0.45)',
      badgeBg: 'bg-red-950/60 border-red-500/30 text-red-200'
    },
    nutrition: {
      calories: '50 cal',
      sugar: '10g sugar',
      abv: '< 0.5% ABV',
      probiotics: 'Live Probiotics'
    },
    verifiedClaims: ['Real Madagascar Vanilla Beans', 'Blood Orange Citrus Spark', 'Summer Creamsicle Profile', 'Antioxidant & Enzyme Rich']
  },
  {
    id: 'hibiscus-ginger-lime',
    name: 'Hibiscus Ginger Lime',
    type: 'kombucha',
    tagline: 'Floral, Spicy & Awakened',
    shortDesc: 'Floral lime and spicy ginger awaken your taste buds in an exciting and refreshing blend.',
    fullDesc: 'Floral lime and spicy ginger come together to awaken your taste buds in a way that is both exciting and refreshing.',
    tastingNotes: ['Ruby Hibiscus Petals', 'Spicy Root Ginger', 'Tart Persian Lime', 'Warming Herbal Kick'],
    ingredients: 'Kombucha* (Filtered Water, Kombucha Culture, Black Tea, Green Tea, Cane Sugar), Ginger Juice from Concentrate*, Lime Juice*, Hibiscus Flowers*',
    canImage: '/assets/original/hibiscus-ginger-lime/can.png',
    lifestyleImage: '/assets/original/hibiscus-ginger-lime/lifestyle.jpg',
    artImage: '/assets/original/hibiscus-ginger-lime/art.jpg',
    color: {
      primary: '#911e43',
      secondary: '#420b1c',
      accent: '#e75382',
      glow: 'rgba(231, 83, 130, 0.45)',
      badgeBg: 'bg-pink-950/60 border-pink-500/30 text-pink-200'
    },
    nutrition: {
      calories: '50 cal',
      sugar: '10g sugar',
      abv: '< 0.5% ABV',
      probiotics: 'Live Probiotics'
    },
    verifiedClaims: ['Cold-Pressed Ginger Juice', 'Real Whole Hibiscus Flowers', 'Zesty Fresh-Squeezed Lime', 'Awakening Botanical Profile']
  },

  // AQUA SELTZER PROBIOTIC
  {
    id: 'raspberry-lime',
    name: 'Raspberry + Lime',
    type: 'aqua-seltzer',
    tagline: 'Juicy Burst & Bright Twist',
    shortDesc: 'A delicious burst of raspberry with a bright twist of lime and clinically studied DE111® probiotics.',
    fullDesc: 'A delicious burst of raspberry with a bright twist of lime invites you to take that second (or third, or fourth) sip. Formulated with Bacillus Subtilis DE111® probiotics.',
    tastingNotes: ['Ripe Field Raspberries', 'Crisp Lime Zest', 'Ultra-Light Effervescence', 'Clean Fizzy Finish'],
    ingredients: 'Filtered Carbonated Water, Kombucha*, Raspberry Flavor*, Lime Flavor*, Hibiscus Powder*, Bacillus Subtilis DE111® Probiotics**',
    canImage: '/assets/original/raspberry-lime/can.png',
    lifestyleImage: '/assets/original/raspberry-lime/lifestyle.jpg',
    artImage: '/assets/original/raspberry-lime/art.png',
    color: {
      primary: '#8d1747',
      secondary: '#36061a',
      accent: '#e74b86',
      glow: 'rgba(231, 75, 134, 0.45)',
      badgeBg: 'bg-rose-950/60 border-rose-500/30 text-rose-200'
    },
    nutrition: {
      calories: '15 cal',
      sugar: '1g sugar',
      abv: '0.0% Non-Alcoholic',
      probiotics: 'DE111® Probiotics'
    },
    verifiedClaims: ['DE111® Probiotics', 'Only 15 Calories', 'Subtly Bubbly Seltzer', 'Hibiscus Botanical Infusion']
  },
  {
    id: 'pomegranate-cherry',
    name: 'Pomegranate + Cherry',
    type: 'aqua-seltzer',
    tagline: 'Sun-Ripened & Lightly Fizzy',
    shortDesc: 'Sun-ripened cherry notes pair wonderfully with the tartness of pomegranate for a hydrating, fizzy combo.',
    fullDesc: 'Sun-ripened cherry notes pair wonderfully with the tartness of pomegranate, creating this hydrating combo with a light, fizzy finish. Powered by live DE111® probiotics.',
    tastingNotes: ['Sun-Ripened Cherries', 'Tart Pomegranate Arils', 'Hydrating Bubbles', 'Crisp Herbal Depth'],
    ingredients: 'Filtered Carbonated Water, Kombucha*, Pomegranate Flavor*, Cherry Flavor*, Hibiscus Powder*, Bacillus Subtilis DE111® Probiotics**',
    canImage: '/assets/original/pomegranate-cherry/can.png',
    lifestyleImage: '/assets/original/pomegranate-cherry/lifestyle.png',
    artImage: '/assets/original/pomegranate-cherry/art.png',
    color: {
      primary: '#6b172a',
      secondary: '#2e0811',
      accent: '#bd3350',
      glow: 'rgba(189, 51, 80, 0.45)',
      badgeBg: 'bg-red-950/60 border-red-500/30 text-red-200'
    },
    nutrition: {
      calories: '15 cal',
      sugar: '1g sugar',
      abv: '0.0% Non-Alcoholic',
      probiotics: 'DE111® Probiotics'
    },
    verifiedClaims: ['Sun-Ripened Cherry Tartness', 'Hydrating Light Carbonation', 'Bacillus Subtilis DE111®', 'Hibiscus Infused Water']
  },
  {
    id: 'cucumber-mint',
    name: 'Cucumber + Mint',
    type: 'aqua-seltzer',
    tagline: 'Cool, Tangy & Refreshing',
    shortDesc: 'A unique flavor combination of cool cucumber, tangy lime, and clean mint that leaves you refreshed.',
    fullDesc: 'A unique flavor combination of cool cucumber, tangy lime, and clean mint that leaves you feeling refreshed. Light probiotic hydration with zero heaviness.',
    tastingNotes: ['Cool Garden Cucumber', 'Clean Spearmint', 'Zesty Key Lime', 'Crisp Mineral Sparkle'],
    ingredients: 'Filtered Carbonated Water, Kombucha*, Cucumber Flavor*, Lime Flavor*, Mint Flavor*, Bacillus Subtilis DE111® Probiotics**',
    canImage: '/assets/original/cucumber-mint/can.png',
    lifestyleImage: '/assets/original/cucumber-mint/lifestyle.jpg',
    artImage: '/assets/original/cucumber-mint/art.png',
    color: {
      primary: '#1c5248',
      secondary: '#0a241f',
      accent: '#47a190',
      glow: 'rgba(71, 161, 144, 0.45)',
      badgeBg: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-200'
    },
    nutrition: {
      calories: '15 cal',
      sugar: '1g sugar',
      abv: '0.0% Non-Alcoholic',
      probiotics: 'DE111® Probiotics'
    },
    verifiedClaims: ['Cool Garden Cucumber Crisp', 'Clean Mint Aromatics', '15 Calories Per Can', 'Clinically Studied Probiotics']
  },
  {
    id: 'grapefruit-thyme',
    name: 'Grapefruit + Thyme',
    type: 'aqua-seltzer',
    tagline: 'Bright Citrus & Herbal Notes',
    shortDesc: 'Bright citrus notes mingle with subtle floral undertones of thyme for a juicy, all-day refresher.',
    fullDesc: 'Bright citrus notes mingle with subtle floral undertones of thyme for a juicy refresher that is great any time of day. Packed with active DE111® probiotic cultures.',
    tastingNotes: ['Ruby Grapefruit Zest', 'Floral Wild Thyme', 'Juicy Citrus Bite', 'Refreshing Crispness'],
    ingredients: 'Filtered Carbonated Water, Kombucha*, Grapefruit Flavor*, Thyme Flavor*, Bacillus Subtilis DE111® Probiotics**',
    canImage: '/assets/original/grapefruit-thyme/can.png',
    lifestyleImage: '/assets/original/grapefruit-thyme/lifestyle.jpg',
    artImage: '/assets/original/grapefruit-thyme/art.png',
    color: {
      primary: '#ad3f33',
      secondary: '#471611',
      accent: '#e66b5c',
      glow: 'rgba(230, 107, 92, 0.45)',
      badgeBg: 'bg-orange-950/60 border-orange-500/30 text-orange-200'
    },
    nutrition: {
      calories: '15 cal',
      sugar: '1g sugar',
      abv: '0.0% Non-Alcoholic',
      probiotics: 'DE111® Probiotics'
    },
    verifiedClaims: ['Ruby Grapefruit & Thyme', 'Juicy Anytime Refresher', '15 Calories Light Hydration', 'Live Probiotic Cultures']
  }
];

export const BRAND_STORY_MILESTONES: BrandStoryMilestone[] = [
  {
    year: '2005',
    title: 'Naturopathy & The Vermont Farmhouse',
    description: 'Founder Jeff Weaber honed brewing craft at Lucky Labrador Brewing in Oregon while his wife Katina studied Naturopathy, Midwifery, and Acupuncture. Moving to Vermont, they purchased a Salisbury farmhouse where "food as medicine" took root.'
  },
  {
    year: '2007',
    title: 'Farmers Market Roots & Official Launch',
    description: 'Testing small carboy batches at local Vermont farmers markets, the community embraced genuine raw kombucha. Aqua ViTea was officially born in 2007 as one of the very first commercial kombucha makers in the United States.',
    highlight: true
  },
  {
    year: 'Pioneer',
    title: 'Kombucha on Tap & Sustainable Draft',
    description: 'Aqua ViTea pioneered the kombucha-on-tap model in the US, drastically eliminating single-use packaging and allowing co-ops and grocery stores to fill reusable growlers.'
  },
  {
    year: 'Middlebury',
    title: '153 Pond Lane & 30 Local Careers',
    description: 'Operating from our 153 Pond Lane facility in Middlebury, VT, Aqua ViTea proudly employs 30 dedicated full-time Vermonters, training a long-term local rural workforce.'
  },
  {
    year: 'Technology',
    title: 'Verified Non-Alcoholic (< 0.5% ABV)',
    description: 'Refusing to compromise raw probiotic vitality, Aqua ViTea invested in proprietary spun-cone technology to extract alcohol naturally below 0.5% ABV without heating, boiling, or destroying enzymes.',
    highlight: true
  }
];

export const FAQS = [
  {
    question: 'How does Aqua ViTea verify that its kombucha is non-alcoholic?',
    answer: 'Aqua ViTea uses a state-of-the-art spinning cone extraction technology that separates alcohol at room temperature without boiling or pasteurizing. This ensures every single batch is strictly verified non-alcohol compliant (under 0.5% ABV) while safeguarding live probiotic bacteria, digestive enzymes, and vibrant tea flavor.'
  },
  {
    question: 'Are the probiotics in Aqua ViTea live and active?',
    answer: 'Yes! Our kombucha is naturally fermented with a symbiotic colony of beneficial organisms (SCOBY) and is never heat-pasteurized. Our Aqua Seltzer line is formulated with Bacillus Subtilis DE111®, a clinically studied, resilient live probiotic strain that survives stomach acid to support digestive balance.'
  },
  {
    question: 'How is Aqua ViTea lower in sugar and calories than conventional drinks?',
    answer: 'Most of the organic cane sugar used during our traditional brewing process is consumed naturally by the live culture during fermentation as fuel. We formulate our blends to be refreshingly light and balanced rather than sugary, offering 45–50 calories in kombucha and just 15 calories in our Aqua Seltzer.'
  },
  {
    question: 'Where is Aqua ViTea brewed and handcrafted?',
    answer: 'Every can and keg of Aqua ViTea is authentically brewed, canned, and tested at our state-of-the-art facility located at 153 Pond Lane in Middlebury, Vermont, USA, supported by our team of thirty full-time local artisans.'
  },
  {
    question: 'Where can I purchase Aqua ViTea near me?',
    answer: 'Aqua ViTea is available at select grocery retailers across New England and beyond, including Hannaford, Price Chopper / Market 32, Shaw\'s, Healthy Living Market & Cafe, City Market Onion River Co-op, and Middlebury Natural Foods Co-op. To find a nearby stockist or inquire about distribution, contact our team directly at contact@aquavitea.com.'
  }
];

