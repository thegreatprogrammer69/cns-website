import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope/Manrope-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
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
    <html lang="ru" className="h-full antialiased">
      <body className={`${inter.variable} ${manrope.variable} min-h-full bg-[#fffdf7] text-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
