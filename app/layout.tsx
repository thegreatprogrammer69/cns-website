import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Центр Семейного Наставничества",
    template: "%s | ЦСН",
  },
  description:
    "Детский развивающий центр: английский, дошколята, актёрское мастерство и робототехника.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`h-full antialiased ${inter.variable} ${manrope.variable}`}>
      <body className="min-h-full bg-[#fffdf7] text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
