// src/pages/Seguro.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// ... (mantén tu objeto productData arriba sin cambios)

export default function Seguro () {
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

  /** mensaje personalizado para WhatsApp **/
  const whatsappMessage = encodeURIComponent(
    `Hola Elidio, te contacto a través de la web y quiero información sobre el seguro de ${data.title}.`
  )
  const whatsappLink = `https://wa.me/34658945741?text=${whatsappMessage}`

  return (
    <>
      <Helmet>
        <title>{data.title} - Asegura2K25</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <main className="container mx-auto p-4 mt-0">
        {/* Icono y título */}
        <div className="flex flex-col items-center mb-6">
          <img src={data.icon} alt={data.title} className="h-20 mb-2" />
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <Link to="/" className="mt-2 text-blue-600 hover:underline">← Volver al inicio</Link>
        </div>

        {/* Descripción */}
        <p className="text-center text-gray-700 mb-8">{data.description}</p>

        {/* Coberturas */}
        <div className="max-w-2xl mx-auto mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">¿Qué cubre?</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.coverages.map((cov, i) => (<li key={i}>{cov}</li>))}
          </ul>
        </div>

        {/* Requisitos */}
        <div className="max-w-2xl mx-auto mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">¿Qué necesitamos para prepararte un presupuesto?</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.requirements.map((req, i) => (<li key={i}>{req}</li>))}
          </ul>
        </div>

        {/* CTA WhatsApp / Email */}
        <div className="text-center">
          <p className="mb-4">Puedes enviarnos los datos por WhatsApp o por email</p>
          <div className="space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Enviar por WhatsApp
            </a>
            <a
              href="mailto:contacto@asegura2k25.com"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Enviar por Email
            </a>
          </div>
        </div>
      </main>
    </>
  )
}