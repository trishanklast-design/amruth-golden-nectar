import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col">
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
          <Link
            to={`/products/${product.slug}`}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <Eye className="w-4 h-4 text-foreground" />
          </Link>

          {/* Product image */}
          <Link to={`/products/${product.slug}`} className="w-full h-full flex items-center justify-center">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-8xl block">{product.image}</span>
            </motion.div>
          </Link>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-honey text-honey" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          {/* Title */}
          <Link to={`/products/${product.slug}`}>
            <h3 className="font-serif text-xl font-medium text-foreground mb-1 hover:text-honey transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
          <p className="text-xs text-forest font-medium mb-4">{product.weight}</p>

          {/* Spacer */}
          <div className="flex-grow" />

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
            <Button 
              onClick={() => addToCart(product)}
              className="flex-1 btn-honey py-3 text-sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="px-4 border-forest/30 text-forest hover:bg-forest/10"
            >
              <Link to={`/products/${product.slug}`}>View</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.badge.toLowerCase() === filter);

  const badges = ['all', ...new Set(products.map(p => p.badge.toLowerCase()))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-cream/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
                Our Collection
              </span>
              <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Premium Organic Honey
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                Each variety is carefully sourced and rigorously tested to ensure you receive only the finest quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 flex-wrap mb-12"
            >
              <Filter className="w-4 h-4 text-muted-foreground mr-2" />
              {badges.map(badge => (
                <button
                  key={badge}
                  onClick={() => setFilter(badge)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === badge
                      ? 'bg-honey text-earth shadow-md'
                      : 'bg-cream/50 text-muted-foreground hover:bg-cream'
                  }`}
                >
                  {badge.charAt(0).toUpperCase() + badge.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Products grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
      </main>

      <Footer />
    </div>
  );
};

export default Products;
