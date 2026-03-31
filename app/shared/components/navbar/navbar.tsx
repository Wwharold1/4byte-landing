import Link from "next/link";
import { Logo } from "../logo/logo";
import { LogoEnum } from "../../constants/logo.constants";


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[var(--navy-deep)]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
            <Logo type={LogoEnum.white}/>
          </Link>
          <ul className="flex items-center gap-8 text-sm font-medium text-white/90">
            <li>
              <a href="#servicios" className="link-underline transition hover:text-white">Servicios</a>
            </li>
            <li>
              <a href="#nosotros" className="link-underline transition hover:text-white">Nosotros</a>
            </li>
            <li>
              <a href="#contacto" className="btn-trust rounded-full bg-[var(--blue-bright)] px-5 py-2.5 text-white hover:bg-[var(--blue-accent)]">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
}