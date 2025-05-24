// src/pages/Seguro.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export default function Seguro() {
  const { name } = useParams()
  const nombre = name.replace(/-/g, ' ')
  const titulo = nombre.charAt(0).toUpperCase() + nombre.slice(1)

  return (
    <>
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

      {/* ...resto del componente... */}
    </>
  )
}
