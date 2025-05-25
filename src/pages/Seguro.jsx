import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

// Diccionario de productos
const productos = {
  coche: {
    titulo: "Coche",
    descripcion: "Tu seguro de coche al mejor precio en Andújar (Jaén). RC obligatoria, lunas, robo, incendio, asistencia 24h y más. Trabajamos con Mapfre, Reale, Allianz y las mejores.",
    coberturas: [
      "Responsabilidad civil obligatoria y voluntaria",
      "Defensa jurídica y reclamación de daños",
      "Robo, incendio y lunas",
      "Asistencia en viaje desde km 0",
      "Coche de sustitución (opcional)",
      "Daños propios y más"
    ],
    imagen: "/logos/coche.png"
  },
  hogar: {
    titulo: "Hogar",
    descripcion: "Protege tu vivienda ante cualquier imprevisto: incendio, robo, daños por agua y mucho más. Seguro de hogar personalizado para propietarios o inquilinos.",
    coberturas: [
      "Incendio, explosión y caída de rayo",
      "Robo y hurto en vivienda",
      "Daños por agua y fenómenos meteorológicos",
      "Responsabilidad civil familiar",
      "Asistencia 24h en el hogar"
    ],
    imagen: "/logos/hogar.png"
  },
  salud: {
    titulo: "Salud",
    descripcion: "Acceso rápido a especialistas, pruebas y hospitalización. Seguro de salud para particulares y autónomos. Asisa, Adeslas, DKV, AXA y más.",
    coberturas: [
      "Consultas y especialistas sin listas de espera",
      "Pruebas diagnósticas",
      "Hospitalización y cirugía",
      "Medicina general y pediatría",
      "Cobertura dental básica"
    ],
    imagen: "/logos/salud.png"
  },
  // ...añade más productos personalizados aquí...
}

// Fallback genérico si el producto no está personalizado
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
  const slug = name.replace(/-/g, ' ')
  const clave = name.replace(/-/g, '').toLowerCase()
  // Busca el producto, si no existe usa genérico
  const producto = productos[name.replace(/-/g, '').toLowerCase()] || productoGenerico(slug)
  const titulo = producto.titulo
  const url = `https://asegura2k25.netlify.app/seguro-${name}`
  const ogImage = 'https://asegura2k25.netlify.app/og-image.jpg'

  return (
    <>
      <Helmet>
        <title>Seguro de {titulo} en Andújar | Asegura2K25</title>
        <meta
          name="description"
          content={producto.descripcion}
        />
        <link rel="canonical" href={url} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Seguro de ${titulo} en Andújar | Asegura2K25`} />
        <meta property="og:description" content={producto.descripcion} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={url} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Seguro de ${titulo} en Andújar | Asegura2K25`} />
        <meta name="twitter:description" content={producto.descripcion} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <div className="px-4 py-8 max-w-4xl mx-auto">
        {/* Cabecera visual */}
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
