// src/pages/PoliticaCookies.jsx
import React from "react";

const cookies = [
  { nombre: "_ga",      tipo: "Analítica", finalidad: "Diferenciar usuarios",     retencion: "2 años", proveedor: "Google Analytics" },
  { nombre: "_gid",     tipo: "Analítica", finalidad: "Registrar visitas únicas", retencion: "24 h",   proveedor: "Google Analytics" },
  { nombre: "session",  tipo: "Esencial",  finalidad: "Mantener sesión activa",   retencion: "Sesión", proveedor: "Asegura2K25" },
  { nombre: "user_pref",tipo: "Funcional", finalidad: "Guardar preferencias",     retencion: "6 meses",proveedor: "Asegura2K25" },
];

export default function PoliticaCookies() {
  return (
    /* 👇  Mismo azul que el header, sin centrado vertical excesivo */
    <section className="pt-6 pb-12 bg-[#0d2c7a]">
      {/* Bloque blanco centrado horizontalmente y con sombra */}
      <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Política de Cookies</h1>

        {/* Scroll horizontal si hace falta */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="px-4 py-2 font-semibold">Nombre</th>
                <th className="px-4 py-2 font-semibold">Tipo</th>
                <th className="px-4 py-2 font-semibold">Finalidad</th>
                <th className="px-4 py-2 font-semibold">Retención</th>
                <th className="px-4 py-2 font-semibold">Proveedor</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.nombre} className="odd:bg-gray-50">
                  <td className="px-4 py-2">{c.nombre}</td>
                  <td className="px-4 py-2">{c.tipo}</td>
                  <td className="px-4 py-2">{c.finalidad}</td>
                  <td className="px-4 py-2">{c.retencion}</td>
                  <td className="px-4 py-2">{c.proveedor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold">¿Cómo gestionar?</h2>
        <p>
          Puedes configurar o desactivar estas cookies en cualquier momento haciendo clic
          en el icono de cookies situado en la esquina inferior derecha de la pantalla.
        </p>

        <a href="/" className="text-blue-600 hover:underline text-center block">
          ← Volver a la web
        </a>
      </div>
    </section>
  );
}
