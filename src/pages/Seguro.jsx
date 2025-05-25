// src/pages/Seguro.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export default function Seguro() {
  const { name } = useParams()
  const nombre = name.replace(/-/g, ' ')
  const titulo = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  const url = `https://asegura2k25.netlify.app/seguro-${name}`
  const ogImage = 'https://asegura2k25.netlify.app/og-image.jpg'

  return (
    <>
      <Helmet>
        <title>Seguro de {titulo} en Andújar | Asegura2K25</title>
        <meta
          name="description"
          content={`Pide tu oferta de seguro de ${titulo} en Andújar (Jaén). Te asesoramos al mejor precio.`}
        />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Seguro de ${titulo} en Andújar | Asegura2K25`} />
        <meta property="og:description" content={`Pide tu oferta de seguro de ${titulo} en Andújar (Jaén). Te asesoramos al mejor precio.`} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={url} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Seguro de ${titulo} en Andújar | Asegura2K25`} />
        <meta name="twitter:description" content={`Pide tu oferta de seguro de ${titulo} en Andújar (Jaén). Te asesoramos al mejor precio.`} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <div className="px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-blue-900 mb-4">
          Detalles del seguro: <span className="capitalize">{nombre}</span>
        </h1>
        <p className="text-gray-700">
          Aquí iría la descripción y opciones de contratación para el seguro de <strong>{nombre}</strong>.
        </p>
      </div>
    </>
  )
}
