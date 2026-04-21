import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Mis XV - Regina Sarahi",
  description: "Estás cordialmente invitado a mis XV años",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${greatVibes.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}