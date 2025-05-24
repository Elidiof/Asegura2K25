// src/pages/Seguro.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'             // ← Import añadido
import { useParams } from 'react-router-dom'

export default function Seguro() {
  const { name } = useParams()
  const nombre = name.replace(/-/g, ' ')
  const titulo = nombre.charAt(0).toUpperCase() + nombre.slice(1)

  return (
    <>
      {/* ——— Meta-etiquetas dinámicas ——— */}
      <Helmet>
        <title>Seguro de {titulo} en Andújar | Asegura2K25</title>
        <meta
          name="description"
          content={`Pide tu oferta de seguro de ${titulo} en Andújar (Jaén). Te asesoramos al mejor precio.`}
        />
        <link
          rel="canonical"
          href={`https://asegura2k25.netlify.app/seguro-${name}`}
        />
      </Helmet>

      <div className="px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-blue-900 mb-4">
          Detalles del seguro: <span className="capitalize">{name}</span>
        </h1>
        <p className="text-gray-700">
          Aquí iría la descripción y opciones de contratación para el seguro de <strong>{name}</strong>.
        </p>
      </div>
    </>
  )
}
