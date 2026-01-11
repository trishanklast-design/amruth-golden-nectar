import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ShoppingCart, 
  Minus, 
  Plus, 
  ChevronLeft, 
  Check, 
  Truck, 
  Shield, 
  RotateCcw,
  Heart,
  Share2,
  Zap,
  Award,
  Leaf,
  Clock,
  Package,
  ThumbsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const buyButtonsRef = useRef<HTMLDivElement>(null);

  const product = getProductBySlug(slug || '');

  // Intersection Observer to detect when buy buttons are out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );

    if (buyButtonsRef.current) {
      observer.observe(buyButtonsRef.current);
    }

    return () => observer.disconnect();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="text-8xl mb-6">🍯</div>
              <h1 className="font-cormorant text-4xl font-bold mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The honey you're looking for seems to have flown away with the bees!
              </p>
              <Button asChild className="btn-honey">
                <Link to="/products">Browse All Products</Link>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/products');
  };

  const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100);
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  // Mock reviews data
  const reviews = [
    { id: 1, name: "Priya S.", rating: 5, date: "2 weeks ago", comment: "Absolutely amazing honey! The taste is so pure and natural. My family loves it.", verified: true },
    { id: 2, name: "Rahul M.", rating: 5, date: "1 month ago", comment: "Best quality honey I've ever purchased online. The packaging was excellent.", verified: true },
    { id: 3, name: "Anita K.", rating: 4, date: "1 month ago", comment: "Great product, exactly as described. Will definitely order again.", verified: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border/50"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </motion.div>

        {/* Main Product Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Product Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Main Image */}
                <div className="aspect-square bg-gradient-to-br from-cream via-secondary/50 to-cream rounded-3xl p-8 md:p-16 flex items-center justify-center relative overflow-hidden group sticky top-24">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-honey-gold/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber/20 rounded-full blur-3xl" />
                  </div>
                  
                  {/* Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 left-6 z-10"
                  >
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                      product.badge === 'Premium' 
                        ? 'bg-gradient-to-r from-forest to-forest-light text-white' 
                        : product.badge === 'Bestseller'
                        ? 'bg-gradient-to-r from-honey-gold to-amber text-earth'
                        : product.badge === 'New'
                        ? 'bg-gradient-to-r from-accent to-forest text-white'
                        : 'bg-gradient-to-r from-amber to-honey-gold text-earth'
                    }`}>
                      {product.badge}
                    </span>
                  </motion.div>

                  {/* Discount Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-6 right-6 z-10"
                  >
                    <span className="px-3 py-2 rounded-full text-sm font-bold bg-destructive text-white shadow-lg">
                      -{discountPercent}%
                    </span>
                  </motion.div>

                  {/* Product Emoji/Image */}
                  <motion.div
                    className="relative z-10"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <span className="text-[140px] md:text-[200px] drop-shadow-2xl filter">
                      {product.image}
                    </span>
                  </motion.div>

                  {/* Action buttons */}
                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-3 rounded-full shadow-lg transition-colors ${
                        isWishlisted 
                          ? 'bg-destructive text-white' 
                          : 'bg-white/90 backdrop-blur-sm text-foreground hover:bg-white'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-3 mt-4 justify-center">
                  {[...Array(4)].map((_, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all ${
                        i === 0 
                          ? 'bg-gradient-to-br from-honey-gold/20 to-amber/20 ring-2 ring-honey-gold' 
                          : 'bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      <span className="text-2xl md:text-3xl opacity-80">{product.image}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                {/* Rating & Reviews */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-honey-gold text-honey-gold' 
                            : 'text-muted-foreground/30'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  <span className="text-xs px-2 py-1 bg-forest/10 text-forest rounded-full font-medium">
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-tight">
                  {product.name}
                </h1>
                
                {/* Weight & Stock */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-forest font-semibold">{product.weight}</span>
                  <span className="flex items-center gap-1.5 text-sm text-forest">
                    <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
                    In Stock
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Price Block */}
                <div className="p-6 bg-gradient-to-r from-cream/80 to-secondary/50 rounded-2xl mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-cormorant text-4xl md:text-5xl font-bold text-foreground">
                      ₹{product.price}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-forest bg-forest/10 px-3 py-1 rounded-full">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Inclusive of all taxes
                    </span>
                  </div>
                </div>

                {/* Quick Benefits */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.benefits.slice(0, 4).map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-forest" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-sm font-semibold text-foreground">Quantity:</span>
                  <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="px-6 py-3 font-semibold text-lg min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Total: <span className="font-semibold text-foreground">₹{product.price * quantity}</span>
                  </span>
                </div>

                {/* Action Buttons */}
                <div ref={buyButtonsRef} className="flex gap-4 mb-6">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={handleAddToCart}
                      className="w-full btn-honey py-6 text-base font-semibold relative overflow-hidden"
                      disabled={addedToCart}
                    >
                      <AnimatePresence mode="wait">
                        {addedToCart ? (
                          <motion.span
                            key="added"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center"
                          >
                            <Check className="w-5 h-5 mr-2" />
                            Added to Cart!
                          </motion.span>
                        ) : (
                          <motion.span
                            key="add"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center"
                          >
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Add to Cart
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={handleBuyNow}
                      className="w-full btn-forest py-6 text-base font-semibold"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Buy Now
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Features */}
                <div className="grid grid-cols-4 gap-2 p-4 bg-cream/50 rounded-2xl mb-6">
                  {[
                    { icon: Truck, label: "Free Shipping", sublabel: "Orders ₹500+" },
                    { icon: Shield, label: "Lab Tested", sublabel: "100% Pure" },
                    { icon: RotateCcw, label: "Easy Returns", sublabel: "7 Days" },
                    { icon: Package, label: "Secure Pack", sublabel: "Safe Delivery" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-center"
                    >
                      <item.icon className="w-5 h-5 text-forest mx-auto mb-1" />
                      <p className="text-xs font-medium text-foreground">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground">{item.sublabel}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="flex items-center gap-4 p-4 border border-border rounded-xl">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-honey-gold" />
                    <span className="text-sm font-medium">FSSAI Certified</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-forest" />
                    <span className="text-sm font-medium">100% Organic</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber" />
                    <span className="text-sm font-medium">Fresh</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-cream/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-8 bg-white/80 p-1 rounded-xl">
                <TabsTrigger value="description" className="rounded-lg data-[state=active]:bg-honey-gold data-[state=active]:text-earth">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="rounded-lg data-[state=active]:bg-honey-gold data-[state=active]:text-earth">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-lg data-[state=active]:bg-honey-gold data-[state=active]:text-earth">
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <h3 className="font-cormorant text-2xl font-bold mb-4">About {product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                  <h4 className="font-cormorant text-xl font-semibold mb-3">Key Benefits</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-cream/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-forest" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="details" className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <h3 className="font-cormorant text-2xl font-bold mb-6">Product Details</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Product Name", value: product.name },
                      { label: "Net Weight", value: product.weight },
                      { label: "Ingredients", value: product.ingredients },
                      { label: "Storage Instructions", value: product.storage },
                      { label: "Shelf Life", value: "24 months from manufacturing date" },
                      { label: "Country of Origin", value: "India" },
                      { label: "Certification", value: "FSSAI Approved" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border/50 last:border-0">
                        <span className="font-medium text-foreground sm:w-48 mb-1 sm:mb-0">{item.label}</span>
                        <span className="text-muted-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="reviews" className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  {/* Review Summary */}
                  <div className="flex items-center gap-8 mb-8 pb-6 border-b border-border">
                    <div className="text-center">
                      <div className="font-cormorant text-5xl font-bold text-foreground mb-1">
                        {product.rating}
                      </div>
                      <div className="flex justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-honey-gold text-honey-gold' 
                                : 'text-muted-foreground/30'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{product.reviews} reviews</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <span className="text-sm w-3">{stars}</span>
                          <Star className="w-4 h-4 fill-honey-gold text-honey-gold" />
                          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-honey-gold rounded-full"
                              style={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : '5%' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-cream/30 rounded-xl">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground">{review.name}</span>
                              {review.verified && (
                                <span className="text-xs px-2 py-0.5 bg-forest/10 text-forest rounded-full flex items-center gap-1">
                                  <Check className="w-3 h-3" />
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${
                                      i < review.rating 
                                        ? 'fill-honey-gold text-honey-gold' 
                                        : 'text-muted-foreground/30'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                            <ThumbsUp className="w-3 h-3" />
                            Helpful
                          </button>
                        </div>
                        <p className="text-muted-foreground text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-3">
                You May Also Like
              </h2>
              <p className="text-muted-foreground">Explore more of our pure, natural honey collection</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className="block group"
                  >
                    <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="aspect-square bg-gradient-to-br from-cream to-secondary p-8 flex items-center justify-center relative overflow-hidden">
                        <motion.span 
                          className="text-6xl md:text-7xl relative z-10"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {relatedProduct.image}
                        </motion.span>
                        <div className="absolute top-3 left-3">
                          <span className="text-xs px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm font-medium">
                            {relatedProduct.badge}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-cormorant text-lg font-semibold mb-1 group-hover:text-forest transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{relatedProduct.weight}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">₹{relatedProduct.price}</span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{relatedProduct.originalPrice}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-honey-gold text-honey-gold" />
                            <span className="text-xs font-medium">{relatedProduct.rating}</span>
                          </div>
                        </div>
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

      {/* Sticky Add to Cart Bar - Mobile Only */}
      <AnimatePresence>
        {showStickyBar && product && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center gap-3">
                  {/* Product Info */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cream to-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{product.image}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{product.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">₹{product.price}</span>
                        <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-sm font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    onClick={handleAddToCart}
                    className="btn-honey px-4 py-2 text-sm font-semibold"
                    disabled={addedToCart}
                  >
                    {addedToCart ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShoppingCart className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
