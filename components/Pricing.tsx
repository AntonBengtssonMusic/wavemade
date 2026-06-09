"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "one-time",
    description: "Perfect for brands just getting started with AI creatives.",
    features: [
      "5 AI product images",
      "1 short-form video ad",
      "2 revision rounds",
      "Delivery in 3 days",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$399",
    period: "one-time",
    description: "The most popular package for scaling brands.",
    features: [
      "15 AI product images",
      "3 short-form video ads",
      "Unlimited revisions",
      "Delivery in 3 days",
      "Creative testing (3 ad variations)",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Brand",
    price: "$799",
    period: "one-time",
    description: "For brands who want the full creative treatment.",
    features: [
      "30 AI product images",
      "6 short-form video ads",
      "Unlimited revisions",
      "Priority delivery in 48 hours",
      "Creative testing (6 ad variations)",
      "Dedicated creative manager",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
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
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-[#6E6E73] text-base max-w-md mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start md:items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-8 border transition-shadow duration-300 ${
                plan.highlighted
                  ? "bg-[#6B5CFF] border-[#6B5CFF] shadow-2xl shadow-[#6B5CFF]/25"
                  : "bg-[#F5F5F7] border-black/5 hover:shadow-xl hover:shadow-black/6"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#6B5CFF] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-sm font-semibold mb-1 ${
                    plan.highlighted ? "text-white/70" : "text-[#6E6E73]"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className={`text-5xl font-extrabold tracking-tight ${
                      plan.highlighted ? "text-white" : "text-[#1D1D1F]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
                      plan.highlighted ? "text-white/60" : "text-[#6E6E73]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlighted ? "text-white/75" : "text-[#6E6E73]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 text-xs ${
                        plan.highlighted ? "text-white" : "text-[#6B5CFF]"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/85" : "text-[#1D1D1F]"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block w-full text-center font-semibold text-sm py-3.5 rounded-full transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-white text-[#6B5CFF] hover:bg-white/90"
                    : "bg-[#1D1D1F] text-white hover:bg-[#333]"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex items-center justify-center gap-2.5 mt-10"
        >
          <svg className="w-5 h-5 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
          </svg>
          <p className="text-sm text-[#6E6E73]">
            <span className="font-semibold text-[#1D1D1F]">100% Satisfaction Guarantee</span>
            {" "}— Not happy with the result? We redo it for free.
          </p>
        </motion.div>

        {/* Reassurance */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="text-center text-sm text-[#6E6E73] mt-5"
        >
          Not sure which plan is right for you?{" "}
          <a href="#contact" className="text-[#6B5CFF] font-medium hover:underline">
            Start with Starter
          </a>{" "}
          and upgrade anytime.
        </motion.p>
      </div>
    </section>
  );
}
