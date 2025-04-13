import { motion } from "framer-motion";
import { Suspense } from "react";
import { GradientBorder } from "@/components/ui/gradient-border";
import ChatWindow from "@/components/ui/chat-window";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30" style={{ zIndex: 0 }}>
        <div className="stars"></div>
      </div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 opacity-90"></div>
      
      {/* Gradient blobs */}
      <div className="absolute -right-20 top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-200"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="text-shadow-glow">Instant</span> Text, Code & 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {" "}File Sharing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              No account, no downloads, no limits. Share text and files instantly with anyone through secure custom rooms.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="room.html" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-3 px-8 rounded-lg text-lg font-medium transition duration-300 shadow-lg shadow-primary/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
              
              <motion.a 
                href="#how-it-works" 
                className="bg-card border border-border hover:bg-accent text-foreground py-3 px-8 rounded-lg text-lg font-medium transition duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <i className="fas fa-info-circle ml-2"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 perspective-1000"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GradientBorder className="p-1 transform transition duration-500 hover:rotate-y-5 hover:rotate-x-2">
              <ChatWindow />
            </GradientBorder>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card/70 backdrop-blur-md p-6 rounded-lg text-center animate-float">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Secure End-to-End</div>
          </div>
          
          <div className="bg-card/70 backdrop-blur-md p-6 rounded-lg text-center animate-float animation-delay-200">
            <div className="text-4xl font-bold text-secondary mb-2">0</div>
            <div className="text-muted-foreground">Registration Required</div>
          </div>
          
          <div className="bg-card/70 backdrop-blur-md p-6 rounded-lg text-center animate-float animation-delay-400">
            <div className="text-4xl font-bold text-accent mb-2">∞</div>
            <div className="text-muted-foreground">Unlimited Sharing</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
