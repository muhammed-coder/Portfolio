"use client";

import { useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Full-Stack Developer",
    "AI & Computer Vision Specialist",
    "Django & OutSystems Engineer"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[textIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          timer = setTimeout(handleTyping, 70);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length);
        } else {
          timer = setTimeout(handleTyping, 40);
        }
      }
    };
    timer = setTimeout(handleTyping, isDeleting ? 40 : 70);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  const content = {
    ar: {
      name: "محمد النغيمشي",
      summary: "خريج علوم حاسب طموح من جامعة القصيم ولديه خبرة عمليّة في تطوير البرمجيات متكاملة الأركان (Full-stack) باستخدام منصة OutSystems والحلول المدعومة بالذكاء الاصطناعي. يمتلك سجلاً حافلاً في تطوير المشاريع المؤثرة، بما في ذلك مساعد ذكي مدعوم بالذكاء الاصطناعي لذوي الإعاقة البصرية ونظام إدارة القضايا. ماهر في لغة Python والتعلم الآلي، ويتميز بقدرات قيادية وتنظيمية قوية برزت خلال قيادته للأقسام الإعلامية في البرامج التقنية. ملتزم بتوظيف الرؤى المستندة إلى البيانات والذكاء الاصطناعي لحل تحديات العالم الحقيقي.",
      downloadCv: "السيرة الذاتية",
      languages: "اللغات",
      langArabic: "العربية (اللغة الأم)",
      langEnglish: "الإنجليزية (متحدث بطلاقة)",
      statProjects: "مشاريع هندسية",
      statGpa: "معدل تراكمي",
      statAccredited: "اعتماد دولي"
    },
    en: {
      name: "Mohammad Al-Neghimshi",
      summary: "Highly motivated Computer Science Graduate from Qassim University with hands-on experience in Full-stack development using OutSystems and AI-driven solutions. Proven track record in developing impactful projects, including an AI assistant for the visually impaired and a Case Management System. Skilled in Python and Machine Learning, with strong leadership and organizational abilities from leading media departments in tech programs. Committed to leveraging data-driven insights and AI to solve real-world challenges.",
      downloadCv: "Resume PDF",
      languages: "Languages",
      langArabic: "Arabic (Native)",
      langEnglish: "English (Fluent)",
      statProjects: "Engineered Projects",
      statGpa: "Cumulative GPA",
      statAccredited: "ABET Accredited"
    }
  };

  const t = content[lang];

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto w-full flex flex-col gap-8 relative z-10" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      <SpotlightCard className="p-6 md:p-8" glowColor="rgba(16, 185, 129, 0.15)">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-800 flex items-center justify-center shadow-2xl">
              <img src="/profile.jpg" alt={t.name} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl">👨‍💻</span>'; }} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-grow space-y-5 w-full">
            <div className={lang === "ar" ? "md:text-right" : "md:text-left"}>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">{t.name}</h1>
              <div className="h-6 mt-1">
                <p className="text-emerald-400 font-mono font-bold text-sm tracking-wide">{currentText}<span className="animate-pulse bg-emerald-400 ml-1 inline-block w-1.5 h-4">|</span></p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start" dir="ltr">
              <a href="mailto:muhammed.ibng@gmail.com" className="bg-slate-950/90 hover:bg-slate-800 text-slate-200 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all hover:border-emerald-500/40 shadow-md"><span>📧</span> muhammed.ibng@gmail.com</a>
              <a href="tel:+966539337927" className="bg-slate-950/90 hover:bg-slate-800 text-slate-200 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all hover:border-emerald-500/40 shadow-md"><span>📞</span> +966 53 933 7927</a>
              <a href="/MOHAMMAD_AL-NEGHIMSHI.pdf" download className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all shadow-lg"><span>{t.downloadCv}</span> <span className="text-[11px]">⬇</span></a>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-6">
          <SpotlightCard className="p-6 border-l-4 border-l-emerald-500" glowColor="rgba(16, 185, 129, 0.1)">
            <p className="text-sm md:text-base text-slate-200 leading-relaxed text-justify font-medium">{t.summary}</p>
          </SpotlightCard>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SpotlightCard className="p-4 text-center" glowColor="rgba(16, 185, 129, 0.2)"><p className="text-2xl font-black text-white font-mono">+3</p><p className="text-[11px] font-bold text-slate-400 mt-0.5">{t.statProjects}</p></SpotlightCard>
            <SpotlightCard className="p-4 text-center" glowColor="rgba(20, 184, 166, 0.2)"><p className="text-2xl font-black text-white font-mono">4.75</p><p className="text-[11px] font-bold text-slate-400 mt-0.5">{t.statGpa}</p></SpotlightCard>
            <SpotlightCard className="p-4 text-center" glowColor="rgba(59, 130, 246, 0.2)"><p className="text-2xl font-black text-white font-mono">ABET</p><p className="text-[11px] font-bold text-slate-400 mt-0.5">{t.statAccredited}</p></SpotlightCard>
          </div>
        </div>
        <div className="lg:col-span-1 h-full">
          <SpotlightCard className="p-6 h-full flex flex-col justify-center" glowColor="rgba(16, 185, 129, 0.12)">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-800/60 pb-2">🗣️ {t.languages}</h2>
            <div className="text-sm text-slate-300 space-y-3 font-medium">
              <p className="flex items-center gap-2"><span className="text-xs text-emerald-400">●</span> {t.langArabic}</p>
              <p className="flex items-center gap-2"><span className="text-xs text-emerald-400">●</span> {t.langEnglish}</p>
            </div>
          </SpotlightCard>
        </div>
      </div>

    </div>
  );
}