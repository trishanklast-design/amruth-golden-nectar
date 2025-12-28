import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth text-cream/90 py-16 px-6">
      <div className="container-premium">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-honey flex items-center justify-center">
                <span className="text-2xl">🍯</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Amruth Organic Honey</h3>
                <p className="text-xs text-cream/60">Pure. Raw. Natural.</p>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed max-w-md">
              Bringing you the finest organic honey from India's pristine forests. 
              Every jar is a promise of purity, tested for quality, and crafted with care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/70">
              {['Products', 'About Us', 'Lab Reports', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-honey transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-cream/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-honey" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-honey" />
                <span>WhatsApp Available</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-honey" />
                <span>hello@amruthhoney.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-honey mt-1" />
                <span>Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/50">
            © 2024 Amruth Organic Honey. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream/50">
            <a href="#" className="hover:text-honey transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-honey transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-honey transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
