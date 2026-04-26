import Link from "next/link";

const sections = [
  ["Профиль", "/account/profile"],
  ["Мои заказы", "/account/orders"],
  ["Мои абонементы", "/account/subscriptions"],
] as const;

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold">Личный кабинет</h1>
      <div className="mt-6 grid gap-3">
        {sections.map(([label, href]) => (
          <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
