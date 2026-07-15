"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-3 md:px-4">
      <div className="max-w-3xl mx-auto backdrop-blur-xl bg-slate-900/70 border border-slate-800/80 rounded-full px-2 py-1.5 md:px-3 md:py-2 shadow-xl flex justify-between items-center w-full" dir="ltr">
        
        {/* الشعار: يختفي في الجوال عشان نعطي مساحة للروابط واللغة */}
        <Link href="/" className="hidden sm:block text-sm md:text-base font-black tracking-wider bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 pl-2 shrink-0">
          M. AL-NEGHIMSHI
        </Link>
        
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 md:gap-5">
          {/* روابط التنقل: صغرنا الخط والمسافات للجوال */}
          <nav className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-sm font-bold">
            <Link href="/" className="px-2 md:px-4 py-1.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-950/80 transition-all duration-300">About</Link>
            <Link href="/projects" className="px-2 md:px-4 py-1.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-950/80 transition-all duration-300">Projects</Link>
            <Link href="/experience" className="px-2 md:px-4 py-1.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-950/80 transition-all duration-300">Experience</Link>
          </nav>

          {/* سويتش اللغة: حلينا مشكلة التعليق وغيرنا طريقة الحركة */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-1 md:px-2.5 md:py-1.5 rounded-full border border-slate-800/80 shrink-0">
            <span className={`text-[9px] md:text-[10px] font-bold transition-colors ${lang === 'en' ? 'text-emerald-400' : 'text-slate-500'}`}>EN</span>
            
            <button onClick={toggleLang} className="w-8 h-4 rounded-full bg-slate-800 border border-slate-700 relative focus:outline-none shrink-0">
              {/* الدائرة الخضراء: صارت ثابتة يمين ويسار بدل الإزاحة اللي كانت تخرب */}
              <div className={`w-3 h-3 rounded-full bg-emerald-500 shadow-md absolute top-[1px] transition-all duration-300 ${lang === 'ar' ? 'right-[1px]' : 'left-[1px]'}`} />
            </button>
            
            <span className={`text-[9px] md:text-[10px] font-bold transition-colors ${lang === 'ar' ? 'text-emerald-400' : 'text-slate-500'}`}>AR</span>
          </div>
        </div>

      </div>
    </header>
  );
}