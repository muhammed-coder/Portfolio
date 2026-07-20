// src/app/page.tsx
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

  // دمجنا كل المحتوى في متغير واحد كبير
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
      statAccredited: "اعتماد دولي",

      projSectionTitle: "المشاريع البرمجية",
      projSectionSub: "استعراض لأبرز الأنظمة والتطبيقات التقنية التي قمت بتطويرها",
      proj1Title: "مشروع التخرج: مساعد كفيف ذكي مدعوم بالذكاء الاصطناعي",
      proj1Details: "تطوير نظام مساعدة ذكي لتعزيز استقلالية المستخدمين ذوي الإعاقة البصرية من خلال التعرف على الأشياء وتحويل النصوص المطبوعة إلى كلام (OCR) في الوقت الفعلي وبتأخير منخفض جداً لضمان الموثوقية.",
      proj2Title: "نظام إدارة القضايا (Case Management System)",
      proj2Details: "بناء نظام شامل لإدارة القضايا، مما ساهم في أتمتة تدفق سير العمل وتتبع المهام بكفاءة.",
      proj3Title: "المنصة الرقمية لعائلة النغيمشي",
      proj3Details: "تطوير منصة Full-stack باستخدام Django، تتميز بنظام مصادقة آمن يعتمد على كود الـ OTP عبر الواتساب، ودمج مكتبة GoJS لبناء شجرة عائلة تفاعلية وقابلة للبحث لإدارة البيانات المعقدة، مع لوحة تحكم إدارية مخصصة للأخبار والمناسبات.",

      expSectionTitle: "الخبرات والتعليم",
      expSectionSub: "تفاصيل المسيرة المهنية، التاريخ الأكاديمي، والشهادات التقنية",
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
      name: "Mohammad Al-Neghimshi",
      summary: "Highly motivated Computer Science Graduate from Qassim University with hands-on experience in Full-stack development using OutSystems and AI-driven solutions. Proven track record in developing impactful projects, including an AI assistant for the visually impaired and a Case Management System. Skilled in Python and Machine Learning, with strong leadership and organizational abilities from leading media departments in tech programs. Committed to leveraging data-driven insights and AI to solve real-world challenges.",
      downloadCv: "Resume PDF",
      languages: "Languages",
      langArabic: "Arabic (Native)",
      langEnglish: "English (Fluent)",
      statProjects: "Engineered Projects",
      statGpa: "Cumulative GPA",
      statAccredited: "ABET Accredited",

      projSectionTitle: "Featured Projects",
      projSectionSub: "A showcase of full-stack applications, AI solutions, and systems I have engineered.",
      proj1Title: "Senior Project: AI-based Blind Assistant | Python & Computer Vision",
      proj1Details: "Developed an intelligent assistance system to enhance the autonomy of visually impaired users through real-time Object Detection and OCR. Implemented Deep Learning models to identify everyday objects and convert printed text into speech. Optimized the system for low-latency performance to ensure reliable real-time feedback.",
      proj2Title: "Case Management System",
      proj2Details: "Built a comprehensive case management system, streamlining workflow automation and task tracking.",
      proj3Title: "Family Web Platform (Al-Nughimshi Family)",
      proj3Details: "Developed a full-stack platform using Django, featuring a secure WhatsApp-based OTP authentication system. Integrated GoJS to build an interactive and searchable family tree for managing complex relational data. Built a custom administrative dashboard to manage family news, events, and family tree records.",

      expSectionTitle: "Experience & Education",
      expSectionSub: "A detailed look at my professional journey, academic background, and core skills.",
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
    <div className="p-6 md:p-12 max-w-5xl mx-auto w-full flex flex-col gap-24 relative z-10" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* 1. قسم من أنا (About) */}
      <section id="about" className="scroll-mt-32 flex flex-col gap-8">
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
      </section>

      {/* 2. قسم المشاريع (Projects) */}
      <section id="projects" className="scroll-mt-32 pt-8 border-t border-slate-800/60">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-block">
            {t.projSectionTitle}
          </h2>
          <p className="text-slate-400 text-sm mt-2">{t.projSectionSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpotlightCard className="group !p-5" glowColor="rgba(16, 185, 129, 0.2)">
            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800 relative">
              <img src="/mubser.jpg" alt="Mubser Demo" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-slate-600 text-sm">📸 Mubser Image</div>'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              <video src="/family-demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover">Your browser does not support the video tag.</video>
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
              <video src="/cms-demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover">Your browser does not support the video tag.</video>
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{t.proj2Title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 text-justify">{t.proj2Details}</p>
            <div className="flex gap-2 flex-wrap text-xs">
              <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-lg font-mono">OutSystems</span>
              <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-lg font-mono">Agile Workflow</span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 3. قسم الخبرات والتعليم (Experience) */}
      <section id="experience" className="scroll-mt-32 pt-8 border-t border-slate-800/60">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-block">
            {t.expSectionTitle}
          </h2>
          <p className="text-slate-400 text-sm mt-2">{t.expSectionSub}</p>
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
                <li className="flex items-start gap-2"><span className="text-yellow-500">✔</span> HCIA-AI (Huawei Certified)</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">✔</span> Intro to Data Analytics From IBM</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">✔</span> Security Principles - ISC2</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="space-y-6" glowColor="rgba(16, 185, 129, 0.15)">
              <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-800/60 pb-2">🚀 {t.techSkills}</h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Python", "Machine Learning", "Deep Learning", "OCR", "Object Detection", "Pandas", "OutSystems", "Django", "GoJS", "Database Design", "UI/UX", "Git/GitHub"].map((skill) => (
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
      </section>

    </div>
  );
}