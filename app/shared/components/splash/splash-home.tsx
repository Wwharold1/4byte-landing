"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const messages = [
  "Innovación tecnológica para impulsar tu empresa",
  "Optimiza e impulsa el crecimiento de tu negocio con tecnología",
  "Desarrollo de software a la medida",
];

export default function SplashHome() {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(0), 1000),
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <div className="flex w-full flex-col items-center justify-center px-6">
        <motion.div
          animate={{
            scale: step >= 0 ? 0.96 : 1,
            y: step >= 0 ? -10 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[20vh] w-[30vw]"
        >
          <Image
            src="/black_logo.png"
            alt="4BYTE Solutions"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <div className="mt-3 min-h-[48px] w-full">
          <AnimatePresence mode="wait">
            {step >= 0 && step < 2 && (
              <motion.p
                key={step}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-[1100px] text-center text-xl font-medium tracking-[0.08em] text-white sm:text-xl md:text-2xl"
              >
                {messages[step]}
              </motion.p>
            )}

            {step === 2 && (
              <motion.p
                key="shared-title"
                layoutId="hero-title"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-[1100px] text-center text-xl font-medium tracking-[0.08em] text-white sm:text-xl md:text-2xl"
              >
                Desarrollo de software a la medida
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}