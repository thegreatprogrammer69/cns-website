import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты детского развивающего центра: адрес, телефон, карта и форма заявки.",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Контакты</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <p><strong>Kids Center</strong></p>
          <p>ИНН: 7700000000</p>
          <p>г. Москва, ул. Тёплая, 12</p>
          <p>+7 (999) 123-45-67</p>
          <p>hello@kids-center.ru</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-semibold">Карты и соцсети</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Яндекс Карта</li>
            <li>2ГИС</li>
            <li>VK / Telegram</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
