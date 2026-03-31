"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo/logo";
import { LogoEnum } from "../../constants/logo.constants";

const navItems = [
  { label: "Inicio", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#identidad" },
  { label: "Clientes", href: "#clients" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#nosotros");

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="rounded focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <Logo type={LogoEnum.white} />
        </Link>

        <ul className="flex items-center gap-10 text-sm font-medium text-white/90">
          {navItems.map((item) => {
            const isActive = activeLink === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.href)}
                  className={`relative inline-flex items-center pb-2 transition duration-300 ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-1/2 bottom-0 h-[1.5px] w-8 -translate-x-1/2 rounded-full bg-white" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}