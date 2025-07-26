// src/pages/Seguro.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import productData from "../data/productData";
import ContactButtons from "../components/ContactButtons";

export default function Seguro() {
  const { name } = useParams();
  const data = productData[name];

  if (!data) {
    return (
      <main className="container mx-auto mt-0 p-4 text-center">
        <Helmet>
          <title>Seguro no encontrado</title>
        </Helmet>
        <h1 className="mb-4 text-2xl font-semibold">Seguro no encontrado</h1>
        <p className="mb-6">El seguro que buscas no existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-0 p-4">
      <Helmet>
        <title>{data.title} | Asegura2K25</title>
      </Helmet>
      <h1 className="mb-4 text-2xl font-semibold">{data.title}</h1>
      <p className="mb-6">{data.description}</p>
      <ContactButtons />
    </main>
  );
}
