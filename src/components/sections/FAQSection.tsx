import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this honey pure and natural?",
      answer: "Yes. Our honey is sourced naturally and minimally processed."
    },
    {
      question: "Is your honey lab tested?",
      answer: "Yes. It is tested in government-approved laboratories."
    },
    {
      question: "Do you feed sugar to bees?",
      answer: "No. We do not practice sugar feeding during harvesting."
    },
    {
      question: "Why does honey crystallize?",
      answer: "Crystallization is natural and indicates real honey."
    },
    {
      question: "How should I store honey?",
      answer: "Store at room temperature in a dry place."
    },
    {
      question: "Is this honey safe for daily use?",
      answer: "Yes, when consumed as part of a balanced diet."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-cream/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-foreground mb-3">
            FAQs
          </h2>
          <p className="text-muted-foreground font-light">
            Clear answers. No exaggeration.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-honey/15 rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
