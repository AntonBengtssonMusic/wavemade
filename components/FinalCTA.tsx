"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight mb-6">
            Ready to make your
            <br />
            <span className="text-[#6B5CFF]">products move?</span>
          </h2>
          <p className="text-[#6E6E73] text-lg mb-10 max-w-md mx-auto">
            Join 100+ e-commerce brands already growing with WaveMade.
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#6B5CFF] text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-[#5848e8] transition-colors duration-200 shadow-xl shadow-[#6B5CFF]/25"
          >
            Get Started Today →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
