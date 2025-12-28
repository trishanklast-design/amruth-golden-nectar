import { motion } from 'framer-motion';
import { Flower2, Hand, Droplets, Thermometer, Filter, Package } from 'lucide-react';

const steps = [
  {
    icon: Flower2,
    title: 'Bee Farms',
    description: 'Our bees thrive in pesticide-free environments across India\'s natural forests and organic farms.',
  },
  {
    icon: Hand,
    title: 'Natural Collection',
    description: 'Honey is carefully harvested by experienced beekeepers using traditional, bee-friendly methods.',
  },
  {
    icon: Droplets,
    title: 'No Sugar Feeding',
    description: 'Our bees feed only on natural nectar. No artificial sugars or syrups are ever introduced.',
  },
  {
    icon: Thermometer,
    title: 'Cold Extraction',
    description: 'Honey is extracted at low temperatures to preserve all natural enzymes and nutrients.',
  },
  {
    icon: Filter,
    title: 'Gentle Filtering',
    description: 'Minimal filtration removes debris while retaining beneficial pollen and propolis.',
  },
  {
    icon: Package,
    title: 'Hygienic Bottling',
    description: 'Sealed in food-grade glass jars under strict quality control for maximum freshness.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground"
          >
            The Journey of
            <span className="text-honey-gradient"> Pure Honey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From pristine forests to your table, every step is crafted with care to 
            preserve nature's golden gift in its purest form.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`lg:flex items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`glass-card rounded-2xl p-8 ${
                    index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                  } max-w-md`}>
                    <step.icon className={`w-12 h-12 text-honey mb-4 ${
                      index % 2 === 0 ? 'lg:ml-auto' : ''
                    }`} />
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center number */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-honey flex items-center justify-center shadow-lg z-10">
                    <span className="font-serif text-xl font-bold text-earth">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
