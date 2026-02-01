import { motion } from "framer-motion";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { GradientBorder } from "@/components/ui/gradient-border";
import ChatWindow from "@/components/ui/chat-window";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-start pt-32 pb-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">Live Secure Sharing</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              Share Files & Text <br />
              <span className="neon-text-gradient">Without Limits</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              No registration. No tracking. Just an instant, encrypted tunnel for your data. The future of sharing is anonymous.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
              <motion.a
                href="room"
                className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started <FaArrowRight />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#how-it-works"
                className="group px-8 py-4 glass-card text-white text-lg font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                Learn More <FaInfoCircle className="group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>

            {/* Stats Row */}
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Encrypted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">0s</div>
                <div className="text-sm text-muted-foreground">Account Setup</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Unlimited</div>
                <div className="text-sm text-muted-foreground">Sharing</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            className="w-full lg:w-1/2 perspective-1000 relative"
            initial={{ opacity: 0, rotateX: 20, z: -100 }}
            animate={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Glow effect behind chat */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-[80px] opacity-20 transform scale-75" />

            <GradientBorder className="relative p-1 rounded-2xl bg-black/50 backdrop-blur-xl shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
              <ChatWindow />
            </GradientBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
