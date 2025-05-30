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
  const whatsappMessage = encodeURIComponent('Hola Elidio, me interesa el ' + data.title + ' y te contacto a través de la web.')
  const whatsappLink = 'https://wa.me/34658945741?text=' + whatsappMessage

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

          <div className="text-center mb-8">
            <p className="mb-4">Puedes enviarnos los datos por WhatsApp o por email</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Enviar por WhatsApp
              </a>
              <a
                href="mailto:contacto@asegura2k25.com"
                className="w-full sm:w-auto text-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Enviar por Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
