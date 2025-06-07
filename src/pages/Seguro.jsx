// src/pages/Seguro.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import productData from '../data/productData'

export default function Seguro() {
  const { name } = useParams()
  const data = productData[name]
  if (!data) {
    return (
      <main className="container mx-auto p-4 mt-0 text-center">
        <Helmet><title>Seguro no encontrado</title></Helmet>
        <h1 className="text-2xl font-semibold mb-4">Seguro no encontrado</h1>
        <p className="mb-6">El seguro que buscas no existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
      </main>
    )
  }

  const whatsappMessage = encodeURIComponent(`Hola Elidio, me interesa el ${data.title} y te contacto a través de la web.`)
  const whatsappLink = `https://wa.me/34658945741?text=${whatsappMessage}`

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
            <Link to="/" className="text-blue-600 hover:underline mb-2">← Volver al inicio</Link>
          </div>
          <div className="group max-w-3xl mx-auto bg-white border border-slate-200 shadow-sm rounded-2xl p-6 mb-2 transition hover:shadow-md hover:-translate-y-1">
            <p className="text-center text-lg font-semibold text-slate-900 mb-0">{data.description}</p>
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
                {data.coverages.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm p-6 transition hover:shadow-md hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-4">¿Qué necesitamos para prepararte un presupuesto?</h2>
              <ul className="list-disc list-inside space-y-2">
                {data.requirements.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </div>

          {/* Botones de contacto */}
          <div className="text-center mb-8">
            <p className="mb-4">Puedes enviarnos los datos por WhatsApp o por email</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-6 py-3 rounded-xl inline-flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.371 0 0 5.371 0 12c0 2.121.553 4.113 1.605 5.906L0 24l6.332-1.643C8.21 23.444 10.086 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm6.555 17.048c-.272.765-1.592 1.504-2.243 1.6-.6.088-1.362.126-2.187-.139-.504-.155-1.157-.377-2.022-.84a11.566 11.566 0 01-3.894-3.682 4.477 4.477 0 01-.915-2.364c-.016-.436.12-.875.411-1.254.28-.37.656-.554 1.064-.508.44.051.961.228 1.535.525.52.27.819.468.965.561.243.156.407.29.537.443.17.196.247.337.317.491.093.204.023.414-.06.601-.084.189-.181.321-.337.503-.133.15-.275.297-.406.44-.137.152-.137.305-.05.45.088.146.347.595.746 1.054a9.209 9.209 0 002.058 1.824c.357.224.638.375.88.491.32.161.565.245.78.196.218-.049.667-.273.95-.537.242-.23.377-.347.532-.564.155-.217.225-.36.342-.599.103-.208.21-.364.31-.484.107-.128.195-.17.319-.132.126.04.791.373.926.439.139.067.232.102.267.157.034.054.034.346-.125.79z" />
                </svg>
                WhatsApp
              </a>

              <a
                href="mailto:contacto@asegura2k25.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-xl inline-flex items-center justify-center transition"
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
  )
}
