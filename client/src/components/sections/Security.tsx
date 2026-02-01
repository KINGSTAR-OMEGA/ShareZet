import { motion } from "framer-motion";
import { FaLock, FaDatabase, FaUserShield, FaShieldAlt } from "react-icons/fa";

const securityFeatures = [
  {
    icon: FaLock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption ensures your data is unreadable to anyone but the recipient.",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-400/20"
  },
  {
    icon: FaDatabase,
    title: "Zero Persistence",
    description: "RAM-only processing. Data is wiped instantly upon session closure or expiration.",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-400/20"
  },
  {
    icon: FaUserShield,
    title: "Anonymity First",
    description: "No metadata logging. No IP tracking. Pure, private connection tunnels.",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-400/20"
  }
];

export default function Security() {
  return (
    <section id="security" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Visual Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-1 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-700" />

              <div className="bg-black/80 backdrop-blur-xl rounded-xl p-8 relative overflow-hidden">
                <div className="flex items-center justify-center h-64 relative">
                  <div className="absolute inset-0 bg-emerald-500/10 blur-[50px] animate-pulse" />
                  <FaShieldAlt className="text-9xl text-emerald-500/80 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] relative z-10" />

                  {/* Scanning Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-[scan_3s_ease-in-out_infinite]" />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between text-sm text-emerald-400 font-mono">
                    <span>STATUS</span>
                    <span className="animate-pulse">SECURE</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full animate-[loading_2s_ease-in-out_infinite]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Military-Grade <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">Security</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We don't just protect your data; we ensure it never exists on our servers longer than necessary.
            </p>

            <div className="space-y-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className={`w-14 h-14 rounded-xl glass-card flex items-center justify-center text-2xl ${feature.colorClass} border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300 ${feature.bgClass}`}>
                    <feature.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
