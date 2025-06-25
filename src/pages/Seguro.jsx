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
  viewBox="0 0 32 32"
  className="h-6 w-6 mr-2"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M16 0C7.164 0 0 7.164 0 16c0 2.822.74 5.456 2.024 7.764L0 32l8.462-2.215A15.899 15.899 0 0016 32c8.837 0 16-7.164 16-16S24.837 0 16 0zm0 29.333c-2.634 0-5.096-.705-7.217-1.931l-.513-.307-5.025 1.316 1.336-4.882-.326-.541a13.235 13.235 0 01-2.04-7.05c0-7.34 5.96-13.333 13.328-13.333C23.373 2.605 29.333 8.597 29.333 16S23.373 29.333 16 29.333zM24.177 19.01c-.306-.153-1.792-.891-2.072-.995-.279-.103-.48-.154-.681.153-.202.307-.787 1-0.965 1.205-.178.204-.356.23-.661.076-.307-.153-1.3-.48-2.475-1.53-1.094-.978-1.837-2.189-2.052-2.532-.215-.343-.024-.528.145-.699.148-.147.33-.384.495-.576.165-.192.218-.33.33-.55.11-.22.056-.413-.028-.578-.084-.165-.744-1.78-1.02-2.453-.27-.622-.543-.538-.744-.548-.192-.007-.413-.008-.634-.008s-.576.08-.879.403c-.304.323-1.15 1.125-1.15 2.747 0 1.622 1.177 3.177 1.341 3.386.165.208 2.316 3.535 5.615 4.957.786.34 1.4.544 1.878.698.79.25 1.51.215 2.08.132.635-.094 1.953-.796 2.23-1.566.276-.77.276-1.432.192-1.566-.084-.134-.308-.215-.647-.377z"/>
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
