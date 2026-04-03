<<<<<<< HEAD
"use client";

import { AnimatedSection } from "@/app/components/AnimatedSection";
import Navbar from "@/app/shared/components/navbar/navbar";
import { motion } from "motion/react";
import Image from "next/image";
import ClientsCarousel from "./components/clients";

type HomeProps = {
  heroVisible: boolean;
};

export default function Home({ heroVisible }: HomeProps) {
  return (
    <>
      <section
        id="nosotros"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24"
        style={{
          background: `linear-gradient(135deg, var(--gradient-hero-start) 0%, var(--gradient-hero-mid) 50%, var(--gradient-hero-end) 100%)`,
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
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
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
              heroVisible
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 35, scale: 0.92 }
            }
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[95%] text-3xl font-bold leading-[1.15] text-white drop-shadow-lg sm:text-5xl md:text-6xl"
          >
            Impulsa tu empresa con nuestros servicios
          </motion.h1>

          <motion.p
            initial={false}
            animate={{
              opacity: heroVisible ? 1 : 0,
              y: heroVisible ? 0 : 24,
            }}
            transition={{
              duration: 0.8,
              delay: heroVisible ? 0.12 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-[92%] text-sm leading-6 text-white/85 sm:mt-6 sm:max-w-xl sm:text-lg"
          >
            Staff augmentation, headhunting y desarrollo de software a medida.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Transformamos tu empresa con oportunidades exponenciales.
          </motion.p>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-float text-white/60 sm:bottom-8">
          <span className="text-xl sm:text-2xl">↓</span>
        </div>
      </section>

      <AnimatedSection id="servicios" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-[var(--navy-dark)] sm:text-4xl">
            Qué hacemos por ti
          </h2>
          <span className="title-accent-line" aria-hidden />
          <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-sm leading-6 text-[var(--navy-dark)]/80 sm:text-base">
            Soluciones de software pensadas para escalar y adaptarse a tu
            negocio.
          </p>

          <ul
            className="stagger-children mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
            role="list"
          >
            {[
              {
                title: "Staff Augmentation",
                description:
                  "Integramos talento especializado a tu equipo para potenciar y acelerar tus proyectos.",
                icon: "◇",
              },
              {
                title: "Headhunting",
                description:
                  "Encontramos el perfil ideal para tu empresa con un proceso ágil y enfocado en calidad.",
                icon: "▣",
              },
              {
                title: "Software a medida",
                description:
                  "Diseñamos y desarrollamos soluciones digitales a medida, pensadas para escalar y adaptarse a tu negocio.",
                icon: "◆",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="card-trust stagger-child rounded-2xl border border-[var(--navy-dark)]/10 bg-white/80 p-5 shadow-sm sm:p-8"
              >
                <span className="card-icon block text-2xl text-[var(--blue-bright)]">
                  {item.icon}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--navy-dark)] sm:mt-4 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--navy-dark)]/75 sm:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="identidad"
        className="bg-[var(--navy-deep)] px-4 py-16 text-white sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-4xl">
            Nuestra identidad
          </h2>
          <span className="title-accent-line dark" aria-hidden />
          <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-sm leading-6 text-white/80 sm:text-base">
            Se construye sobre un propósito claro, una misión definida y valores
            sólidos que guían cada decisión y forma de trabajar.
          </p>

          <div className="stagger-children mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {[
              {
                label: "Propósito",
                desc: "Impulsar el crecimiento de tu empresa a través del talento y la tecnología, acompañando cada etapa con soluciones estratégicas que generan valor sostenible.",
                img: "/target.png",
              },
              {
                label: "Misión",
                desc: "Acompañar a nuestros clientes con soluciones digitales y talento especializado, generando valor estratégico y sostenible en cada proyecto y servicio.",
                img: "/binoculars.png",
              },
              {
                label: "Valores",
                desc: "Innovación, compromiso, integridad, adaptabilidad y desarrollo humano como base para construir soluciones sólidas y relaciones de confianza.",
                img: "/valores.png",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="stagger-child flex min-h-[320px] flex-col rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10 sm:min-h-[360px] sm:p-6"
              >
                <div className="mb-5 flex h-[140px] items-center justify-center sm:mb-6 sm:h-[180px]">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={110}
                    height={110}
                    className="h-[84px] w-[84px] object-contain sm:h-[110px] sm:w-[110px]"
                    priority
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-base font-semibold text-[var(--blue-pastel-soft)] sm:text-lg">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="clients"
        className="bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-28"
      >
        <ClientsCarousel />
      </AnimatedSection>

      <AnimatedSection id="contacto" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[var(--blue-pastel-soft)]/80 p-6 text-center shadow-inner sm:p-12 md:p-16">
          <h2 className="text-xl font-bold text-[var(--navy-dark)] sm:text-3xl">
            ¿Listo para llevar tu idea al siguiente nivel?
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--navy-dark)]/80 sm:text-base">
            Cuéntanos tu proyecto y te respondemos con una propuesta a medida.
          </p>
          <a
            href="mailto:hola@4bytesolutions.com"
            className="cta-glow btn-trust mt-6 inline-block break-all rounded-full bg-[var(--blue-bright)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--blue-accent)] sm:mt-8 sm:px-10 sm:py-4 sm:text-base"
          >
            hola@4bytesolutions.com
          </a>
        </div>
      </AnimatedSection>
=======
import UsSection from "./components/us";
import ServicesSection from "./components/services";
import IdentitySection from "./components/identity";
import ClientsSection from "./components/clients";
import ContactSection from "./components/contact";

type HomeProps = {
  visible: boolean;
};

export default function Home({ visible }: HomeProps) {
  return (
    <>
      <UsSection visible={visible} />

      <ServicesSection />

      <IdentitySection />

      <ClientsSection />

      <ContactSection />
>>>>>>> f6103e0 (feat agregar init)
    </>
  );
}