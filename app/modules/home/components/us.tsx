"use client";

import Navbar from "@/app/shared/components/navbar/navbar";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface UsSectionProps {
  visible: boolean;
}

export default function UsSection({ visible }: UsSectionProps) {
  const t = useTranslations("Home");
  return (
    <section
      id="nosotros"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24"
      style={{
        background:
          "linear-gradient(135deg, var(--gradient-hero-start) 0%, var(--gradient-hero-mid) 50%, var(--gradient-hero-end) 100%)",
      }}
    >
      <Navbar />

      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          background:
            "linear-gradient(-45deg, var(--gradient-hero-mid), var(--gradient-hero-end), var(--gradient-hero-start), var(--gradient-hero-end))",
          backgroundSize: "400% 400%",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 animate-grid-fade opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-shape-float absolute -left-16 top-1/4 h-40 w-40 rounded-full bg-white/10 blur-3xl sm:-left-20 sm:h-64 sm:w-64" />

        <div
          className="animate-shape-float absolute -right-20 top-1/2 h-52 w-52 rounded-full bg-[var(--blue-bright)]/20 blur-3xl sm:-right-32 sm:h-80 sm:w-80"
          style={{ animationDelay: "-6s" }}
        />

        <div
          className="animate-shape-float absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-white/5 blur-2xl sm:h-48 sm:w-48"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 35, scale: 0.92 }}
          animate={
            visible
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 35, scale: 0.92 }
          }
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[95%] text-3xl font-bold leading-[1.15] text-white drop-shadow-lg sm:text-5xl md:text-6xl"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={false}
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : 24,
          }}
          transition={{
            duration: 0.8,
            delay: visible ? 0.12 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 max-w-[92%] text-sm leading-6 text-white/85 sm:mt-6 sm:max-w-xl sm:text-lg"
        >
          {t('sub-title')}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {t('sub-title2')}
        </motion.p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-float text-white/60 sm:bottom-8">
        <span className="text-xl sm:text-2xl">↓</span>
      </div>
    </section>
  );
}