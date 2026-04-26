"use client";

import { useState } from "react";
import Link from "next/link";

export function AddToCartWithChild() {
  const [childId, setChildId] = useState("");
  const isAuthenticated = false;
  const children = [
    { id: "1", fullName: "Артём Иванов" },
    { id: "2", fullName: "Алиса Иванова" },
  ];

  if (!isAuthenticated) {
    return (
      <Link href="/login" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm text-white">
        Войти, чтобы добавить в корзину
      </Link>
    );
  }

  if (children.length === 0) {
    return (
      <Link href="/account/profile" className="inline-flex rounded-full bg-amber-400 px-4 py-2 text-sm text-slate-900">
        Добавить ребёнка
      </Link>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm text-slate-600">Для кого покупаем абонемент?</label>
      <select
        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
        value={childId}
        onChange={(e) => setChildId(e.target.value)}
      >
        <option value="">Выберите ребёнка</option>
        {children.map((child) => (
          <option key={child.id} value={child.id}>
            {child.fullName}
          </option>
        ))}
      </select>
      <button
        type="button"
        disabled={!childId}
        className="rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        Добавить в корзину
      </button>
    </div>
  );
}
