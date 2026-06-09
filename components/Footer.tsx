"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/6 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <Image src="/logo.png" alt="WaveMade logo" width={28} height={28} className="w-7 h-7 object-contain" />
              <p className="text-[#1D1D1F] font-bold text-xl tracking-tight">
                Wave<span className="text-[#6B5CFF]">Made</span>
              </p>
            </div>
            <p className="text-sm text-[#6E6E73]">
              AI-powered ad creative for modern brands.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-black/6">
          <p className="text-xs text-[#6E6E73]">
            © 2025 WaveMade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
