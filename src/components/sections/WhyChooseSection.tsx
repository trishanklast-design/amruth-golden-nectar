import { motion } from 'framer-motion';
import { 
  Leaf, 
  FlaskConical, 
  Truck, 
  Award, 
  ShieldCheck, 
  Heart,
  X,
  Check
} from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'No Sugar Feeding',
    description: 'Our bees feed only on natural nectar from flowers, never artificial syrups.',
  },
  {
    icon: FlaskConical,
    title: 'No Chemicals',
    description: 'Zero pesticides, antibiotics, or artificial additives at any stage.',
  },
  {
    icon: Heart,
    title: 'Raw & Unprocessed',
    description: 'Cold-extracted to preserve natural enzymes, vitamins, and antioxidants.',
  },
  {
    icon: ShieldCheck,
    title: 'Lab Tested',
    description: 'Every batch tested by NABL-accredited labs for purity and quality.',
  },
  {
    icon: Truck,
    title: 'Farm Direct',
    description: 'Sourced directly from our partner beekeepers, no middlemen.',
  },
  {
    icon: Award,
    title: 'Certified Organic',
    description: 'FSSAI licensed and India Organic certified for assured quality.',
  },
];

const comparison = [
  { feature: 'Sugar Feeding to Bees', amruth: false, market: true },
  { feature: 'Heat Processing', amruth: false, market: true },
  { feature: 'Ultra-Filtration', amruth: false, market: true },
  { feature: 'Natural Enzymes Intact', amruth: true, market: false },
  { feature: 'Pollen Present', amruth: true, market: false },
  { feature: 'Lab Test Reports', amruth: true, market: false },
  { feature: 'Transparent Sourcing', amruth: true, market: false },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="section-padding bg-cream/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground"
          >
            The Amruth
            <span className="text-honey-gradient"> Difference</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            What sets our organic honey apart from the rest? 
            It's our unwavering commitment to purity and transparency.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-honey/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-honey/30 transition-colors">
                <feature.icon className="w-8 h-8 text-honey" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-center mb-8 text-foreground">
            Amruth vs Market Honey
          </h3>
          
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-secondary/50 p-4 font-medium text-sm">
              <div className="text-muted-foreground">Feature</div>
              <div className="text-center text-honey">Amruth Organic</div>
              <div className="text-center text-muted-foreground">Market Honey</div>
            </div>

            {/* Table rows */}
            {comparison.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-3 p-4 border-t border-border items-center"
              >
                <div className="text-foreground text-sm">{row.feature}</div>
                <div className="flex justify-center">
                  {row.amruth ? (
                    <div className="w-8 h-8 rounded-full bg-forest/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-forest" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.market ? (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-forest/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-forest" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
