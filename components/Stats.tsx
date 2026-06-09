"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10x", label: "Faster than traditional production" },
  { value: "90%", label: "Lower cost than a photoshoot" },
  { value: "3 days", label: "Average delivery time" },
  { value: "100+", label: "Brands served" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#1D1D1F]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-16"
        >
          Results
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:border-r md:last:border-r-0 border-white/10 px-4"
            >
              <p className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
