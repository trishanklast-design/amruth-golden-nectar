import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Leaf, 
  FlaskConical, 
  Award, 
  Shield, 
  Heart, 
  Sparkles,
  Factory,
  Beaker,
  ThermometerSun,
  Droplets,
  TreeDeciduous,
  Users,
  ArrowRight
} from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const comparisonData = [
  {
    feature: 'Source',
    market: 'Mixed unknown sources, often imported',
    ours: 'Single-origin from pristine Indian forests',
    marketIcon: Factory,
    oursIcon: TreeDeciduous,
  },
  {
    feature: 'Processing',
    market: 'Ultra-filtered & heated (destroys enzymes)',
    ours: 'Cold-extracted, raw & unprocessed',
    marketIcon: ThermometerSun,
    oursIcon: Droplets,
  },
  {
    feature: 'Additives',
    market: 'Sugar syrup, corn syrup, artificial sweeteners',
    ours: '100% pure honey, nothing added ever',
    marketIcon: Beaker,
    oursIcon: Leaf,
  },
  {
    feature: 'Testing',
    market: 'Basic or no third-party testing',
    ours: 'NMR spectroscopy & lab-verified purity',
    marketIcon: X,
    oursIcon: FlaskConical,
  },
  {
    feature: 'Traceability',
    market: 'No farm-to-table transparency',
    ours: 'QR code tracing to exact harvest location',
    marketIcon: X,
    oursIcon: Shield,
  },
  {
    feature: 'Bee Welfare',
    market: 'Mass commercial farming practices',
    ours: 'Ethical beekeeping, no harm to colonies',
    marketIcon: X,
    oursIcon: Heart,
  },
];

const shockingFacts = [
  {
    stat: '76%',
    label: 'of market honey is adulterated',
    description: 'Studies reveal most commercial honey contains added sugars or syrups',
  },
  {
    stat: '90%',
    label: 'lacks natural enzymes',
    description: 'Ultra-processing destroys beneficial compounds and enzymes',
  },
  {
    stat: '0%',
    label: 'traceability in mass brands',
    description: 'Most brands cannot trace honey back to its source',
  },
];

const ourPromises = [
  {
    icon: FlaskConical,
    title: 'Lab-Verified Purity',
    description: 'Every batch undergoes NMR spectroscopy testing to ensure 100% authenticity with no adulterants.',
  },
  {
    icon: Leaf,
    title: 'Raw & Unprocessed',
    description: 'Cold-extracted at source to preserve all natural enzymes, antioxidants, and healing properties.',
  },
  {
    icon: TreeDeciduous,
    title: 'Forest-Sourced',
    description: 'Harvested from wild bee colonies in pristine forests of the Western Ghats.',
  },
  {
    icon: Shield,
    title: 'Full Traceability',
    description: 'Scan our QR code to see exactly where and when your honey was harvested.',
  },
  {
    icon: Heart,
    title: 'Ethical Practices',
    description: 'We never harm bees or over-harvest. Sustainable practices protect colonies for generations.',
  },
  {
    icon: Users,
    title: 'Farmer Direct',
    description: 'We work directly with tribal beekeepers, ensuring fair prices and preserving traditional methods.',
  },
];

const OurDifference = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6">
                ⚠️ The Truth About Honey
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Market Honey vs. 
                <span className="text-primary"> Real Honey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Most honey on supermarket shelves isn't what you think. Discover the shocking 
                truth about mass-produced honey and why our commitment to purity matters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Shocking Facts */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {shockingFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    {fact.stat}
                  </div>
                  <div className="text-lg font-medium mb-2">{fact.label}</div>
                  <p className="text-background/70 text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                The <span className="text-primary">Comparison</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See the stark difference between what you find in stores and what nature intended.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="font-medium text-muted-foreground">Feature</div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold">
                    🏪 Market Honey
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                    🍯 Amruth Honey
                  </span>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="font-semibold text-foreground flex items-center">
                      {row.feature}
                    </div>
                    <div className="flex items-center gap-3 text-destructive/80">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <row.marketIcon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{row.market}</span>
                    </div>
                    <div className="flex items-center gap-3 text-accent">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <row.oursIcon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{row.ours}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Promises */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Commitment
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                The Amruth <span className="text-primary">Promise</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Six pillars that define our unwavering commitment to purity and authenticity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {ourPromises.map((promise, index) => (
                <motion.div
                  key={promise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <promise.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{promise.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {promise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Market Honey */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-3xl" />
                <div className="p-8 rounded-3xl border-2 border-destructive/20 bg-card relative">
                  <div className="absolute -top-4 left-8">
                    <span className="px-4 py-1 bg-destructive text-destructive-foreground text-sm font-medium rounded-full">
                      Mass-Produced
                    </span>
                  </div>
                  <div className="text-center mb-6 pt-4">
                    <div className="text-8xl mb-4">🏭</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Market Honey</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Mixed from multiple unknown countries',
                      'Heated to high temperatures',
                      'Ultra-filtered removing pollen',
                      'May contain added sugars',
                      'No quality guarantees',
                      'Mass-produced in factories',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Our Honey */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl" />
                <div className="p-8 rounded-3xl border-2 border-primary/30 bg-card relative shadow-xl">
                  <div className="absolute -top-4 left-8">
                    <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Forest-Sourced
                    </span>
                  </div>
                  <div className="text-center mb-6 pt-4">
                    <div className="text-8xl mb-4">🍯</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Amruth Honey</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Single-origin from Indian forests',
                      'Cold-extracted preserving enzymes',
                      'Naturally filtered, pollen intact',
                      '100% pure, nothing added',
                      'Lab-verified with certificates',
                      'Ethically harvested by tribals',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary to-accent/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Experience the <span className="text-primary">Difference</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join thousands of families who've made the switch to pure, authentic honey. 
                Once you taste the difference, you'll never go back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button className="btn-honey px-8 py-6 text-base">
                    Shop Pure Honey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-6 text-base">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurDifference;
