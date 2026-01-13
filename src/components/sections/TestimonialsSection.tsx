import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    avatar: '👩‍💼',
    rating: 5,
    title: 'Best honey I\'ve ever tasted!',
    review: 'After trying Amruth\'s Raw Forest Honey, I can never go back to store-bought honey. The difference in taste and quality is remarkable. My family loves it!',
    product: 'Raw Forest Honey',
    verified: true,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    avatar: '👨‍⚕️',
    rating: 5,
    title: 'Finally, authentic pure honey',
    review: 'As a doctor, I always recommend pure honey to my patients. Amruth\'s lab-tested honey gives me confidence. The NMR certificates are a game-changer.',
    product: 'Premium Acacia Honey',
    verified: true,
  },
  {
    id: 3,
    name: 'Anita Desai',
    location: 'Delhi, NCR',
    avatar: '👩‍🍳',
    rating: 5,
    title: 'Perfect for my recipes',
    review: 'I use Amruth honey in all my baking and cooking. The Multiflora variety has such a beautiful, complex flavor that elevates every dish.',
    product: 'Multiflora Honey',
    verified: true,
  },
  {
    id: 4,
    name: 'Vikram Patel',
    location: 'Ahmedabad, Gujarat',
    avatar: '👨‍💻',
    rating: 5,
    title: 'Worth every rupee',
    review: 'Yes, it\'s premium priced, but you get what you pay for. The QR code traceability and lab reports prove this is the real deal. Highly recommended!',
    product: 'Eucalyptus Honey',
    verified: true,
  },
  {
    id: 5,
    name: 'Meera Nair',
    location: 'Kochi, Kerala',
    avatar: '👩‍🔬',
    rating: 5,
    title: 'Helped my immunity',
    review: 'I\'ve been having a spoon of Tulsi Infused Honey every morning. My seasonal allergies have reduced significantly. Natural medicine at its finest!',
    product: 'Tulsi Infused Honey',
    verified: true,
  },
  {
    id: 6,
    name: 'Arjun Mehta',
    location: 'Pune, Maharashtra',
    avatar: '👨‍🏫',
    rating: 5,
    title: 'Supporting ethical practices',
    review: 'Knowing that my purchase supports tribal beekeepers and sustainable practices makes this honey taste even sweeter. Amruth is doing things right.',
    product: 'Wild Berry Honey',
    verified: true,
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ⭐ Customer Love
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of happy customers who've discovered the difference of pure, authentic honey.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Title */}
                    <h4 className="font-semibold text-foreground mb-2">{testimonial.title}</h4>

                    {/* Review */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                      "{testimonial.review}"
                    </p>

                    {/* Product Tag */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-xs font-medium rounded-full text-foreground/70">
                        🍯 {testimonial.product}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm truncate">{testimonial.name}</span>
                          {testimonial.verified && (
                            <span className="flex-shrink-0 px-1.5 py-0.5 bg-accent/10 text-accent text-[10px] font-medium rounded">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 transition-all flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? 'w-6 bg-primary'
                      : 'bg-border hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 transition-all flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All reviews are from verified purchases • Updated weekly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
