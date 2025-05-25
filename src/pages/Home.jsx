import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Home() {
  const products = [
    'coche', 'hogar', 'vida', 'salud', 'alquiler',
    'empresas', 'rc', 'accidentes', 'mascotas',
    'cabeza-tractora', 'transporte-mercancias', 'agroseguro',
    'comunidades', 'decesos', 'taxi', 'moto', 'patinete',
    'instrumentos-musicales'
  ]

  return (
    <>
      <Helmet>
        <title>Asegura2K25 - Seguros a tu medida</title>
        <meta
          name="description"
          content="Encuentra el seguro que necesitas en Asegura2K25: coche, hogar, salud, mascotas, empresas y más."
        />
      </Helmet>

      <main className="container mx-auto p-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Encuentra el seguro que necesitas
        </h2>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((slug) => (
            <Link
              key={slug}
              to={`/seguro/${slug}`}
              className="block bg-white border border-gray-300 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={`/logos/${slug}.png`}
                alt={slug}
                className="h-24 w-auto"
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}
