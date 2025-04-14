import { motion } from "framer-motion";
import logoImage from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-card/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
              <img src={logoImage} alt="ShareZet Logo" className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold text-foreground">ShareZet</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Instant text, code, and file sharing without registration. Secure, fast, and unlimited.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition duration-300">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition duration-300">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition duration-300">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-foreground font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition duration-300">How It Works</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-primary transition duration-300">Security</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition duration-300">FAQ</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-foreground font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Status</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-foreground font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Contact Us</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} ShareZet. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
