// src/components/InfoCard.jsx
import React from "react";

/**
 * Tarjeta informativa genérica para listas con hover lift.
 * Props:
 * - title: título de la sección (string)
 * - items: array de strings a listar
 */
export default function InfoCard({ title, items }) {
  return (
    <div
      className="group rounded-2xl border border-slate-200 bg-white p-6
                    shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <ul className="list-inside list-disc space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
