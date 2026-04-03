"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLang = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <div className="flex items-center gap-2 text-white text-sm">
      <button
        onClick={() => changeLang("es")}
        className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
          locale === "es"
            ? "bg-white/10 font-semibold"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        🇵🇪 ES
      </button>

      <span className="opacity-40">|</span>

      <button
        onClick={() => changeLang("en")}
        className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
          locale === "en"
            ? "bg-white/10 font-semibold"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}