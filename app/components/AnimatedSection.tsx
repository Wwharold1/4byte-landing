"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  id,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      id={id}
      data-visible={visible}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "animate-fade-in-up opacity-100 stagger-visible"
          : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </section>
  );
}
