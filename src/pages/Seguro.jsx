import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

// Diccionario de productos (todas las claves en minúsculas, igual que el slug)
const productos = {
  'coche': { /* ... */ },
  'hogar': { /* ... */ },
  'salud': { /* ... */ },
  'agroseguro': {
    titulo: "Agroseguro",
    descripcion: "Asegura tus cultivos, plantaciones y ganado frente a los principales riesgos. Cobertura integral para explotaciones agrarias en Andújar, Jaén y toda España.",
    coberturas: [
      "Daños en cultivos por pedrisco, lluvia o sequía",
      "Cobertura por pérdida de producción o rendimiento",
      "Reposición de plantas o árboles dañados (según líneas)",
      "Seguro para ganado: accidentes, enfermedades y robo"
    ],
    imagen: "/logos/agroseguro.png"
  },
  // ...añade todos los productos igual que en Home.jsx...
}

const productoGenerico = name => ({
  titulo: name
    .split(' ')
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' '),
  descripcion: `Solicita tu seguro de ${name} en Andújar (Jaén). Trabajamos con las mejores compañías y te asesoramos gratis.`,
  coberturas: [
    "Coberturas adaptadas a tus necesidades",
    "Tramitación de siniestros",
    "Asistencia personalizada"
  ],
  imagen: `/logos/${name.replace(/ /g, '-').toLowerCase()}.png`
})

export default function Seguro() {
  const { name } = useParams()
  if (!name) {
    // Evita fallo si la ruta viene sin parámetro
    return <div className="text-center text-red-500 p-10">Producto no encontrado.</div>
  }

  // Siempre minúsculas y sin espacios extra
  const clave = name.trim().toLowerCase()
  const slug = clave.replace(/-/g, ' ')
  const producto = productos[clave] || productoGenerico(slug)
  const titulo = producto.titulo
  const url = `https://asegura2k25.netlify.app/seguro-${clave}`
  const ogImage = 'https://asegura2k25.netlify.app/og-image.jpg'

  return (
    <>
      <Helmet>
        <title>Seguro de {titulo} en Andújar | Asegura2K25</title>
        <meta name="description" content={producto.descripcion} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Seguro de ${titulo} en Andújar | Asegura2K25`} />
        <meta property="og:description" content={producto.descripcion} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Seguro de ${titulo} en Andújar | Asegura2K25`} />
        <meta name="twitter:description" content={producto.descripcion} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <div className="px-4 py-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={producto.imagen}
            alt={titulo}
            className="h-20 w-20 object-contain bg-white rounded-full border border-gray-300 shadow"
          />
          <h1 className="text-3xl font-bold text-blue-900">
            Seguro de {titulo}
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-4">{producto.descripcion}</p>

        <h2 className="text-xl font-semibold text-blue-900 mb-2">Coberturas destacadas</h2>
        <ul className="list-disc ml-8 mb-8 text-gray-800">
          {producto.coberturas.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <a
          href="https://wa.me/34658945741"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pide tu oferta personalizada por WhatsApp
        </a>
      </div>
    </>
  )
}
