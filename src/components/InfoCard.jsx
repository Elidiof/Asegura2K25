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
      className="group rounded-2xl bg-white border border-slate-200 shadow-sm
                    p-6 transition hover:shadow-md hover:-translate-y-1"
    >
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
