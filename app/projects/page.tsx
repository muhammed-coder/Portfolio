"use client";

import SpotlightCard from "../../components/SpotlightCard";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "المشاريع البرمجية",
      subtitle: "استعراض لأبرز الأنظمة والتطبيقات التقنية التي قمت بتطويرها",
      proj1Title: "مشروع التخرج: مساعد كفيف ذكي مدعوم بالذكاء الاصطناعي",
      proj1Details: "تطوير نظام مساعدة ذكي لتعزيز استقلالية المستخدمين ذوي الإعاقة البصرية من خلال التعرف على الأشياء وتحويل النصوص المطبوعة إلى كلام (OCR) في الوقت الفعلي وبتأخير منخفض جداً لضمان الموثوقية.",
      proj2Title: "نظام إدارة القضايا (Case Management System)",
      proj2Details: "بناء نظام شامل لإدارة القضايا، مما ساهم في أتمتة تدفق سير العمل وتتبع المهام بكفاءة.",
      proj3Title: "المنصة الرقمية لعائلة النغيمشي",
      proj3Details: "تطوير منصة Full-stack باستخدام Django، تتميز بنظام مصادقة آمن يعتمد على كود الـ OTP عبر الواتساب، ودمج مكتبة GoJS لبناء شجرة عائلة تفاعلية وقابلة للبحث لإدارة البيانات المعقدة، مع لوحة تحكم إدارية مخصصة للأخبار والمناسبات."
    },
    en: {
      title: "Featured Projects",
      subtitle: "A showcase of full-stack applications, AI solutions, and systems I have engineered.",
      proj1Title: "Senior Project: AI-based Blind Assistant | Python & Computer Vision",
      proj1Details: "Developed an intelligent assistance system to enhance the autonomy of visually impaired users through real-time Object Detection and OCR. Implemented Deep Learning models to identify everyday objects and convert printed text into speech. Optimized the system for low-latency performance to ensure reliable real-time feedback.",
      proj2Title: "Case Management System",
      proj2Details: "Built a comprehensive case management system, streamlining workflow automation and task tracking.",
      proj3Title: "Family Web Platform (Al-Nughimshi Family)",
      proj3Details: "Developed a full-stack platform using Django, featuring a secure WhatsApp-based OTP authentication system. Integrated GoJS to build an interactive and searchable family tree for managing complex relational data. Built a custom administrative dashboard to manage family news, events, and family tree records."
    }
  };

  const t = content[lang];

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto relative z-10" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="mb-12 border-b border-slate-800/80 pb-6">
        <h1 className="text-3xl font-extrabold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-block">
          {t.title}
        </h1>
        <p className="text-slate-400 text-sm mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SpotlightCard className="group !p-5" glowColor="rgba(16, 185, 129, 0.2)">
          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800 relative">
            <img 
              src="/mubser.jpg" 
              alt="Mubser Project Demo" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-slate-600 text-sm">📸 Mubser Image</div>';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{t.proj1Title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 text-justify">{t.proj1Details}</p>
          <div className="flex gap-2 flex-wrap text-xs">
            <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg font-mono">Python</span>
            <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg font-mono">Computer Vision</span>
          </div>
        </SpotlightCard>

        <SpotlightCard className="group !p-5" glowColor="rgba(168, 85, 247, 0.15)">
          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800">
            <video src="/family-demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover">
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{t.proj3Title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 text-justify">{t.proj3Details}</p>
          <div className="flex gap-2 flex-wrap text-xs">
            <span className="bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-lg font-mono">Django</span>
            <span className="bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-lg font-mono">GoJS</span>
            <span className="bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-lg font-mono">OTP Systems</span>
          </div>
        </SpotlightCard>

        <SpotlightCard className="group !p-5 md:col-span-2" glowColor="rgba(59, 130, 246, 0.15)">
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800">
             {/* حط اسم مقطع إيغادة/نظام القضايا هنا بدل cms-demo.mp4 */}
            <video src="/cms-demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover">
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{t.proj2Title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 text-justify">{t.proj2Details}</p>
          <div className="flex gap-2 flex-wrap text-xs">
            <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-lg font-mono">OutSystems</span>
            <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-lg font-mono">Agile Workflow</span>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}