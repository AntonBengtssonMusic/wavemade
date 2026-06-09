"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "📦",
    title: "Share your product",
    description:
      "Send us your product photos or a link to your store. That's all we need to get started.",
  },
  {
    number: "02",
    icon: "✦",
    title: "We get to work",
    description:
      "Our team crafts your visuals by hand — using AI as a tool, not a shortcut. Every image and video is reviewed, refined, and approved before it reaches you.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "You publish",
    description:
      "Download your ready-to-use assets and launch your campaign. No revisions, no delays.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
            Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight">
            From brief to live ad in days.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-[#1D1D1F]/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Step number circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[#6B5CFF]/30 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xs font-extrabold text-[#6B5CFF]">
                  {step.number}
                </span>
              </div>

              <div className="text-2xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#6E6E73] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#333] transition-colors duration-200"
          >
            Start your first project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
