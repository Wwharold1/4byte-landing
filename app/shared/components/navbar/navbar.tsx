"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo/logo";
import { LogoEnum } from "../../constants/logo.constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
<<<<<<< HEAD

const navItems = [
  { label: "Inicio", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#identidad" },
  { label: "Clientes", href: "#clients" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
=======
import LanguageSwitcher from "../switch-language/language-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Home.navbar");
>>>>>>> f6103e0 (feat agregar init)
  const [activeLink, setActiveLink] = useState("#nosotros");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

<<<<<<< HEAD
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
=======
  const navItems = [
    { label: t("home"), href: "#nosotros" },
    { label: t("services"), href: "#servicios" },
    { label: t("us"), href: "#identidad" },
    { label: t("clients"), href: "#clients" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
>>>>>>> f6103e0 (feat agregar init)
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="relative z-[60] rounded focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <Logo type={LogoEnum.white} />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeLink === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`relative inline-flex items-center pb-2 transition duration-300 ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[1.5px] w-8 -translate-x-1/2 rounded-full bg-white" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/15 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-[rgba(5,10,25,0.55)] backdrop-blur-md md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:hidden"
                initial={{ opacity: 0, y: -18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ul className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = activeLink === item.href;

                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => handleClick(item.href)}
                          className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "text-white/85 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </>
          )}
<<<<<<< HEAD
        </AnimatePresence>
=======
        </AnimatePresence>{/* LANGUAGE SWITCHER */}
       <div className="absolute left-1/2 -translate-x-[18%] scale-90 md:scale-100 md:static md:translate-x-0">
        <LanguageSwitcher />
      </div>
>>>>>>> f6103e0 (feat agregar init)
      </nav>
    </header>
  );
}