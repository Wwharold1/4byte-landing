"use client";

import Navbar from "./shared/components/navbar/navbar";
import Home from "./modules/home/home";
import Footer from "./shared/components/footer/footer";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup } from "motion/react";
import SplashHome from "./shared/components/splash/splash-home";

export default function Init() {
  const [showSplash, setShowSplash] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence
        mode="sync"
        onExitComplete={() => {
          setHeroReady(true);
        }}
      >
        {showSplash && <SplashHome key="splash" />}
      </AnimatePresence>

      <div className={showSplash ? "invisible min-h-screen" : "min-h-screen"}>
        <Navbar />
        <Home showSplash={showSplash} heroReady={heroReady} />
        <Footer />
      </div>
    </LayoutGroup>
  );
}