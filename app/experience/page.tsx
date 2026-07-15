"use client";

import SpotlightCard from "../../components/SpotlightCard";
import { useLanguage } from "../../context/LanguageContext";

export default function Experience() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "الخبرات والتعليم",
      subtitle: "تفاصيل المسيرة المهنية، التاريخ الأكاديمي، والشهادات التقنية",
      experience: "الخبرات المهنية",
      education: "التعليم والمسيرة الأكاديمية",
      certifications: "الشهادات المهنية",
      techSkills: "المهارات التقنية وعلوم البيانات",
      softSkills: "المهارات الشخصية والإدارية",
      exp1Title: "متدرب تطوير برمجيات متكاملة (Full-stack) | شركة إيغادة للأنظمة (Ejada Systems)",
      exp1Date: "2025",
      exp1Bullet1: "منصة OutSystems: تطوير وتسليم تطبيقات ويب عالية الأداء باستخدام منصة OutSystems للـ Low-Code.",
      exp1Bullet2: "تصميم قواعد البيانات: تصميم ودمج قواعد البيانات العلاجية لضمان سلامة البيانات وتوفير تجربة مستخدم سلسة.",
      exp1Bullet3: "تطوير واجهات المستخدم: الاستفادة من بيئة التطوير المرئية في OutSystems لبناء واجهات متجاوبة وسهلة الاستخدام.",
      exp2Title: "رئيس قسم الإعلام والتنظيم | تيك مايندز (TechMinds)",
      exp2Date: "2024",
      exp2Bullet1: "القيادة: قيادة الفريق الإعلامي في تنفيذ استراتيجيات المحتوى الرقمي والفعاليات التي تركز على التقنية.",
      exp2Bullet2: "إدارة الفعاليات: تنسيق العمليات اللوجستية والأنشطة لمبادرات البرامج المختلفة لضمان تقديمها بسلاسة.",
      exp2Bullet3: "إدارة المحتوى: إدارة التواجد الإعلامي للبرنامج والتواصل بين الأقسام المختلفة.",
      eduTitle: "بكالوريوس علوم الحاسب | جامعة القصيم",
      eduDate: "2021 - 06/2026",
      eduDetails: "برنامج معتمد من منظمة ABET الدولية، مما يضمن أعلى المعايير العالمية في تعليم علوم الحاسب.",
      eduGpa: "المعدل التراكمي: 4.75 من 5"
    },
    en: {
      title: "Experience & Education",
      subtitle: "A detailed look at my professional journey, academic background, and core skills.",
      experience: "Work Experience",
      education: "Academic History",
      certifications: "Certifications",
      techSkills: "Technical & Data Science Skills",
      softSkills: "Soft Skills",
      exp1Title: "Full-stack Developer Trainee | Ejada Systems",
      exp1Date: "2025",
      exp1Bullet1: "OutSystems Platform: Developed and delivered high-performance web applications using the OutSystems Low-Code platform.",
      exp1Bullet2: "Database Design: Designed and integrated relational databases to ensure data integrity and seamless user experience.",
      exp1Bullet3: "UI/UX Implementation: Leveraged OutSystems' visual development environment to create responsive and user-friendly interfaces.",
      exp2Title: "Head of the Media and Organization Department | TechMinds",
      exp2Date: "2024",
      exp2Bullet1: "Leadership: Led the media team in executing digital content strategies and tech-focused events.",
      exp2Bullet2: "Event Management: Coordinated logistics and activities for various program initiatives, ensuring seamless delivery.",
      exp2Bullet3: "Content Management: Managed the program's media presence and cross-departmental communications.",
      eduTitle: "Bachelor of Computer Science | Qassim University",
      eduDate: "2021 - 06/2026",
      eduDetails: "ABET-accredited program, ensuring the highest international standards in computer science education.",
      eduGpa: "GPA: 4.75 / 5"
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SpotlightCard glowColor="rgba(16, 185, 129, 0.15)">
            <h2 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-block border-b-2 border-emerald-500 pb-1">{t.experience}</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              <div className="relative pl-10 group">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs text-emerald-400 font-mono font-bold block mb-1">{t.exp1Date}</span>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{t.exp1Title}</h3>
                <ul className="mt-2 text-sm text-slate-400 space-y-2 list-disc list-inside">
                  <li>{t.exp1Bullet1}</li>
                  <li>{t.exp1Bullet2}</li>
                  <li>{t.exp1Bullet3}</li>
                </ul>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs text-emerald-400 font-mono font-bold block mb-1">{t.exp2Date}</span>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{t.exp2Title}</h3>
                <ul className="mt-2 text-sm text-slate-400 space-y-2 list-disc list-inside">
                  <li>{t.exp2Bullet1}</li>
                  <li>{t.exp2Bullet2}</li>
                  <li>{t.exp2Bullet3}</li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard glowColor="rgba(59, 130, 246, 0.15)">
            <h2 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block border-b-2 border-blue-500 pb-1">{t.education}</h2>
            <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/60">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-base font-bold text-white">{t.eduTitle}</h3>
                <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded-md">{t.eduDate}</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">{t.eduDetails}</p>
              <p className="text-sm text-blue-400 font-bold">{t.eduGpa}</p>
            </div>
          </SpotlightCard>
        </div>

        <div className="space-y-6">
          <SpotlightCard glowColor="rgba(234, 179, 8, 0.15)">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-800/60 pb-2">🎖️ {t.certifications}</h2>
            <ul className="text-xs text-slate-300 space-y-3.5">
              <li className="flex items-start gap-2"><span className="text-yellow-500">✔</span> HCIA-AI (Huawei Certified ICT Associate AI)</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500">✔</span> Introduction to Data Analytics From IBM</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500">✔</span> Security Principles - ISC2</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="space-y-6" glowColor="rgba(16, 185, 129, 0.15)">
            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-800/60 pb-2">🚀 {t.techSkills}</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Python", "Machine Learning", "Deep Learning", "OCR", "Object Detection", "Pandas", "NumPy", "OutSystems", "Django", "GoJS", "Database Design", "UI/UX", "Git/GitHub"].map((skill) => (
                  <span key={skill} className="bg-slate-950 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-800/60 hover:border-emerald-500/30 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-800/60 pb-2">🤝 {t.softSkills}</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {[lang === 'ar' ? "القيادة وإدارة الفرق" : "Leadership & Management", lang === 'ar' ? "إدارة المشاريع" : "Project Management", lang === 'ar' ? "حل المشكلات المعقدة" : "Complex Problem Solving", lang === 'ar' ? "التواصل الفعال" : "Effective Communication"].map((skill) => (
                  <span key={skill} className="bg-slate-950 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-800/60">{skill}</span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}