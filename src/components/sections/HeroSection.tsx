import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Leaf, Award } from 'lucide-react';
import HoneyJar3D from '../three/HoneyJar3D';
import HoneyDripAnimation from '../HoneyDripAnimation';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cream to-background"
    >
      {/* Honey drip background animation */}
      <HoneyDripAnimation />

      {/* Radial glow background */}
      <div className="absolute inset-0 bg-hero-radial opacity-60" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-honey/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber/10 rounded-full blur-3xl" />

      <div className="container-premium relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32">
          {/* Left content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 mb-6"
            >
              <Leaf className="w-4 h-4 text-forest" />
              <span className="text-sm font-medium text-forest">100% Pure & Organic</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight mb-6"
            >
              <span className="text-foreground">Pure. Raw.</span>
              <br />
              <span className="text-honey-gradient">Organic Honey</span>
              <br />
              <span className="text-foreground">from Nature</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Experience the untouched purity of honey harvested from India's pristine 
              forests. Lab-tested, farm-direct, and crafted with generations of trust.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#products" className="btn-honey flex items-center gap-2 group">
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#lab-reports" className="btn-forest flex items-center gap-2">
                <Shield className="w-4 h-4" />
                View Lab Reports
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-forest" />
                </div>
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-forest" />
                </div>
                <span>No Chemicals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-forest" />
                </div>
                <span>FSSAI Certified</span>
              </div>
            </motion.div>
          </div>

          {/* Right - 3D Honey Jar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] relative"
          >
            {/* Glow effect behind jar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-honey/30 rounded-full blur-3xl animate-glow-pulse" />
            </div>
            
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-honey/20 animate-pulse" />
                </div>
              }
            >
              <HoneyJar3D />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-honey rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
