import { motion } from "framer-motion";
import { GradientBorder } from "@/components/ui/gradient-border";

const securityFeatures = [
  {
    icon: "lock",
    title: "End-to-End Encryption",
    description: "All data transfers are secured with industry-standard encryption protocols to ensure your information stays private.",
    color: "primary"
  },
  {
    icon: "database",
    title: "No Data Storage",
    description: "We don't store your conversations or files on our servers. Once your session ends, your data is gone for good.",
    color: "secondary"
  },
  {
    icon: "user-shield",
    title: "Private Rooms",
    description: "Custom room codes ensure only intended recipients can access your shared content, providing an additional layer of security.",
    color: "accent"
  }
];

export default function Security() {
  return (
    <section id="security" className="py-20 bg-card/30 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-card/30"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <GradientBorder className="p-1 transform transition duration-500 hover:rotate-y-5 hover:rotate-x-2 max-w-lg mx-auto lg:mx-0">
              <div className="bg-card rounded-lg overflow-hidden shadow-xl shadow-primary/10 relative">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <div className="text-7xl text-foreground opacity-80">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-foreground text-sm">Data Transfer Encrypted</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-500 to-green-400"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </GradientBorder>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Your Security is Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Top Priority</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              ShareZet was built from the ground up with security and privacy in mind. We don't store your conversations or files, and all data transfers are encrypted.
            </p>
            
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={`w-10 h-10 rounded-full bg-${feature.color}/20 flex items-center justify-center text-${feature.color} mr-4 mt-1`}>
                    <i className={`fas fa-${feature.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
