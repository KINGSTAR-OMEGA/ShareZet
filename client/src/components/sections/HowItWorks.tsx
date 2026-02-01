import { motion } from "framer-motion";
import { FaRocket, FaUserPlus, FaFileExport } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Instant Room Creation",
    description: "One click generates a secure, encrypted room. No account, no signup forms. Just pure, instant access.",
    icon: FaRocket,
    color: "from-cyan-400 to-blue-600"
  },
  {
    number: "02",
    title: "Invite & Connect",
    description: "Share your unique room link. Friends or colleagues join instantly from any device—desktop, mobile, or tablet.",
    icon: FaUserPlus,
    color: "from-blue-500 to-purple-600"
  },
  {
    number: "03",
    title: "Seamless Transfer",
    description: "Drag & drop files, paste code, or chat. Everything is end-to-end encrypted and wiped when you leave.",
    icon: FaFileExport,
    color: "from-purple-500 to-pink-600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400 font-mono tracking-wider text-sm uppercase mb-4 block">Simple Workflow</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            How It <span className="neon-text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the fastest way to share. We've stripped away the complexity to give you raw speed and security.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent transform -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content Side */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="glass-card glass-card-hover p-8 rounded-2xl relative group overflow-hidden">
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${step.color}`} />

                    <div className="relative z-10">
                      <div className={`text-6xl font-bold opacity-10 mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(0,180,255,0.2)]">
                    <step.icon className="text-2xl text-cyan-400" />
                  </div>
                  {/* Glowing Connection Dots */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl -z-10 animate-pulse" />
                </div>

                {/* Spacer Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="room"
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-black rounded-full text-lg font-bold tracking-wide hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Start Sharing Now</span>
            <FaRocket className="text-xl relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 rounded-full blur-lg bg-cyan-400/50 group-hover:bg-cyan-400/80 transition-colors -z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
