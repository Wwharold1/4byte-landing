import { Logo } from "../logo/logo";
<<<<<<< HEAD

export default function Footer() {
=======
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
>>>>>>> f6103e0 (feat agregar init)
  return (
    <footer className="border-t border-[var(--navy-dark)]/10 bg-[var(--navy-dark)]/5 py-12 px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-[var(--navy-dark)]/70">
<<<<<<< HEAD
        © {new Date().getFullYear()} 4BYTE SOLUTIONS. Todos los derechos reservados.
        </p>
        <ul className="flex gap-6 text-sm font-medium text-[var(--navy-dark)]">
        <li><a href="#servicios" className="hover:text-[var(--blue-bright)]">Servicios</a></li>
        <li><a href="#contacto" className="hover:text-[var(--blue-bright)]">Contacto</a></li>
=======
        © {new Date().getFullYear()} 4BYTE. {t('title')}
        </p>
        <ul className="flex gap-6 text-sm font-medium text-[var(--navy-dark)]">
>>>>>>> f6103e0 (feat agregar init)
        </ul>
    </div>
    </footer>
  );
}