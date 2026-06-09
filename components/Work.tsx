"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Video loops indefinitely — no onEnded needed

  const togglePlay = async () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await videoRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error("Video play failed:", err);
      }
    }
  };

  return (
    <section id="work" className="py-28 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight max-w-xl">
            Real results for real brands.
          </h2>
        </motion.div>

        {/* Case study grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left — product images */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center">
                <span className="text-sm">◈</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1D1D1F]">AI Product Photography</p>
                <p className="text-xs text-[#6E6E73]">Sunglasses — Arcane Tortoise Cross</p>
              </div>
            </div>

            {/* Image pair */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm aspect-square"
              >
                <Image
                  src="/glasses-1.webp"
                  alt="Arcane Tortoise Cross sunglasses — product shot"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm aspect-square"
              >
                <Image
                  src="/glasses-2.webp"
                  alt="Arcane Tortoise Cross sunglasses — detail shot"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Clean background", "Studio lighting", "AI-generated", "Delivery: 1 day"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-[#6E6E73] bg-white border border-black/8 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — video ad */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-6 items-center lg:items-start"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center">
                <span className="text-sm">▶</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1D1D1F]">AI Video Ad</p>
                <p className="text-xs text-[#6E6E73]">Short-form commercial — TikTok / Reels</p>
              </div>
            </div>

            {/* Video player — 9:16 portrait */}
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden bg-[#1D1D1F] border border-black/10 shadow-xl shadow-black/10 w-full max-w-[320px] aspect-[9/16] cursor-pointer group"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                playsInline
                preload="metadata"
              >
                <source src="/commercial1.mp4" type="video/mp4" />
              </video>

              {/* Play / pause overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                  playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  {playing ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                AI Commercial
              </div>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["TikTok ready", "Reels format", "AI-generated", "Delivery: 3 days"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-[#6E6E73] bg-white border border-black/8 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#6B5CFF] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#5848e8] transition-colors duration-200 shadow-lg shadow-[#6B5CFF]/25"
          >
            Get results like these →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
