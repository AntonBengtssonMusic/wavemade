import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WaveMade — AI Ad Creative for E-commerce Brands",
  description:
    "WaveMade creates ultra-realistic AI-generated product photography and video ads for e-commerce brands. Studio-quality content at a fraction of the cost.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-plus-jakarta)]">
        {children}
      </body>
    </html>
  );
}
