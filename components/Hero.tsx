"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-[#6B5CFF]/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full bg-[#a78bfa]/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#6B5CFF]/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-[#F5F5F7] border border-black/8 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#6B5CFF] animate-pulse" />
          <span className="text-xs font-semibold text-[#6E6E73] tracking-wide uppercase">
            Content that makes waves.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1D1D1F] leading-[1.08] tracking-tight mb-6"
        >
          Scroll-Stopping Ads.
          <br />
          <span className="text-[#6B5CFF]">Zero Photoshoots.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          AI-generated product photography and video ads that look like a{" "}
          <span className="text-[#1D1D1F] font-medium">$50,000 production</span>{" "}
          — at a fraction of the cost.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://calendly.com/anton-william-bengtsson/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#6B5CFF] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#5848e8] transition-colors duration-200 shadow-lg shadow-[#6B5CFF]/25"
          >
            Book a Free Call
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#1D1D1F]/15 text-[#1D1D1F] font-semibold text-sm px-8 py-4 rounded-full hover:border-[#1D1D1F]/40 hover:bg-[#F5F5F7] transition-all duration-200"
          >
            How It Works
          </motion.a>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-black/8 shadow-2xl shadow-black/10 max-w-4xl mx-auto">
            {/* Mockup bar */}
            <div className="bg-[#F5F5F7] border-b border-black/8 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              <div className="ml-4 flex-1 bg-white rounded-md h-6 max-w-xs" />
            </div>
            {/* Image grid mockup */}
            <div className="bg-[#F5F5F7] p-6 grid grid-cols-3 gap-3 aspect-[16/7]">
              {[
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
                "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-white aspect-square"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Product example ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-8 sm:left-16 bg-white border border-black/8 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center">
              <span className="text-sm">⚡</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#1D1D1F]">3-day turnaround</p>
              <p className="text-xs text-[#6E6E73]">From brief to live ad</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 right-8 sm:right-16 bg-white border border-black/8 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <span className="text-sm">✓</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#1D1D1F]">90% cost savings</p>
              <p className="text-xs text-[#6E6E73]">vs. traditional production</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
