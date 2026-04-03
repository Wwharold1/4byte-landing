import { AnimatedSection } from "@/app/shared/components/animations/AnimatedSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function IdentitySection() {
  const t = useTranslations("Identity");
  const identityItems = [
    {
      label: t("purpose.title"),
      desc: t("purpose.description"),
      img: "/target.png",
    },
    {
      label: t("mission.title"),
      desc: t("mission.description"),
      img: "/binoculars.png",
    },
    {
      label: t("values.title"),
      desc: t("values.description"),
      img: "/valores.png",
    },
  ];
  return (
    <AnimatedSection
      id="identidad"
      className="bg-[var(--navy-deep)] px-4 py-16 text-white sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold sm:text-4xl">
          {t('title')}
        </h2>

        <span className="title-accent-line dark" aria-hidden />

        <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-sm leading-6 text-white/80 sm:text-base">
          {t('sub-title')}
        </p>

        <div className="stagger-children mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {identityItems.map((item) => (
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
  );
}