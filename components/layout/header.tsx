"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const nav = [
  ["Направления", "/directions"],
  ["Цены", "/prices"],
  ["Расписание", "/schedule"],
  ["Контакты", "/contacts"],
  ["Личный кабинет", "/account"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    [
      "transition",
      isActive(href)
        ? "font-medium text-sky-600"
        : "text-slate-600 hover:text-sky-600",
    ].join(" ");

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="inline-flex min-w-0 items-center gap-2 text-slate-900"
          >
            <span className="inline-flex h-8 w-10 shrink-0 items-center justify-center">
              <Image
                src="/logo_black.png"
                alt="Логотип"
                width={48}
                height={48}
                className="rounded-full object-contain"
              />
            </span>

            <span className="flex flex-col leading-tight font-bold text-sm sm:text-base">
              <span>Центр Семейного</span>
              <span>Наставничества</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm md:flex">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={linkClass(href)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/login"
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
            >
              Войти
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            {isOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute inset-x-0 top-full border-b border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur md:hidden">
            <nav className="grid gap-2">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "rounded-xl px-3 py-2 transition",
                    isActive(href)
                      ? "bg-sky-50 font-medium text-sky-600"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="mt-1 rounded-xl bg-sky-500 px-3 py-2 text-center font-medium text-white transition hover:bg-sky-600"
              >
                Войти
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
