import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main className="container mx-auto p-4 text-center">
      <Helmet>
        <title>Página no encontrada | Asegura2K25</title>
      </Helmet>
      <h1 className="text-2xl font-semibold mb-4">Página no encontrada</h1>
      <p className="mb-6">La página que buscas no existe.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver al inicio
      </Link>
    </main>
  );
}
