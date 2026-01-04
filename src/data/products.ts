export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  weight: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  benefits: string[];
  ingredients: string;
  storage: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'raw-forest-honey',
    name: 'Raw Forest Honey',
    description: 'Collected from wild forest bee colonies',
    longDescription: 'Our Raw Forest Honey is harvested from pristine forests of Karnataka, where wild bees collect nectar from diverse forest flora. This unprocessed honey retains all natural enzymes, antioxidants, and beneficial compounds.',
    weight: '500g',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 234,
    badge: 'Bestseller',
    image: '🍯',
    benefits: ['Rich in antioxidants', 'Natural immunity booster', 'Aids digestion', 'Soothes throat'],
    ingredients: '100% Pure Raw Forest Honey',
    storage: 'Store in a cool, dry place away from direct sunlight',
  },
  {
    id: 2,
    slug: 'multiflora-honey',
    name: 'Multiflora Honey',
    description: 'Nectar from diverse wildflowers',
    longDescription: 'A beautiful blend of nectars collected from various wildflowers across the Western Ghats. Each batch captures the unique floral essence of the season, offering a complex and delightful flavor profile.',
    weight: '500g',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 189,
    badge: 'Popular',
    image: '🌸',
    benefits: ['Natural energy source', 'Rich in vitamins', 'Supports skin health', 'Mild & versatile taste'],
    ingredients: '100% Pure Multiflora Honey',
    storage: 'Store in a cool, dry place away from direct sunlight',
  },
  {
    id: 3,
    slug: 'tulsi-infused-honey',
    name: 'Tulsi Infused Honey',
    description: 'Holy basil flower honey blend',
    longDescription: 'A unique combination where bees forage on tulsi (holy basil) plantations, creating a naturally infused honey with subtle herbal notes. Perfect for those seeking the combined benefits of honey and tulsi.',
    weight: '350g',
    price: 649,
    originalPrice: 799,
    rating: 4.9,
    reviews: 156,
    badge: 'New',
    image: '🌿',
    benefits: ['Respiratory support', 'Stress relief', 'Anti-inflammatory', 'Ayurvedic wellness'],
    ingredients: '100% Pure Tulsi Infused Honey',
    storage: 'Store in a cool, dry place away from direct sunlight',
  },
  {
    id: 4,
    slug: 'premium-acacia-honey',
    name: 'Premium Acacia Honey',
    description: 'Light, mild & never crystallizes',
    longDescription: 'Our finest Acacia honey is prized for its light golden color, delicate floral aroma, and remarkably smooth texture. Unlike other varieties, it remains liquid for extended periods, making it ideal for everyday use.',
    weight: '500g',
    price: 1299,
    originalPrice: 1499,
    rating: 5.0,
    reviews: 98,
    badge: 'Premium',
    image: '✨',
    benefits: ['Low glycemic index', 'Naturally mild', 'Perfect for diabetics', 'Never crystallizes'],
    ingredients: '100% Pure Acacia Honey',
    storage: 'Store in a cool, dry place away from direct sunlight',
  },
  {
    id: 5,
    slug: 'wild-berry-honey',
    name: 'Wild Berry Honey',
    description: 'Collected from berry-rich highlands',
    longDescription: 'Sourced from the berry-laden hills of the Western Ghats, this honey carries subtle fruity undertones. Bees forage on wild berries creating a distinctively flavored honey thats perfect for desserts.',
    weight: '350g',
    price: 749,
    originalPrice: 899,
    rating: 4.7,
    reviews: 87,
    badge: 'Limited',
    image: '🫐',
    benefits: ['Antioxidant-rich', 'Unique fruity notes', 'Perfect for desserts', 'Seasonal specialty'],
    ingredients: '100% Pure Wild Berry Honey',
    storage: 'Store in a cool, dry place away from direct sunlight',
  },
  {
    id: 6,
    slug: 'eucalyptus-honey',
    name: 'Eucalyptus Honey',
    description: 'From eucalyptus plantations',
    longDescription: 'Harvested from eucalyptus groves, this honey has a distinctive herbal character with menthol-like undertones. Traditionally valued for respiratory wellness and soothing properties.',
    weight: '500g',
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 112,
    badge: 'Therapeutic',
    image: '🌲',
    benefits: ['Respiratory relief', 'Natural decongestant', 'Soothing properties', 'Distinctive flavor'],
    ingredients: '100% Pure Eucalyptus Honey',
    storage: 'Store in a cool, dry place away from direct sunlight',
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};
