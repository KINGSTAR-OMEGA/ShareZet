import { motion } from "framer-motion";
import {
  FaComments,
  FaFileUpload,
  FaCode,
  FaUserSecret,
  FaShieldAlt,
  FaMobileAlt,
  FaArrowRight
} from "react-icons/fa";

const features = [
  {
    icon: FaComments,
    title: "Real-Time Text & Chat",
    description: "Send messages and text instantly with no delays. Share plain text, code snippets, or formatted content in real-time.",
    color: "text-cyan-400",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    icon: FaFileUpload,
    title: "Secure File Transfer",
    description: "Upload and share files up to 7MB with end-to-end encryption. No file compression means your documents stay pristine.",
    color: "text-blue-400",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: FaCode,
    title: "Developer-Friendly",
    description: "Share code snippets with proper formatting preserved. Ideal for developers getting quick code reviews or debugging.",
    color: "text-blue-400",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: FaUserSecret,
    title: "Zero Registration",
    description: "Start sharing immediately with no account creation. No email verification, no personal info required.",
    color: "text-pink-400",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    icon: FaShieldAlt,
    title: "Private Custom Rooms",
    description: "Create secure rooms with unique codes. Only people with your room code can access the shared content.",
    color: "text-rose-400",
    gradient: "from-rose-400 to-orange-500"
  },
  {
    icon: FaMobileAlt,
    title: "Cross-Platform",
    description: "Share files between desktop, mobile, and tablets seamlessly. Works on any device with a modern browser.",
    color: "text-orange-400",
    gradient: "from-orange-400 to-yellow-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-32 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose <span className="neon-text-gradient">ShareZet</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and private by design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card glass-card-hover p-8 rounded-2xl h-full flex flex-col group relative overflow-hidden">
                {/* Hover Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl glass-card flex items-center justify-center mb-6 text-xl md:text-2xl ${feature.color} border border-white/5`}>
                  <feature.icon />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-4 border-t border-white/5">
                  <a href="room" className={`inline-flex items-center text-sm font-medium ${feature.color} hover:brightness-125 transition-all`}>
                    Try it now <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
