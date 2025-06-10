export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  traditionalMethod: string;
  benefits: string[];
  howToUse: string[];
  ingredients: string[];
  category: 'wellness' | 'ghee' | 'sweetener';
  inStock: boolean;
  variants?: {
    size: string;
    price: number;
    originalPrice?: number;
  }[];
}

export const products: Product[] = [
  {
    id: 'shilajit-pure',
    name: 'Pure Himalayan Shilajit',
    tagline: 'Ancient Rejuvenator',
    price: 2499,
    originalPrice: 2999,
    images: [
      '/images/products/shilajit-main.jpg',
      '/images/products/shilajit-lifestyle.jpg',
      '/images/products/shilajit-ingredient.jpg',
      '/images/products/shilajit-packaging.jpg'
    ],
    description: 'Sourced from the pristine heights of the Himalayas, our Pure Shilajit is a potent mineral-rich resin that has been revered in Ayurveda for centuries. This "destroyer of weakness" is carefully extracted and purified using traditional methods to preserve its natural potency.',
    traditionalMethod: 'Our Shilajit is sourced from altitudes above 16,000 feet in the Himalayas. The resin is naturally exuded from rocks during summer months and is collected by experienced local harvesters. It undergoes traditional purification processes including sun-drying and filtration through natural materials, ensuring maximum potency while maintaining its authentic properties.',
    benefits: [
      'Boosts energy and stamina naturally',
      'Supports cognitive function and memory',
      'Rich in fulvic acid and 85+ minerals',
      'Enhances physical performance',
      'Supports healthy aging',
      'Improves nutrient absorption'
    ],
    howToUse: [
      'Take a rice grain-sized portion (300-500mg)',
      'Dissolve in warm water or milk',
      'Consume on empty stomach in the morning',
      'Start with smaller amounts and gradually increase',
      'Best taken consistently for 2-3 months'
    ],
    ingredients: [
      '100% Pure Himalayan Shilajit Resin',
      'Fulvic Acid (minimum 60%)',
      'Natural minerals and trace elements',
      'No additives or preservatives'
    ],
    category: 'wellness',
    inStock: true,
    variants: [
      { size: '10g', price: 1499, originalPrice: 1799 },
      { size: '20g', price: 2499, originalPrice: 2999 },
      { size: '50g', price: 5499, originalPrice: 6499 }
    ]
  },
  {
    id: 'a2-ghee-bilona',
    name: 'A2 Bilona Ghee',
    tagline: 'The Golden Elixir',
    price: 899,
    originalPrice: 1099,
    images: [
      '/images/products/ghee-main.jpg',
      '/images/products/ghee-bilona-process.jpg',
      '/images/products/ghee-lifestyle.jpg',
      '/images/products/ghee-packaging.jpg'
    ],
    description: 'Crafted using the ancient Bilona method, our A2 Ghee is made from the milk of indigenous Gir cows. This traditional hand-churning process preserves the natural goodness and creates the most aromatic, golden ghee that has nourished Indian families for generations.',
    traditionalMethod: 'Our A2 Ghee follows the time-honored Bilona method: Fresh A2 milk from grass-fed Gir cows is first converted to curd using natural cultures. The curd is then hand-churned using a wooden churner (bilona) to extract butter. This butter is slowly heated in copper vessels over wood fire, allowing the moisture to evaporate and creating the purest, most aromatic ghee.',
    benefits: [
      'Rich in fat-soluble vitamins A, D, E, K',
      'Contains beneficial fatty acids',
      'Supports digestive health',
      'High smoke point ideal for cooking',
      'Lactose-free and casein-free',
      'Boosts immunity and brain function'
    ],
    howToUse: [
      'Use for cooking at high temperatures',
      'Add to warm milk or tea',
      'Drizzle over rice, rotis, or vegetables',
      'Take 1 tsp on empty stomach for digestion',
      'Store at room temperature'
    ],
    ingredients: [
      '100% Pure A2 Cow Milk',
      'Made from Gir cow milk only',
      'No additives or preservatives',
      'Traditional Bilona method'
    ],
    category: 'ghee',
    inStock: true,
    variants: [
      { size: '250ml', price: 499, originalPrice: 599 },
      { size: '500ml', price: 899, originalPrice: 1099 },
      { size: '1L', price: 1699, originalPrice: 1999 }
    ]
  },
  {
    id: 'stevia-natural',
    name: 'Natural Stevia Powder',
    tagline: 'Nature\'s Sweet Gift',
    price: 349,
    originalPrice: 449,
    images: [
      '/images/products/stevia-main.jpg',
      '/images/products/stevia-plant.jpg',
      '/images/products/stevia-lifestyle.jpg',
      '/images/products/stevia-packaging.jpg'
    ],
    description: 'Our Natural Stevia Powder is extracted from organically grown Stevia rebaudiana leaves. This zero-calorie natural sweetener is 200 times sweeter than sugar, making it perfect for those seeking a healthy alternative without compromising on taste.',
    traditionalMethod: 'Our Stevia is cultivated in organic farms using traditional farming methods. The leaves are harvested at peak sweetness, then naturally dried and processed using water extraction methods. No chemical solvents are used, ensuring you get the purest form of this natural sweetener.',
    benefits: [
      'Zero calories and zero glycemic index',
      'Safe for diabetics',
      'Does not cause tooth decay',
      '200x sweeter than regular sugar',
      'Rich in antioxidants',
      'Supports weight management'
    ],
    howToUse: [
      'Use 1/4 tsp to replace 1 tsp sugar',
      'Perfect for beverages, desserts, and baking',
      'Start with small amounts and adjust to taste',
      'Mix well to avoid clumping',
      'Store in a cool, dry place'
    ],
    ingredients: [
      '100% Pure Stevia rebaudiana extract',
      'Organically grown leaves',
      'No artificial additives',
      'No fillers or bulking agents'
    ],
    category: 'sweetener',
    inStock: true,
    variants: [
      { size: '50g', price: 249, originalPrice: 299 },
      { size: '100g', price: 349, originalPrice: 449 },
      { size: '250g', price: 799, originalPrice: 999 }
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
