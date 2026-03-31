import { Logo } from "../logo/logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--navy-dark)]/10 bg-[var(--navy-dark)]/5 py-12 px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-[var(--navy-dark)]/70">
        © {new Date().getFullYear()} 4BYTE SOLUTIONS. Todos los derechos reservados.
        </p>
        <ul className="flex gap-6 text-sm font-medium text-[var(--navy-dark)]">
        <li><a href="#servicios" className="hover:text-[var(--blue-bright)]">Servicios</a></li>
        <li><a href="#contacto" className="hover:text-[var(--blue-bright)]">Contacto</a></li>
        </ul>
    </div>
    </footer>
  );
}