import { AnimatedSection } from "@/app/shared/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("Services");
  const services = [
    {
      title: t("staff.title"),
      description: t("staff.description"),
      icon: "◇",
    },
    {
      title: t("headhunting.title"),
      description: t("headhunting.description"),
      icon: "▣",
    },
    {
      title: t("software.title"),
      description: t("software.description"),
      icon: "◆",
    },
  ];

  return (
    <AnimatedSection id="servicios" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-[var(--navy-dark)] sm:text-4xl">
          {t('title')}
        </h2>

        <span className="title-accent-line" aria-hidden />

        <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-sm leading-6 text-[var(--navy-dark)]/80 sm:text-base">
          {t('sub-title')}
        </p>

        <ul
          className="stagger-children mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          role="list"
        >
          {services.map((item) => (
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
  );
}