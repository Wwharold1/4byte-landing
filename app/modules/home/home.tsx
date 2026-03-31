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
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
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
            className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl"
          >
            Impulsa tu empresa con nuestros servicios
            <br />
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
            className="mt-6 max-w-xl text-lg text-white/85"
          >
            Staff augmentation, headhunting y desarrollo de software a medida.<br />
            Transformamos tu empresa con oportunidades exponenciales.
          </motion.p>

          {/* <motion.div
            initial={false}
            animate={{
              opacity: heroVisible ? 1 : 0,
              y: heroVisible ? 0 : 24,
            }}
            transition={{
              duration: 0.8,
              delay: heroVisible ? 0.24 : 0,
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
          </motion.div> */}
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
          <ul
            className="stagger-children mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
                className="card-trust stagger-child rounded-2xl border border-[var(--navy-dark)]/10 bg-white/80 p-8 shadow-sm"
              >
                <span className="card-icon block text-2xl text-[var(--blue-bright)]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[var(--navy-dark)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[var(--navy-dark)]/75">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="identidad"
        className="bg-[var(--navy-deep)] py-24 px-6 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Nuestra identidad
          </h2>
          <span className="title-accent-line dark" aria-hidden />
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
            Se construye sobre un propósito claro, una misión definida y valores sólidos que guían cada decisión y forma de trabajar.
          </p>
          <div className="stagger-children mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                className="stagger-child flex min-h-[360px] flex-col rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <div className="mb-6 flex h-[180px] items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={110}
                    height={110}
                    className="h-[110px] w-[110px] object-contain"
                    priority
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold text-[var(--blue-pastel-soft)]">
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
        className="bg-white py-28 px-6 text-slate-900"
      >
        <ClientsCarousel />
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