import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-blue-900 text-white px-4">
      <Helmet>
        <title>Página no encontrada | Asegura2K25</title>
      </Helmet>

      <div className="max-w-xl mx-auto pt-32 text-center">
        <h1 className="text-3xl font-extrabold mb-4">Página no encontrada</h1>
        <p className="text-base text-gray-200 mb-6">
          La página que buscas no existe.
        </p>

        <Link
          to="/"
          className="text-blue-300 hover:text-blue-100 underline text-sm font-medium"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
