"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputClass =
  "w-full bg-white border border-black/12 rounded-xl px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#6E6E73]/70 outline-none focus:border-[#6B5CFF] focus:ring-2 focus:ring-[#6B5CFF]/15 transition-all duration-200";

const labelClass = "block text-xs font-semibold text-[#1D1D1F] mb-1.5 uppercase tracking-wide";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      brand: (form.elements.namedItem("brand") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#6B5CFF] uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] leading-tight tracking-tight mb-5">
              Let&apos;s talk about
              <br />your brand.
            </h2>
            <p className="text-[#6E6E73] text-base leading-relaxed mb-10">
              Tell us about your business and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "🎯", text: "Free creative consultation" },
                { icon: "✓", text: "No commitment required" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center text-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm text-[#1D1D1F] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-black/5 shadow-lg shadow-black/5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Message sent!</h3>
                <p className="text-[#6E6E73] text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@brand.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <label className={labelClass}>Brand name</label>
                  <input
                    type="text"
                    name="brand"
                    required
                    placeholder="Your brand or store name"
                    className={inputClass}
                  />
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Monthly ad budget</label>
                    <select name="budget" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select budget</option>
                      <option>Under $1,000</option>
                      <option>$1,000–$5,000</option>
                      <option>$5,000–$10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>What do you need?</label>
                    <select name="service" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select service</option>
                      <option>Product Photography</option>
                      <option>Video Ads</option>
                      <option>Both</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message <span className="normal-case text-[#6E6E73] font-normal">(optional)</span></label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your product and goals..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-500 text-xs text-center">{error}</p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className="w-full bg-[#6B5CFF] text-white font-semibold text-sm py-4 rounded-full hover:bg-[#5848e8] transition-colors duration-200 shadow-lg shadow-[#6B5CFF]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {/* Calendly option */}
                <p className="text-center text-xs text-[#6E6E73] pt-1">
                  Prefer to talk directly?{" "}
                  <a
                    href="https://calendly.com/anton-william-bengtsson/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B5CFF] font-semibold hover:underline"
                  >
                    → Book a free 20-min call
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
