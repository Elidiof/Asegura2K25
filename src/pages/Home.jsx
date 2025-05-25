import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'

export default function Home() {
  const products = [
    'coche', 'hogar', 'vida', 'salud', 'alquiler',
    'empresas', 'rc', 'accidentes', 'mascotas',
    'cabeza-tractora', 'transporte-mercancias', 'agroseguro',
    'comunidades', 'decesos', 'taxi', 'moto', 'patinete',
    'instrumentos-musicales'
  ]

  const companies = [
    'mapfre.svg',
    'reale.svg',
    'generali.svg',
    'allianz.svg',
    'axa.svg',
    'asisa.svg',
    'dkv.svg',
    'helvetia.svg',
    'pelayo.svg',
    'aegon.svg',
    'hiscox.svg',
    'zurich.svg',
    'adeslas.svg',
    'catalana-occidente.svg',
    'mutuamadrilena.svg',
    'santalucia.svg',
    'ocaso.svg',
    'race.svg'
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

        {/* Carousel de compañías */}
        <div className="mt-12">
          <h2 className="text-center text-xl font-semibold mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>
          <div className="flex overflow-x-auto items-center space-x-6 py-4">
            {companies.map((file) => (
              <img
                key={file}
                src={`/logos/${file}`}
                alt={file.replace('.svg','')}
                className="h-12 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
