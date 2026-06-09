"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Will the images actually look real?",
    a: "Yes. Our AI generates hyper-realistic visuals that are indistinguishable from traditional photography. Every image is tailored to your brand, product, and target audience.",
  },
  {
    q: "Do I need to send you my product?",
    a: "No. Just send us high-quality photos of your product and we handle everything from there. No shipping, no logistics.",
  },
  {
    q: "What if I don't like the result?",
    a: "We offer revision rounds on every package. If you're still not happy, we'll redo it. Your satisfaction is guaranteed.",
  },
  {
    q: "How does AI photography compare to a real photoshoot?",
    a: "You get the same premium look at 90% lower cost and 10x faster turnaround. For e-commerce brands running paid ads, this means more creative variations, faster testing, and better ROI.",
  },
  {
    q: "How long does delivery take?",
    a: "Most packages are delivered within 3 business days. Brand package clients get priority 48-hour delivery.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Start with Starter and upgrade anytime. We'll credit your previous purchase toward the upgrade.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="border-b border-black/8 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#1D1D1F] font-semibold text-base group-hover:text-[#6B5CFF] transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-6 h-6 rounded-full border border-black/15 flex items-center justify-center text-[#6E6E73] group-hover:border-[#6B5CFF] group-hover:text-[#6B5CFF] transition-colors duration-200"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#6E6E73] text-sm leading-relaxed pb-5 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight mb-4">
            Frequently asked questions.
          </h2>
          <p className="text-[#6E6E73] text-base">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="bg-[#F5F5F7] rounded-2xl px-6 sm:px-8 border border-black/5">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
