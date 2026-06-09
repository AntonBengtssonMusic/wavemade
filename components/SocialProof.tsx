"use client";

import { motion } from "framer-motion";

const brands = [
  "Lumière",
  "ArcVision",
  "NovaWear",
  "GoldThread",
  "SolFrame",
  "Duskline",
];

export default function SocialProof() {
  return (
    <section className="py-14 border-y border-black/6 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          <p className="text-sm text-[#6E6E73] font-medium whitespace-nowrap shrink-0">
            Trusted by brands on →
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-4">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-[#1D1D1F]/25 font-bold text-lg tracking-tight select-none hover:text-[#1D1D1F]/40 transition-colors duration-200 cursor-default"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
