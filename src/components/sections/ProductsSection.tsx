import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Raw Forest Honey',
    description: 'Collected from wild forest bee colonies',
    weight: '500g',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 234,
    badge: 'Bestseller',
    image: '🍯',
  },
  {
    id: 2,
    name: 'Multiflora Honey',
    description: 'Nectar from diverse wildflowers',
    weight: '500g',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 189,
    badge: 'Popular',
    image: '🌸',
  },
  {
    id: 3,
    name: 'Tulsi Infused Honey',
    description: 'Holy basil flower honey blend',
    weight: '350g',
    price: 649,
    originalPrice: 799,
    rating: 4.9,
    reviews: 156,
    badge: 'New',
    image: '🌿',
  },
  {
    id: 4,
    name: 'Premium Acacia Honey',
    description: 'Light, mild & never crystallizes',
    weight: '500g',
    price: 1299,
    originalPrice: 1499,
    rating: 5.0,
    reviews: 98,
    badge: 'Premium',
    image: '✨',
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass-card rounded-3xl overflow-hidden">
        {/* Image area */}
        <div className="relative aspect-square bg-gradient-to-br from-cream to-secondary p-8">
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              product.badge === 'Premium' 
                ? 'bg-forest text-cream' 
                : product.badge === 'Bestseller'
                ? 'bg-honey text-earth'
                : 'bg-amber/20 text-amber-glow'
            }`}>
              {product.badge}
            </span>
          </div>

          {/* Quick view button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="w-4 h-4 text-foreground" />
          </motion.button>

          {/* Product image placeholder */}
          <motion.div
            className="w-full h-full flex items-center justify-center"
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <span className="text-8xl block mb-2">{product.image}</span>
              <p className="text-xs text-muted-foreground">Product Image</p>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-honey text-honey" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-medium text-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
          <p className="text-xs text-forest font-medium mb-4">{product.weight}</p>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-2xl font-semibold text-foreground">
              ₹{product.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
            <span className="text-xs text-forest font-medium px-2 py-1 bg-forest/10 rounded-full">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% off
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1 btn-honey py-3 text-sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="px-4 border-forest/30 text-forest hover:bg-forest/10">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-cream/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-honey/5 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground"
          >
            Premium Collection of
            <span className="text-honey-gradient"> Pure Honey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Each variety is carefully sourced and rigorously tested to ensure 
            you receive only the finest quality organic honey.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-forest inline-flex items-center gap-2">
            View All Products
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-12 border-t border-border"
        >
          {['COD Available', 'Free Shipping ₹500+', 'UPI / Cards Accepted', 'Easy Returns'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-forest" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
