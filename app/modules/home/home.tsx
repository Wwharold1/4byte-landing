"use client";

import { AnimatedSection } from "@/app/components/AnimatedSection";
import { motion } from "motion/react";

type HomeProps = {
  showSplash: boolean;
  heroReady: boolean;
};

export default function Home({ showSplash, heroReady }: HomeProps) {
  return (
    <>
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
        style={{
          background: `linear-gradient(135deg, var(--gradient-hero-start) 0%, var(--gradient-hero-mid) 50%, var(--gradient-hero-end) 100%)`,
        }}
      >
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
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shape-float absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div
            className="animate-shape-float absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-[var(--blue-bright)]/20 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="animate-shape-float absolute bottom-1/4 left-1/3 h-48 w-48 rounded-full bg-white/5 blur-2xl"
            style={{ animationDelay: "-12s" }}
          />
        </div>

        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          {/* Placeholder invisible para reservar el espacio exacto */}
          {!heroReady && (
            <h1 className="invisible text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Desarrollo de software a la medida
            </h1>
          )}

          {heroReady && (
            <motion.h1
              layoutId="hero-title"
              initial={false}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl"
            >
              Desarrollo de software a la medida
            </motion.h1>
          )}

          <motion.p
            initial={false}
            animate={{
              opacity: heroReady ? 1 : 0,
              y: heroReady ? 0 : 20,
            }}
            transition={{
              duration: 0.8,
              delay: heroReady ? 0.35 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-lg text-white/85"
          >
            Creamos aplicaciones web, móviles y sistemas que impulsan tu negocio.
            Tecnología, diseño y entrega en tiempo.
          </motion.p>

          <motion.div
            initial={false}
            animate={{
              opacity: heroReady ? 1 : 0,
              y: heroReady ? 0 : 20,
            }}
            transition={{
              duration: 0.8,
              delay: heroReady ? 0.52 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="cta-glow btn-trust rounded-full bg-white px-8 py-3.5 font-semibold text-[var(--navy-deep)] shadow-lg hover:bg-[var(--blue-pastel-soft)]"
            >
              Hablar con nosotros
            </a>
            <a
              href="#servicios"
              className="btn-trust rounded-full border border-white/40 px-8 py-3.5 font-medium text-white hover:bg-white/10"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-white/60">
          <span className="text-2xl">↓</span>
        </div>
      </section>

      <AnimatedSection id="servicios" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[var(--navy-dark)] sm:text-4xl">
            Qué hacemos por ti
          </h2>
          <span className="title-accent-line" aria-hidden />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--navy-dark)]/80">
            Soluciones de software pensadas para escalar y adaptarse a tu negocio.
          </p>
          <ul className="stagger-children mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {[
              {
                title: "Aplicaciones web",
                description: "Sistemas y portales modernos, rápidos y seguros. Desde dashboards hasta e-commerce.",
                icon: "◇",
              },
              {
                title: "Apps móviles",
                description: "iOS y Android con experiencia de usuario cuidada y rendimiento optimizado.",
                icon: "▣",
              },
              {
                title: "Software a medida",
                description: "Desarrollo desde cero o integración con tus sistemas actuales para un flujo único.",
                icon: "◆",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="card-trust stagger-child rounded-2xl border border-[var(--navy-dark)]/10 bg-white/80 p-8 shadow-sm"
              >
                <span className="card-icon block text-2xl text-[var(--blue-bright)]">{item.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-[var(--navy-dark)]">{item.title}</h3>
                <p className="mt-2 text-[var(--navy-dark)]/75">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection id="nosotros" className="bg-[var(--navy-deep)] py-24 px-6 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Por qué 4BYTE
          </h2>
          <span className="title-accent-line dark" aria-hidden />
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
            Combinamos método, tecnología y comunicación para entregar proyectos que suman.
          </p>
          <div className="stagger-children mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Metodología clara", desc: "Procesos definidos y entregas iterativas." },
              { label: "Tecnología actual", desc: "Stack moderno y mantenible a largo plazo." },
              { label: "Comunicación directa", desc: "Un equipo alineado con tus objetivos." },
              { label: "Soporte post-lanzamiento", desc: "Acompañamiento después del deploy." },
            ].map((item) => (
              <div
                key={item.label}
                className="stagger-child rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <h3 className="font-semibold text-[var(--blue-pastel-soft)]">{item.label}</h3>
                <p className="mt-2 text-sm text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contacto" className="py-24 px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[var(--blue-pastel-soft)]/80 p-12 text-center shadow-inner sm:p-16">
          <h2 className="text-2xl font-bold text-[var(--navy-dark)] sm:text-3xl">
            ¿Listo para llevar tu idea al siguiente nivel?
          </h2>
          <p className="mt-4 text-[var(--navy-dark)]/80">
            Cuéntanos tu proyecto y te respondemos con una propuesta a medida.
          </p>
          <a
            href="mailto:hola@4bytesolutions.com"
            className="cta-glow btn-trust mt-8 inline-block rounded-full bg-[var(--blue-bright)] px-10 py-4 font-semibold text-white hover:bg-[var(--blue-accent)]"
          >
            hola@4bytesolutions.com
          </a>
        </div>
      </AnimatedSection>
    </>
  );
}