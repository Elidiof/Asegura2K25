import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-blue-900 text-white text-center px-4">
      <Helmet>
        <title>Página no encontrada | Asegura2K25</title>
      </Helmet>

      <img src="/logo.svg" alt="Asegura2K25" className="w-56 mb-6" />

      <h1 className="text-2xl font-bold mb-2">Página no encontrada</h1>
      <p className="text-sm mb-4 text-gray-200">
        La página que buscas no existe.
      </p>

      <Link
        to="/"
        className="text-blue-300 hover:text-blue-100 underline text-sm font-medium"
      >
        ← Volver al inicio
      </Link>
    </main>
  );
}
