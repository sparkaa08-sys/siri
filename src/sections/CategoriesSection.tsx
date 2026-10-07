import {
  Smartphone,
  ShoppingCart,
  Building2,
  Plane,
  CreditCard,
  Wrench,
  Truck,
  Users,
  LucideIcon,
} from "lucide-react";

export interface CategoryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const categories: CategoryItem[] = [
  { icon: Smartphone, title: "شكاوى الاتصالات والإنترنت", desc: "عقود الهواتف، مشاكل التغطية، ورسوم الخدمات المضافة بدون إذن." },
  { icon: ShoppingCart, title: "التسوق الإلكتروني والمتاجر", desc: "المتاجر الإلكترونية، التأخر في التوصيل، وسياسات الإرجاع المضللة." },
  { icon: Building2, title: "العقارات والوساطة التجارية", desc: "خلافات شركات إدارة العقارات، الرسوم الإدارية، وعقود الوساطة." },
  { icon: Plane, title: "السفر والحجوزات السياحية", desc: "إلغاء وتأخير الرحلات، مشكلات حجوزات الفنادق، والشركات السياحية." },
  { icon: CreditCard, title: "البنوك والخدمات المالية", desc: "الرسوم المجحفة، المعاملات غير المصرح بها، والخدمات المصرفية." },
  { icon: Wrench, title: "الصيانة والخدمات المنزلية", desc: "عقود الصيانة، الأجهزة الكهربائية، والخدمات الفنية غير المطابقة." },
  { icon: Truck, title: "تطبيقات التوصيل والنقل", desc: "تطبيقات التوصيل الذكية، طلبات الطعام، وخدمات النقل الخاص." },
  { icon: Users, title: "خدمات القطاع الخاص الأخرى", desc: "الشكاوى العامة ضد الشركات والمراكز التجارية الخاصة بالدولة." },
];

export function CategoriesSection() {
  return (
    <section 
      dir="rtl" 
      className="relative overflow-hidden bg-neutral-950 py-20 md:py-28 text-white border-b border-neutral-800 text-right"
    >
      {/* 1. صورة الخلفية من مجلد public */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/xx.png')" }}
      />

      {/* 2. لمسات إضاءة ناعمة تزيد من جمال التباين مع الخلفية */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      {/* 3. المحتوى الرئيسي */}
      <div className="container-page relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان والوصف الرئيسي */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-400 backdrop-blur-sm shadow-xs">
            القطاعات المشمولة
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            مجالات الشكاوى التجارية
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto">
            نغطي مختلف القطاعات التجارية الخاصة لضمان توثيق صوتك وحماية حقوقك الشاملة.
          </p>
        </div>

        {/* شبكة البطاقات الداكنة مع إضاءة أمبر عند التحويم */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-400/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* إضاءة أمبر دائرية داخلية عند التحويم */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

              {/* أيقونة العنصر */}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-neutral-800 text-amber-400 border border-neutral-700/60 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:border-amber-400">
                <c.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              </div>

              {/* عنوان الشكوى */}
              <h3 className="mt-4 text-base font-bold text-white transition-colors duration-300 group-hover:text-amber-400 relative z-10">
                {c.title}
              </h3>

              {/* الشرح */}
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-neutral-400 font-normal relative z-10">
                {c.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}