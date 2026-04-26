import Link from "next/link";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold">Корзина</h1>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <p>В корзине пока нет позиций.</p>
        <Link href="/prices" className="mt-4 inline-flex rounded-full bg-sky-500 px-4 py-2 text-sm text-white">Выбрать абонемент</Link>
      </div>
    </div>
  );
}
