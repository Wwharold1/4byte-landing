"use client";

import Home from "./modules/home/home";
import Footer from "./shared/components/footer/footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import SplashHome from "./shared/components/splash/splash-home";
<<<<<<< HEAD
import WhatsAppWidget from "./shared/components/whatsaap/whatsaap";
=======
import WhatsAppWidget from "./shared/components/whatsapp/whatsapp";
>>>>>>> f6103e0 (feat agregar init)
import ScrollToTopButton from "./shared/components/scroll-button/scroll-button";

export default function Init() {
  const [showSplash, setShowSplash] = useState(true);
<<<<<<< HEAD
  const [heroVisible, setHeroVisible] = useState(false);
=======
  const [visible, setVisible] = useState(false);
>>>>>>> f6103e0 (feat agregar init)

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

<<<<<<< HEAD
    const heroTimer = setTimeout(() => {
      setHeroVisible(true);
=======
    const visibleTimer = setTimeout(() => {
      setVisible(true);
>>>>>>> f6103e0 (feat agregar init)
    }, 6450);

    return () => {
      clearTimeout(splashTimer);
<<<<<<< HEAD
      clearTimeout(heroTimer);
=======
      clearTimeout(visibleTimer);
>>>>>>> f6103e0 (feat agregar init)
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashHome key="splash" />}
      </AnimatePresence>

      <div className={showSplash ? "invisible min-h-screen" : "min-h-screen"}>
<<<<<<< HEAD
        <Home heroVisible={heroVisible} />
=======
        <Home visible={visible} />
>>>>>>> f6103e0 (feat agregar init)
        <Footer />
      </div>

      {!showSplash && <WhatsAppWidget />}
      {!showSplash && <ScrollToTopButton />}
    </>
  );
}