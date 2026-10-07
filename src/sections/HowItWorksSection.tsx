"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface StepItem {
  n: string;
  title: string;
  desc: string;
}

export const steps: StepItem[] = [
  { n: "01", title: "تعبئة نموذج الشكوى", desc: "إدخال التفاصيل الأساسية والمشكلة وبيانات الشركة المعنية في دقائق." },
  { n: "02", title: "التدقيق المبدئي للطلب", desc: "يقوم الفريق بالتحقق من اكتمال البيانات والأوراق الثبوتية." },
  { n: "03", title: "إصدار رقم مرجعي ومخاطبة الجهة", desc: "تسجيل الشكوى رسمياً وإشعار الشركة بالمخالفة أو المشكلة." },
  { n: "04", title: "متابعة التسوية والحل", desc: "تلقي الإشعارات الفورية حول رد الشركة والحلول المقترحة." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" dir="rtl" className="relative overflow-hidden bg-white py-20 md:py-28 text-slate-900 border-y border-slate-100">
      
      {/* خلفية بصرية ناعمة باللون الفاتح لإبراز البطاقات الداكنة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-100/40 via-emerald-50/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العناوين والشارة */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-800 shadow-xs">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>خطوات عمل بسيطة</span>
          </div>

          <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight">
            آلية توثيق ومتابعة الشكاوى
          </h2>

          <p className="text-sm md:text-base text-slate-600 font-normal max-w-xl mx-auto">
            آلية عمل شفافة تضمن متابعة حقك برقم مرجعي رسمي.
          </p>
        </div>

        {/* شبكة البطاقات الداكنة مع إضاءة أمبر داخلية */}
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-amber-400/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* إضاءة أمبر دائرية ناعمة داخل البطاقة تبرز عند التحويم */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none transition-opacity duration-300 opacity-40 group-hover:opacity-100" />

              {/* رقم الخطوة باللون الأمبر والشفافية الداكنة */}
              <span className="font-mono text-4xl font-black text-amber-400/30 absolute top-4 left-5 select-none transition-colors duration-300 group-hover:text-amber-400">
                {s.n}
              </span>

              {/* العنوان والوصف باللون الأبيض الصريح */}
              <h3 className="mt-4 text-base md:text-lg font-bold text-white transition-colors duration-300 group-hover:text-amber-400 relative z-10">
                {s.title}
              </h3>
              
              <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-neutral-400 font-normal relative z-10">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}