import { motion } from 'framer-motion';
import { Video, Package, QrCode, Send, Shield, CheckCircle2 } from 'lucide-react';

const BottleTransparencySection = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Unique Identity",
      description: "Each honey bottle is assigned a unique bottle number"
    },
    {
      icon: Video,
      title: "Recorded Process",
      description: "The complete filling and packaging process is recorded on video"
    },
    {
      icon: Package,
      title: "Order Mapping",
      description: "Once your order is confirmed, it's mapped to a specific bottle"
    },
    {
      icon: Send,
      title: "Video Delivery",
      description: "You receive the exact video of your bottle via WhatsApp or Email"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-honey/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-honey/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-honey/10 border border-honey/20 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-honey-dark" />
            <span className="text-sm font-medium text-honey-dark">Bottle-Level Transparency</span>
          </motion.div>

          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Your Bottle. <span className="text-honey-dark">Your Proof.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Because true purity deserves complete transparency.
          </p>
        </motion.div>

        {/* Story Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="bg-cream/50 rounded-2xl p-8 md:p-10 border border-honey/10">
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed text-center">
              We believe trust should be <span className="font-semibold text-foreground">visible</span> — not just claimed.
              That's why every bottle of our honey is individually recorded during the final stages 
              of filling, labeling, and packaging. Each bottle carries its own unique identity, 
              ensuring complete traceability from our hands to yours.
            </p>
          </div>
        </motion.div>

        {/* How It Works - Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
            How It Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-honey/40 to-honey/10" />
                )}

                <div className="bg-background rounded-2xl p-6 md:p-8 border border-honey/15 shadow-soft hover:shadow-elegant transition-shadow duration-300 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-honey/10 flex items-center justify-center text-sm font-semibold text-honey-dark">
                      {index + 1}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-honey/20 to-honey/5 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-honey-dark" />
                    </div>
                  </div>

                  <h4 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-forest" />
            </div>
            <span className="text-forest font-medium">Every Order. Every Bottle. Every Time.</span>
          </div>

          <div className="bg-gradient-to-r from-transparent via-honey/5 to-transparent rounded-2xl p-8 md:p-10 border border-honey/10">
            <p className="font-cormorant text-xl md:text-2xl text-foreground italic leading-relaxed">
              "This is our way of standing behind every bottle we deliver — 
              <span className="font-semibold text-honey-dark"> openly, honestly, and without compromise.</span>"
            </p>
          </div>
        </motion.div>

        {/* Visual accent - video camera illustration hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground/50">
            <Video className="w-4 h-4" />
            <span className="text-xs tracking-widest uppercase">Recorded with care</span>
            <Video className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottleTransparencySection;
