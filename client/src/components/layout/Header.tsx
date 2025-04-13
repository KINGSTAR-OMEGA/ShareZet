import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../assets/logo.png";
import { scrollToElement, updateURLHash, getActiveSection } from "../../lib/scrollUtils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const currentSection = getActiveSection();
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        updateURLHash(`#${currentSection}`);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
    updateURLHash(`#${sectionId}`);
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={logoImage} alt="ShareZet Logo" className="w-10 h-10" />
          </div>
          <span className="text-xl font-bold text-foreground">ShareZet</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition duration-300">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition duration-300">How It Works</a>
          <a href="#security" className="text-muted-foreground hover:text-foreground transition duration-300">Security</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition duration-300">FAQ</a>
          <motion.a 
            href="room.html" 
            className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
        
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute w-full bg-card z-20 py-4 px-6 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition duration-300" onClick={closeMenu}>Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition duration-300" onClick={closeMenu}>How It Works</a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition duration-300" onClick={closeMenu}>Security</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition duration-300" onClick={closeMenu}>FAQ</a>
              <a href="room.html" className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition duration-300 text-center">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
