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
          <div className="mb-4 flex flex-col items-center">
            <img src={data.icon} alt={data.title} className="mb-2 h-20" />
            <h1 className="mb-1 text-2xl font-bold">{data.title}</h1>
            <Link to="/" className="mb-2 text-blue-600 hover:underline">
              ← Volver al inicio
            </Link>
          </div>
          <div className="group mx-auto mb-2 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-0 text-center text-lg font-semibold text-slate-900">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Info y CTA con padding vertical reducido */}
      <section className="bg-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h2 className="mb-4 text-xl font-semibold">¿Qué cubre?</h2>
              <ul className="list-inside list-disc space-y-2">
                {data.coverages.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h2 className="mb-4 text-xl font-semibold">
                ¿Qué necesitamos para prepararte un presupuesto?
              </h2>
              <ul className="list-inside list-disc space-y-2">
                {data.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Botones de contacto */}
          <div className="mb-8 text-center">
            <p className="mb-4">
              Puedes enviarnos los datos por WhatsApp o por email
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-lg font-medium text-white transition hover:bg-green-600"
              >
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="mr-2 size-6"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.112 1.52 5.854L0 24l6.315-1.657A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.803 17.197c-.243.68-1.42 1.323-2.015 1.4-.513.07-1.165.1-1.88-.12-.438-.138-1-.323-1.714-.63-2.972-1.29-4.922-4.298-5.072-4.496-.15-.198-1.212-1.614-1.212-3.073 0-1.457.597-2.207 1.04-2.653.443-.447.968-.56 1.29-.56h.62c.205 0 .462-.03.719.553.28.665.887 2.014.964 2.163.076.149.126.326.025.523-.1.197-.15.322-.298.495-.149.172-.312.386-.446.52-.148.148-.303.309-.13.605.174.298.771 1.271 1.655 2.06 1.134 1.013 2.092 1.325 2.388 1.474.297.15.471.125.644-.073.175-.198.745-.867.943-1.164.198-.298.396-.248.669-.15.273.1 1.734.818 2.03.967.297.148.495.223.57.347.075.123.075.719-.173 1.413z"/>
</svg>

                WhatsApp
              </a>

              <a
                href="mailto:contacto@asegura2k25.com"
                className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-lg font-medium text-white transition hover:bg-sky-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 size-6"
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
