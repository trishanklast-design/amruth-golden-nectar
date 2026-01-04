import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'd like to know more about your organic honey products.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-cream/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                Have questions about our honey? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="border-honey/20 focus:border-honey/40 bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground/80">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="border-honey/20 focus:border-honey/40 bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="border-honey/20 focus:border-honey/40 bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="border-honey/20 focus:border-honey/40 bg-background resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-honey hover:bg-honey-dark text-foreground font-medium py-6 px-8"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>

                {/* WhatsApp CTA */}
                <div className="mt-8 p-6 bg-forest/5 rounded-2xl border border-forest/10">
                  <p className="text-sm text-muted-foreground mb-3">Prefer instant messaging?</p>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="border-forest/30 text-forest hover:bg-forest hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div>
                  <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-cream/30">
                      <div className="w-10 h-10 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-honey-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-cream/30">
                      <div className="w-10 h-10 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-honey-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@amruthhoney.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-cream/30">
                      <div className="w-10 h-10 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-honey-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-muted-foreground">Coorg, Karnataka, India 571201</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-cream/30">
                      <div className="w-10 h-10 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-honey-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-foreground mb-4">
                    Find Us
                  </h3>
                  <div className="rounded-2xl overflow-hidden border border-honey/15 shadow-soft">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d75.68522812890625!3d12.337534499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4973edce14303%3A0x1e4bd14a4f5d3d8a!2sCoorg%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Amruth Honey Location"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
