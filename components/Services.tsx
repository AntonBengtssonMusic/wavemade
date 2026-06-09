"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "◈",
    title: "AI Product Photography",
    description:
      "Studio-quality images with AI models tailored to your audience. Consistent, on-brand, and endlessly scalable.",
    tags: ["Jewelry", "Sunglasses", "Fashion", "Accessories"],
  },
  {
    icon: "▶",
    title: "Video Ads",
    description:
      "Short-form video ads optimized for TikTok, Reels, and YouTube Shorts. Designed to stop the scroll and drive action.",
    tags: ["TikTok", "Reels", "YouTube Shorts", "Facebook"],
  },
  {
    icon: "⟳",
    title: "Creative Testing",
    description:
      "Multiple ad variations generated fast, without the production cost. Test what resonates and scale what works.",
    tags: ["A/B Testing", "Rapid Iteration", "Performance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-xl"
        >
          <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight">
            Everything you need
            <br />
            to sell more.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group bg-[#F5F5F7] rounded-2xl p-8 border border-black/5 hover:border-[#6B5CFF]/20 hover:shadow-xl hover:shadow-black/6 transition-shadow duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-[#6B5CFF]/10 flex items-center justify-center text-[#6B5CFF] text-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#6E6E73] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-[#6E6E73] bg-white border border-black/8 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
