import { motion } from "framer-motion";
import logoImage from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/40 backdrop-blur-lg pt-20 pb-10 overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(0,180,255,0.5)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <img
                  src={logoImage}
                  alt="ShareZet Logo"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                ShareZet
              </span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Instant text, code, and file sharing without registration. Secure,
              fast, and unlimited.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/sharezet/"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-cyan-500/20 transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Quick Links
            </h3>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Security', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-muted-foreground hover:text-cyan-400 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Resources
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Use Cases', 'Documentation'].map((item, idx) => (
                <li key={idx}>
                  <a href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted-foreground hover:text-blue-400 transition duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Legal
            </h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, idx) => (
                <li key={idx}>
                  <a href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted-foreground hover:text-purple-400 transition duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-purple-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} ShareZet. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
