import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-blue-900 px-4 text-white">
      <Helmet>
        <title>Página no encontrada | Asegura2K25</title>
      </Helmet>

      <div className="mx-auto max-w-xl pt-32 text-center">
        <h1 className="mb-4 text-3xl font-extrabold">Página no encontrada</h1>
        <p className="mb-6 text-base text-gray-200">
          La página que buscas no existe.
        </p>

        <Link
          to="/"
          className="text-sm font-medium text-blue-300 underline hover:text-blue-100"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
