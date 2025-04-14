import { motion } from "framer-motion";
import { GradientBorder } from "@/components/ui/gradient-border";

const features = [
  {
    icon: "comments",
    title: "Real-Time Chat",
    description: "Instant messaging with no delays. Send text and code snippets with perfect formatting in real-time.",
    iconColor: "#00b4ff"
  },
  {
    icon: "file-upload",
    title: "Fast File Transfer",
    description: "Share files of any type with lightning speed. Upto 7Mb , No compression, just pure performance.",
    iconColor: "#00b4ff"
  },
  {
    icon: "code",
    title: "Code Sharing",
    description: "Seamlessly share code snippets and  code files with your team and and fellow devlopers.",
    iconColor: "#00b4ff"
  },
  {
    icon: "user-secret",
    title: "No Registration",
    description: "Start sharing instantly with no account creation, no email, and no personal information required.",
    iconColor: "#00b4ff"
  },
  {
    icon: "shield-alt",
    title: "Private Rooms",
    description: "Create custom room codes for private sharing. Only those with the code can join your room",
    iconColor: "#00b4ff"
  },
  {
    icon: "mobile-alt",
    title: "Cross-Device Compatibility",
    description: "Share between desktop, mobile, or tablet devices seamlessly with our responsive design.",
    iconColor: "#00b4ff"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-card/30 relative">
      
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Features</span> for Seamless Sharing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how ShareZet makes sharing text, code, and files simpler and more secure than ever before.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GradientBorder className="p-1 group hover:shadow-lg hover:shadow-primary/20 transition duration-300 transform hover:rotate-y-5 hover:rotate-x-2">
                <div className="bg-card rounded-lg p-6 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                    <i className={`fas fa-${feature.icon} text-primary text-2xl`} style={{ color: feature.iconColor }}></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {feature.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <a href="room.html" className="text-primary hover:text-primary-dark inline-flex items-center transition duration-300">
                      Try it now <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
