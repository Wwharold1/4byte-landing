import { Metadata } from "next";

export async function generateSeoMetadata(
  locale: string
): Promise<Metadata> {

  const isEs = locale === "es";

  return {
    metadataBase: new URL("https://4byte-solutions.com"),
    applicationName: "4BYTE",
    title: {
      default: isEs
        ? "4BYTE | Staff Augmentation, Headhunting y Software a Medida"
        : "4BYTE | Staff Augmentation, Headhunting and Custom Software",
      template: "%s | 4BYTE",
    },

    description: isEs
      ? "En 4BYTE conectamos empresas con talento TI especializado y desarrollamos software a medida."
      : "At 4BYTE, we connect companies with specialized IT talent and build custom software solutions.",

    keywords: isEs
      ? [
          "staff augmentation",
          "headhunting TI",
          "software a medida",
          "Perú",
        ]
      : [
          "staff augmentation",
          "IT recruitment",
          "custom software",
          "Peru",
        ],

    alternates: {
      canonical: isEs
        ? "https://4byte-solutions.com"
        : "https://4byte-solutions.com/en",

      languages: {
        es: "https://4byte-solutions.com",
        en: "https://4byte-solutions.com/en",
      },
    },

    openGraph: {
      type: "website",
      locale: isEs ? "es_PE" : "en_US",
      url: isEs
        ? "https://4byte-solutions.com"
        : "https://4byte-solutions.com/en",

      title: isEs
        ? "4BYTE | Software a Medida"
        : "4BYTE | Custom Software",

      description: isEs
        ? "Desarrollo de software a medida en Perú."
        : "Custom software development services.",

      images: [
        {
          url: "/4by-black.png",
          width: 1200,
          height: 630,
          alt: "4BYTE",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: isEs
        ? "4BYTE | Software a Medida"
        : "4BYTE | Custom Software",
      description: isEs
        ? "Talento TI y desarrollo de software."
        : "IT talent and software development.",
      images: ["/4by-black.png"],
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}