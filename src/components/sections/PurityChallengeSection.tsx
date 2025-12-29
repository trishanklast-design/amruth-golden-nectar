import { motion } from 'framer-motion';
import { Shield, FlaskConical, Award, IndianRupee, CheckCircle2 } from 'lucide-react';

const PurityChallengeSection = () => {
  const conditions = [
    "Honey must be tested only in an AGMARK-approved government laboratory",
    "Test must be conducted on an unopened, original product",
    "If any AGMARK purity parameter fails, the challenger is eligible for ₹10,000",
    "Lab report must be officially verifiable"
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream to-honey-light/20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-honey rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-honey-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-elegant border border-honey/20 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-honey/10 to-transparent rounded-bl-full" />
            
            {/* Trust Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center gap-6 md:gap-10 mb-8"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-honey/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 md:w-7 md:h-7 text-honey-dark" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Protected</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-honey/10 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 md:w-7 md:h-7 text-honey-dark" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Lab Tested</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-honey/10 flex items-center justify-center">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-honey-dark" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">AGMARK</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-honey/10 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 md:w-7 md:h-7 text-honey-dark" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">₹10,000</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                ₹10,000 <span className="text-honey-dark">Purity Challenge</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                Our promise of honesty and transparency
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            >
              We believe true purity should stand up to any test. That's why we openly 
              challenge anyone to verify our honey's authenticity.
            </motion.p>

            {/* Confidence Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-honey/5 via-honey/10 to-honey/5 rounded-2xl p-6 md:p-8 mb-10 border border-honey/20"
            >
              <p className="text-center font-cormorant text-xl md:text-2xl text-foreground italic">
                "We confidently offer <span className="font-bold text-honey-dark">₹10,000</span> to anyone 
                who can prove our honey is fake or adulterated — based on AGMARK-certified 
                government laboratory testing."
              </p>
            </motion.div>

            {/* Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-6 text-center">
                Challenge Conditions
              </h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                {conditions.map((condition, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-forest" />
                    </div>
                    <span className="text-foreground/80 text-base md:text-lg leading-relaxed">
                      {condition}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* AGMARK Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-forest/5 border border-forest/20 rounded-full px-6 py-3">
                <Award className="w-5 h-5 text-forest" />
                <span className="text-forest font-medium">AGMARK Certified Honey</span>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center text-sm text-muted-foreground"
            >
              Terms and conditions apply. Brand decision is final.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurityChallengeSection;
