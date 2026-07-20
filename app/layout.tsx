// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import CreativeBackground from "../components/CreativeBackground";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "Mohammad Al-Neghimshi | Portfolio",
  description: "Computer Science Graduate & Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // أضفنا scroll-smooth هنا عشان الحركة تصير ناعمة
    <html lang="en" className="scroll-smooth"> 
      <body className="bg-slate-950 text-slate-100 antialiased font-sans relative min-h-screen">
        <LanguageProvider>
          <CreativeBackground />
          <Navbar />
          <main className="pt-24 md:pt-28 pb-12 relative z-10">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}