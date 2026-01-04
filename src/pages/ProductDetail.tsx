import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Minus, Plus, ChevronLeft, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-cormorant text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild className="btn-honey">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    // Navigate to cart/checkout
    navigate('/products');
  };

  // Get related products
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 md:pt-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/products" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Link>
        </div>

        {/* Product Section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-cream to-secondary rounded-3xl p-12 flex items-center justify-center sticky top-32">
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      product.badge === 'Premium' 
                        ? 'bg-forest text-cream' 
                        : product.badge === 'Bestseller'
                        ? 'bg-honey text-earth'
                        : 'bg-amber/20 text-amber-glow'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  
                  <motion.span 
                    className="text-[180px]"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {product.image}
                  </motion.span>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-honey text-honey' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Title & Description */}
                <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-forest font-medium mb-4">{product.weight}</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-cormorant text-4xl font-bold text-foreground">
                    ₹{product.price}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-sm text-forest font-semibold px-3 py-1 bg-forest/10 rounded-full">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-8">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 btn-honey py-6 text-base"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={handleBuyNow}
                    variant="outline" 
                    className="flex-1 py-6 text-base border-forest text-forest hover:bg-forest hover:text-white"
                  >
                    Buy Now
                  </Button>
                </div>

                {/* Trust Features */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-cream/30 rounded-2xl mb-8">
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-forest mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-forest mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Lab Tested</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="w-6 h-6 text-forest mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Easy Returns</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="font-cormorant text-xl font-semibold mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-forest flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Ingredients: </span>
                    <span className="text-muted-foreground">{product.ingredients}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Storage: </span>
                    <span className="text-muted-foreground">{product.storage}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="font-cormorant text-3xl font-bold text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/products/${relatedProduct.slug}`}
                    className="block glass-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-cream to-secondary p-8 flex items-center justify-center">
                      <span className="text-6xl">{relatedProduct.image}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-medium mb-1">{relatedProduct.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{relatedProduct.weight}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">₹{relatedProduct.price}</span>
                        <span className="text-sm text-muted-foreground line-through">₹{relatedProduct.originalPrice}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
