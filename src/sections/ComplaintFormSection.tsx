import { FileCheck2 } from "lucide-react";
import { ComplaintForm } from "@/components/site/ComplaintForm";

export function ComplaintFormSection() {
  return (
    <section 
      aria-label="قسم تقديم الشكوى التجارية"
      className="relative overflow-hidden bg-slate-50 text-slate-900 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-200/80"
    >
      {/* 1. خلفية الـ SVG مع تأثيرات إضاءة أمبر (Amber Glow) */}
      
      {/* صورة الـ SVG كخلفية برمجية ناعمة */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15 bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: "url('/gemini-svg.svg')" }}
      />

      {/* بقع إضاءة وتوهج أمبر دافئة لتوفير العمق البصري */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-300/30 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-200/25 blur-3xl pointer-events-none rounded-full" />

      {/* 2. المحتوى الرئيسي */}
      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العناوين والشارة */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          
          {/* الشارة الفاتحة الأنيقة مع لمسة زمردية/أمبيرية */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 shadow-xs backdrop-blur-sm">
            <FileCheck2 className="h-4 w-4 text-emerald-600" />
            <span>معالجة فورية وتوثيق محمي — دولة الإمارات</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight">
            قدّم شكواك التجارية الآن
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            يرجى تعبئة النموذج بدقة. سيتم توثيق الشكوى ومعالجتها وفق الأنظمة واللوائح الخاصة بحماية المستهلك.
          </p>

        </div>

        {/* 3. بطاقة النموذج الزجاجية الفاتحة */}
        <div 
          id="complaint-form" 
          aria-label="نموذج توثيق الشكاوى"
          data-webmcp-tool="complaint_submission"
          className="mx-auto mt-12 max-w-4xl scroll-mt-24 min-h-[500px] rounded-3xl bg-white/90 p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-xl shadow-amber-500/5 backdrop-blur-xl relative"
        >
          {/* خط إضاءة ذهبي/أمبر علوي متدرج على البطاقة */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          
          <ComplaintForm />
        </div>

      </div>
    </section>
  );
}