// src/pages/Seguro.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import productData from "../data/productData";

export default function Seguro() {
  const { name } = useParams();
  const data = productData[name];
  if (!data) {
    return (
      <main className="container mx-auto p-4 mt-0 text-center">
        <Helmet>
          <title>Seguro no encontrado</title>
        </Helmet>
        <h1 className="text-2xl font-semibold mb-4">Seguro no encontrado</h1>
        <p className="mb-6">El seguro que buscas no existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Volver al inicio
        </Link>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hola Elidio, me interesa el ${data.title} y te contacto a través de la web.`,
  );
  const whatsappLink = `https://wa.me/34658945741?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>{data.title} - Asegura2K25</title>
        <meta name="description" content={data.description} />
      </Helmet>

      {/* Header + descripción con fondo gris, padding vertical reducido */}
      <section className="bg-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-4">
            <img src={data.icon} alt={data.title} className="h-20 mb-2" />
            <h1 className="text-2xl font-bold mb-1">{data.title}</h1>
            <Link to="/" className="text-blue-600 hover:underline mb-2">
              ← Volver al inicio
            </Link>
          </div>
          <div className="group max-w-3xl mx-auto bg-white border border-slate-200 shadow-sm rounded-2xl p-6 mb-2 transition hover:shadow-md hover:-translate-y-1">
            <p className="text-center text-lg font-semibold text-slate-900 mb-0">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Info y CTA con padding vertical reducido */}
      <section className="bg-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm p-6 transition hover:shadow-md hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-4">¿Qué cubre?</h2>
              <ul className="list-disc list-inside space-y-2">
                {data.coverages.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm p-6 transition hover:shadow-md hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-4">
                ¿Qué necesitamos para prepararte un presupuesto?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {data.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Botones de contacto */}
          <div className="text-center mb-8">
            <p className="mb-4">
              Puedes enviarnos los datos por WhatsApp o por email
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-6 py-3 rounded-xl inline-flex items-center justify-center transition"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6 w-6 mr-2"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M380.9 97.1C339-3.9 236.4-29.4 147.7 16.5 78.2 51.2 33.6 123 32.1 203.5c-.9 50.1 18.1 99.6 53.1 137.4L32 480l141.8-51.5c28.5 7.8 57.5 11.3 86 10.1 80.3-3.2 155.5-58.6 181.1-137.1 28-87.6-8.1-184.5-60-204.4zM243.7 391c-25.2 1-50.1-3-73.8-11.7l-11.5-3.9-84.1 30.5 30.6-82.1-7.5-11c-33.1-39.1-48.1-89.6-41.8-139.7 8.4-66.6 56.6-121 121.3-136.6 85.9-20.5 172.9 38.3 186.5 122.9 11.6 71.7-35.9 139.7-103.1 153.4-15.5 3.1-30.6 4.7-45.2 4.8zm67.1-87.5c-7.7-3.8-45.6-22.5-52.7-25.1-7.1-2.6-12.2-3.8-17.3 3.8-5.1 7.7-19.9 25.1-24.4 30.2-4.5 5.1-8.9 5.7-16.6 1.9-46.9-23.4-77.7-74.8-80.2-78.2-2.6-3.4-1.6-7.8 1.2-10.7 2.4-2.5 5.1-5.7 7.7-8.6 2.6-2.9 3.4-4.9 5.1-8.3 1.7-3.4.9-6.4-.4-9.1-1.2-2.6-11.1-26.7-15.2-36.6-4.1-9.9-8.3-8.5-11.4-8.6-2.9-.1-6.4-.1-9.8-.1s-9.1 1.3-13.8 6.5c-4.7 5.1-18.1 17.7-18.1 43.2s18.5 50.1 21.1 53.5c2.6 3.4 36.4 55.8 88.2 78.3 51.8 22.5 51.8 15.1 61.1 14.2 9.4-.9 30.6-12.5 35-24.6 4.4-12.1 4.4-22.5 3-24.6-1.3-2.1-7-3.5-14.7-7.3z"/>
              </svg>
                WhatsApp
              </a>

              <a
                href="mailto:contacto@asegura2k25.com"
                className="bg-sky-600 hover:bg-sky-700 text-white font-medium text-lg px-6 py-3 rounded-xl inline-flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
