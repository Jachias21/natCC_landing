import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natalia Chias Coughlan — Psicóloga Sanitaria y Sexóloga Clínica · Barcelona y Granollers",
  description:
    "Psicóloga sanitaria, terapeuta de pareja y sexóloga clínica en Barcelona, Granollers y online. Terapia individual, de pareja y sexología clínica. ES · CAT · EN.",
  keywords: [
    "psicóloga Barcelona",
    "psicóloga Granollers",
    "terapeuta de pareja",
    "sexóloga clínica",
    "terapia online",
    "ansiedad",
    "autoestima",
  ],
  openGraph: {
    title: "Natalia Chias Coughlan — Psicóloga Sanitaria",
    description: "Un espacio seguro para escucharte, comprenderte y avanzar.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
