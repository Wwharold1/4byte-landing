import { AnimatedSection } from "@/app/shared/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");
  return (
    <AnimatedSection id="contacto" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-[var(--blue-pastel-soft)]/80 p-6 text-center shadow-inner sm:p-12 md:p-16">
        <h2 className="text-xl font-bold text-[var(--navy-dark)] sm:text-3xl">
          {t('title')}
        </h2>

        <p className="mt-4 text-sm leading-6 text-[var(--navy-dark)]/80 sm:text-base">
          {t('sub-title')}
        </p>

        <a
          href="mailto:hola@4bytesolutions.com"
          className="cta-glow btn-trust mt-6 inline-block break-all rounded-full bg-[var(--blue-bright)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--blue-accent)] sm:mt-8 sm:px-10 sm:py-4 sm:text-base"
        >
          {t('button')}
        </a>
      </div>
    </AnimatedSection>
  );
}