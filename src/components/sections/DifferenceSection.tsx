import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, Shield, Leaf, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DifferenceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
            ⚠️ Know What You're Eating
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Market Honey vs. <span className="text-primary">Real Honey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            76% of honey sold in stores is adulterated. See why our honey is different.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Market Honey Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-2xl" />
            <div className="p-6 md:p-8 rounded-2xl border-2 border-destructive/20 bg-card relative h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🏭</div>
                <div>
                  <span className="text-xs font-medium text-destructive uppercase tracking-wider">Avoid</span>
                  <h3 className="font-serif text-xl font-bold">Market Honey</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Ultra-filtered & heated',
                  'May contain sugar syrups',
                  'Unknown source origins',
                  'No purity certificates',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Our Honey Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl" />
            <div className="p-6 md:p-8 rounded-2xl border-2 border-primary/30 bg-card relative shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🍯</div>
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">Choose</span>
                  <h3 className="font-serif text-xl font-bold">Amruth Honey</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Raw & cold-extracted',
                  '100% pure, nothing added',
                  'Single-origin Indian forests',
                  'NMR lab-verified purity',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: FlaskConical, label: 'Lab Tested' },
            { icon: Leaf, label: '100% Natural' },
            { icon: Shield, label: 'Certified Pure' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/our-difference">
            <Button className="btn-honey px-8 py-6 text-base group">
              Learn the Full Truth
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
