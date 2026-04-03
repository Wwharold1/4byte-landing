<<<<<<< HEAD
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4byte-peru.com"),
  title: {
    default: "4BYTE SOLUTIONS | Staff Augmentation, Headhunting y Software a Medida",
    template: "%s | 4BYTE SOLUTIONS",
  },
  description:
    "En 4BYTE SOLUTIONS conectamos empresas con talento TI especializado y desarrollamos software a medida: aplicaciones web, móviles y sistemas diseñados para impulsar el crecimiento de tu negocio.",
  keywords: [
    "4BYTE SOLUTIONS",
    "4BYTE",
    "staff augmentation",
    "headhunting TI",
    "reclutamiento TI",
    "desarrollo de software",
    "software a medida",
    "aplicaciones web",
    "aplicaciones móviles",
    "sistemas empresariales",
    "talento tecnológico",
    "tecnología",
    "Perú",
  ],
  authors: [{ name: "4BYTE SOLUTIONS" }],
  creator: "4BYTE SOLUTIONS",
  publisher: "4BYTE SOLUTIONS",
  alternates: {
    canonical: "https://www.4byte-peru.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.4byte-peru.com",
    siteName: "4BYTE SOLUTIONS",
    title: "4BYTE SOLUTIONS | Staff Augmentation, Headhunting y Software a Medida",
    description:
      "Conectamos empresas con talento TI especializado y desarrollamos software a medida: aplicaciones web, móviles y sistemas para impulsar tu negocio.",
    images: [
      {
        url: "/4by-black.png",
        width: 1200,
        height: 630,
        alt: "4BYTE SOLUTIONS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4BYTE SOLUTIONS | Staff Augmentation, Headhunting y Software a Medida",
    description:
      "Talento TI especializado y desarrollo de software a medida para empresas que buscan crecer.",
    images: ["/4by-black.png"],
    creator: "@tuusuario", // quítalo si no tienes cuenta de X/Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
=======
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
>>>>>>> f6103e0 (feat agregar init)
