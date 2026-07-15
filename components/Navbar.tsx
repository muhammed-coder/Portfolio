"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4">
      <div className="max-w-3xl mx-auto backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-emerald-500/5 hover:border-emerald-500/30 transition-all duration-500 flex justify-between items-center group" dir="ltr">
        
        <Link href="/" className="text-sm md:text-base font-black tracking-wider bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 pl-2">
          M. AL-NEGHIMSHI
        </Link>
        
        <div className="flex items-center gap-3 md:gap-5">
          <nav className="flex items-center gap-1 text-xs md:text-sm font-bold">
            <Link href="/" className="px-3 md:px-4 py-1.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-950/80 transition-all duration-300">About</Link>
            <Link href="/projects" className="px-3 md:px-4 py-1.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-950/80 transition-all duration-300">Projects</Link>
            <Link href="/experience" className="px-3 md:px-4 py-1.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-950/80 transition-all duration-300">Experience</Link>
          </nav>

          <div className="flex items-center gap-2 bg-slate-950/80 px-2.5 py-1.5 rounded-full border border-slate-800/80">
            <span className={`text-[9px] md:text-[10px] font-bold transition-colors ${lang === 'en' ? 'text-emerald-400' : 'text-slate-500'}`}>EN</span>
            <button onClick={toggleLang} className="w-7 h-4 md:w-8 md:h-4 rounded-full bg-slate-800 border border-slate-700 relative p-0.5 focus:outline-none">
              <div className={`w-3 h-3 rounded-full bg-emerald-500 shadow-md transform transition-transform duration-300 ${lang === 'ar' ? 'translate-x-3 md:translate-x-4' : 'translate-x-0'}`} />
            </button>
            <span className={`text-[9px] md:text-[10px] font-bold transition-colors ${lang === 'ar' ? 'text-emerald-400' : 'text-slate-500'}`}>AR</span>
          </div>
        </div>

      </div>
    </header>
  );
}