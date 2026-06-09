"use client";

import { motion } from "framer-motion";

export default function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      {/* Fade-up blur edge */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

      <div className="bg-white/90 backdrop-blur-xl border-t border-black/8 px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 w-full bg-[#6B5CFF] text-white font-semibold text-sm py-3.5 rounded-full hover:bg-[#5848e8] active:scale-95 transition-all duration-200 shadow-lg shadow-[#6B5CFF]/25"
        >
          Contact Us →
        </a>
      </div>
    </motion.div>
  );
}
