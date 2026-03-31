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
  metadataBase: new URL("https://4bytesolutions.com"),
  title: {
    default: "4BYTE SOLUTIONS | Desarrollo de Software a Medida",
    template: "%s | 4BYTE SOLUTIONS",
  },
  description:
    "Empresa de desarrollo de software. Creamos soluciones digitales a medida: aplicaciones web, móviles y sistemas que impulsan tu negocio.",
  keywords: [
    "desarrollo de software",
    "aplicaciones web",
    "software a medida",
    "4byte solutions",
    "tecnología",
  ],
  authors: [{ name: "4BYTE SOLUTIONS" }],
  creator: "4BYTE SOLUTIONS",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "4BYTE SOLUTIONS",
    title: "4BYTE SOLUTIONS | Desarrollo de Software a Medida",
    description:
      "Soluciones digitales a medida: aplicaciones web, móviles y sistemas que impulsan tu negocio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "4BYTE SOLUTIONS | Desarrollo de Software",
    description: "Desarrollo de software a medida para tu empresa.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
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
