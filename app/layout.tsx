import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";


const Jakarta = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
  style:  ["normal","italic"],
})

export const metadata: Metadata = {
  title: "Vor coffee",
  description: "Vor coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${Jakarta.className} ${notoSerif.variable} antialiased font-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
