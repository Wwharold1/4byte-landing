"use client";

import Home from "./modules/home/home";
import Footer from "./shared/components/footer/footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import SplashHome from "./shared/components/splash/splash-home";
import WhatsAppWidget from "./shared/components/whatsaap/whatsaap";
import ScrollToTopButton from "./shared/components/scroll-button/scroll-button";

export default function Init() {
  const [showSplash, setShowSplash] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    const heroTimer = setTimeout(() => {
      setHeroVisible(true);
    }, 6450);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(heroTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashHome key="splash" />}
      </AnimatePresence>

      <div className={showSplash ? "invisible min-h-screen" : "min-h-screen"}>
        <Home heroVisible={heroVisible} />
        <Footer />
      </div>

      {!showSplash && <WhatsAppWidget />}
      {!showSplash && <ScrollToTopButton />}
    </>
  );
}