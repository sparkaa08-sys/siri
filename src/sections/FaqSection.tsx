import { Link } from "@tanstack/react-router";
import { HelpCircle, ChevronLeft } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export const faqPreview: FaqItem[] = [
  {
    q: "كيف تعمل منصة حماية المستهلك لتقديم الشكاوى؟",
    a: "تتيح لك المنصة تقديم بيانات شكواك والوثائق الداعمة بسهولة. يقوم فريقنا بمراجعتها، توثيقها برقم مرجعي، ثم مخاطبة الشركة المعنية لمتابعة التوصل إلى حل إيجابي.",
  },
  {
    q: "هل خدمة تقديم الشكوى مجانية للمستهلكين في الإمارات؟",
    a: "نعم، خدمة توثيق وتقديم ومتابعة الشكاوى مجانية بالكامل لجميع المستهلكين والمتعاملين داخل دولة الإمارات العربية المتحدة.",
  },
  {
    q: "ما الدور الذي تقوم به المنصة لحل المشكلة مع الشركة؟",
    a: "نقوم بتوثيق الشكوى قانونياً، إصدار الرقم المرجعي، ومخاطبة إدارة المنشأة التجارية للوصول إلى تسوية عادلة تحمي حقوق المستهلك وفق الأنظمة المتبعة.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/80 py-20 md:py-28 text-slate-900">
      
      {/* خلفية بصرية هادئة وفاتحة متناسقة */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-200/30 via-emerald-100/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3 items-start">
        
        {/* العمود الأيمن: العنوان والوصف */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-800 shadow-xs backdrop-blur-sm">
            <HelpCircle className="h-4 w-4 shrink-0 text-emerald-600" />
            <span>الأسئلة الشائعة</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-950 tracking-tight leading-tight">
            استفسارات تتكرر باستمرار
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            إليك إجابات لأبرز الأسئلة المتعلقة بتقديم وتوثيق الشكاوى التجارية للمستهلكين.
          </p>

          <div className="pt-2">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group"
            >
              <span>عرض جميع الأسئلة</span>
              <ChevronLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* العمود الأيسر: بطاقات الأسئلة الإجابات الفاتحة */}
        <dl className="lg:col-span-2 space-y-4">
          {faqPreview.map((f, idx) => (
            <div 
              key={idx} 
              className="group rounded-2xl border border-slate-200/80 bg-white/90 p-6 sm:p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-amber-400/60 hover:shadow-md"
            >
              <dt className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {f.q}
              </dt>
              <dd className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}