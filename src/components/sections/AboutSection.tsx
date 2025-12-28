import { motion } from 'framer-motion';
import { Heart, Mountain, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Heart, value: '100%', label: 'Pure & Natural' },
  { icon: Mountain, value: '50+', label: 'Farm Partners' },
  { icon: Users, value: '10K+', label: 'Happy Customers' },
  { icon: Clock, value: '25+', label: 'Years Experience' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cream-dark">
              <div className="w-full h-full bg-gradient-to-br from-honey/20 to-amber/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-8xl mb-4 block">🐝</span>
                  <p className="text-muted-foreground">Bee Farm Image Placeholder</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-honey shadow-2xl flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-serif font-bold text-earth">25+</span>
              <span className="text-xs text-earth-light text-center">Years of Trust</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
              From Forest to
              <span className="text-honey-gradient"> Your Table</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Amruth Organic Honey was born from a simple belief: nature provides the purest 
              nourishment. For over two decades, we've partnered with traditional beekeepers 
              across India's pristine forests to bring you honey that's as nature intended – 
              raw, unprocessed, and bursting with natural goodness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every jar carries the legacy of sustainable harvesting, ethical practices, 
              and an unwavering commitment to purity. We don't just sell honey – we preserve 
              a tradition that honors both the bees and the earth.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Sustainable Practices', 'No Sugar Feeding', 'Cold Extracted', 'Farm Direct'].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-honey" />
                  <span className="text-foreground font-medium">{value}</span>
                </motion.div>
              ))}
            </div>

            <a href="#process" className="btn-forest inline-flex items-center gap-2">
              Learn Our Process
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-honey mx-auto mb-4" />
              <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
