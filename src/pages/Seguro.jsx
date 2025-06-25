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
                  viewBox="0 0 24 24"
                  className="h-6 w-6 mr-2 fill-current"
                  aria-label="WhatsApp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.768.966-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.223-.242-.563-.487-.487-.669-.497-.173-.006-.372-.007-.57-.007-.198 0-.52.074-.793.372s-1.04 1.017-1.04 2.479 1.064 2.876 1.213 3.074c.148.198 2.096 3.2 5.076 4.487.709.306 1.262.49 1.694.627.712.226 1.362.194 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.075-.123-.272-.198-.57-.347m-5.421 5.032h-.002a8.956 8.956 0 01-4.526-1.225l-.323-.19-3.362.88.896-3.273-.211-.335a8.958 8.958 0 01-1.37-4.787c.001-4.97 4.042-9.013 9.018-9.013 2.406 0 4.667.937 6.384 2.643a8.926 8.926 0 012.637 6.373c-.003 4.97-4.044 9.013-9.015 9.013m0-19.13C6.477.284.868 5.893.865 12.899c0 2.269.594 4.45 1.72 6.363L0 24l4.856-1.274a11.242 11.242 0 005.675 1.515h.005c6.006 0 10.924-4.877 10.927-10.882.003-2.905-1.128-5.643-3.175-7.688A10.877 10.877 0 0011.97.284" />
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
