import { Logo } from "../logo/logo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t border-[var(--navy-dark)]/10 bg-[var(--navy-dark)]/5 py-12 px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-[var(--navy-dark)]/70">
        © {new Date().getFullYear()} 4BYTE. {t('title')}
        </p>
        <ul className="flex gap-6 text-sm font-medium text-[var(--navy-dark)]">
        </ul>
    </div>
    </footer>
  );
}