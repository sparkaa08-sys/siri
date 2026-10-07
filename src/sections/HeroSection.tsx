"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { motion, useInView, animate, type Variants } from "framer-motion";

interface HeroProps {
  onPrimaryClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function HeroSection({ onPrimaryClick }: HeroProps) {
  const stats = [
    { value: <CountUp to={100} suffix="%" duration={1} />, label: "خدمة مجانية بالكامل" },
    { value: <CountUp to={24} suffix=" ساعة" duration={0.8} />, label: "متوسط وقت الاستجابة" },
    { value: "تأطير كامل", label: "صياغة قانونية للشكوى" },
    { value: <CountUp to={10000} prefix="+" duration={1.2} />, label: "طلب تم توثيقه" },
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10 dir-rtl text-right">
      <div className="container-page space-y-12 md:space-y-16">

        {/* 1. HERO CARD */}
        <section className="relative w-full rounded-3xl overflow-hidden bg-neutral-950 text-white p-8 sm:p-12 md:p-16 border border-neutral-800 shadow-sm">
          
          {/* خلفية بصرية هادئة جداً */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <img
              src="/nn.jpg"
              alt="منصة حماية المستهلك"
              className="w-full h-full object-cover object-left opacity-25 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-neutral-950 via-neutral-950/90 to-transparent" />
          </div>

          {/* محتوى الهيرو الرئيسي */}
          <div className="relative z-10 max-w-2xl space-y-6">
            
            {/* الشارة */}
            <motion.div 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3.5 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>منصة مستقلة لتوثيق الشكاوى — دولة الإمارات</span>
            </motion.div>

            {/* العنوان والوصف */}
            <div className="space-y-3">
              <motion.h1 
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                منصة حماية المستهلك
              </motion.h1>

              <motion.p 
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal"
              >
                منصة رقمية مستقلة وغير تابعة لأي جهة حكومية لتوثيق وتنظيم الشكاوى ضد المنشآت التجارية، لتسهيل متابعتها وإيصالها للجهات المختصة بوضوح وسرعة.
              </motion.p>
            </div>

            {/* الأزرار */}
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-semibold px-7 py-3 text-sm transition-all duration-200 group active:scale-98"
              >
                <span>تقديم طلب توثيق شكوى</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/80 px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-200 active:scale-98"
              >
                دليل الإجراءات
              </a>
            </motion.div>

          </div>
        </section>

        {/* 2. ABOUT & STATS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">

          {/* النص */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-3"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
           من نحن 
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              خدمة إلكترونية متخصصة في إعادة تأطير وصياغة الشكاوى التجارية في دولة الإمارات، لضمان استيفائها للبيانات والمستندات المطلوبة قبل رفعها للجهات المعنية.
            </p>
          </motion.div>

          {/* شبكة الأرقام البسيطة */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {stats.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-150 flex flex-col justify-between space-y-1.5"
              >
                <span className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs text-neutral-500 font-medium leading-normal">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </section>

      </div>
    </div>
  );
}