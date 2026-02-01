import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 bg-card/30 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-card/30"></div>

      {/* Background elements */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-[#00b4ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-[#0066cc]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto bg-card/70 backdrop-blur-md rounded-2xl p-10 border border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b4ff] to-[#0066cc]">Start Sharing</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            No registration, no downloads, no limitations. Just instant secure sharing with anyone, anywhere.
          </p>

          <motion.a
            href="room"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4ff] to-[#0066cc] hover:opacity-90 text-white py-4 px-10 rounded-lg text-xl font-medium shadow-lg shadow-[#00b4ff]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Create Your Room</span>
            <FaArrowRight />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
