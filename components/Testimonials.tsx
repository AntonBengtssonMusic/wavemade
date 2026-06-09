"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "WaveMade completely changed how we approach content. We went from spending $3,000 on a photoshoot to getting better results for a fraction of the price.",
    name: "Sarah K.",
    title: "Founder of Lumière Jewelry",
    initials: "SK",
  },
  {
    quote:
      "Our TikTok ads went from 0.8% to 3.2% CTR after switching to WaveMade. The content looks incredibly real.",
    name: "James R.",
    title: "Marketing Lead at SunCo",
    initials: "JR",
  },
  {
    quote:
      "We tested 6 different ad creatives in one week. That would have taken us 2 months and $10,000 the traditional way.",
    name: "Mia T.",
    title: "E-commerce Director at Vera Fashion",
    initials: "MT",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#6B5CFF]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.778c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight mb-4">
            Brands that trust us.
          </h2>
          <p className="text-[#6E6E73] text-base max-w-md mx-auto">
            Real results from real e-commerce brands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/6 transition-shadow duration-300"
            >
              <Stars />
              <p className="text-[#1D1D1F] text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/6">
                <div className="w-9 h-9 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#6B5CFF]">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1D1D1F]">{t.name}</p>
                  <p className="text-xs text-[#6E6E73]">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
