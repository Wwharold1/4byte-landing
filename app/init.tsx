"use client";

import Home from "./modules/home/home";
import Footer from "./shared/components/footer/footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import SplashHome from "./shared/components/splash/splash-home";
import WhatsAppWidget from "./shared/components/whatsapp/whatsapp";
import ScrollToTopButton from "./shared/components/scroll-button/scroll-button";

export default function Init() {
  const [showSplash, setShowSplash] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    const visibleTimer = setTimeout(() => {
      setVisible(true);
    }, 6450);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(visibleTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashHome key="splash" />}
      </AnimatePresence>

      <div className={showSplash ? "invisible min-h-screen" : "min-h-screen"}>
        <Home visible={visible} />
        <Footer />
      </div>

      {!showSplash && <WhatsAppWidget />}
      {!showSplash && <ScrollToTopButton />}
    </>
  );
}