import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Create a Room",
    description: "Click \"Get Started\" to instantly create a unique room. Customize the room code or use our auto-generated one.",
    color: "#00b4ff"
  },
  {
    number: 2,
    title: "Share Room Code",
    description: "Send the room code or link to others you want to share with. They can join instantly from any device.",
    color: "#0090cc"
  },
  {
    number: 3,
    title: "Share Files & Chat",
    description: "Exchange text, code snippets, and files in real-time. No size limits, no waiting for uploads.",
    color: "#006b99"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-card/30 to-background"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ShareZet</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to start sharing instantly. No downloads, no complexity.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-card border-4 flex items-center justify-center mb-6 text-foreground text-2xl font-bold"
                  style={{ borderColor: step.color }}
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 1.3
                  }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a 
            href="room.html" 
            className="inline-block bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 mx-auto w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Try It Now</span> <i className="fas fa-rocket ml-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
