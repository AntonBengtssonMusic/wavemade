"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    label: "Jewelry",
    type: "Product Photography",
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    tall: true,
  },
  {
    label: "Sunglasses",
    type: "Lifestyle Shot",
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    tall: false,
  },
  {
    label: "Fashion",
    type: "TikTok Ad",
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    tall: false,
  },
  {
    label: "Accessories",
    type: "Instagram Reel",
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    tall: true,
  },
  {
    label: "Jewelry",
    type: "Creative Testing",
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    tall: false,
  },
  {
    label: "Fashion",
    type: "Facebook Ad",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    tall: false,
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight mb-4">
            Work that sells.
          </h2>
          <p className="text-[#6E6E73] text-base leading-relaxed">
            A glimpse of what we create for e-commerce brands.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`relative w-full ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={item.src}
                  alt={`${item.label} — ${item.type}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1D1D1F]/0 group-hover:bg-[#1D1D1F]/55 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <span className="text-white font-extrabold text-base leading-tight">
                    {item.label}
                  </span>
                  <span className="text-white/75 text-xs mt-1 font-medium">
                    {item.type}
                  </span>
                </div>

                {/* Resting label pill */}
                <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full group-hover:opacity-0 transition-opacity duration-200">
                  {item.label} · {item.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-[#1D1D1F]/15 text-[#1D1D1F] font-semibold text-sm px-8 py-4 rounded-full hover:border-[#6B5CFF] hover:text-[#6B5CFF] transition-all duration-200"
          >
            Want to see more? Book a free call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
