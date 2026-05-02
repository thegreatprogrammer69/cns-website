import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

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
      <body
        className="min-h-full bg-[#fffdf7] text-slate-900"
        style={{
          fontFamily:
            "Inter, Nunito, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
