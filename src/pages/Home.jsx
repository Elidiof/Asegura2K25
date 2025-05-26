// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

export default function Home() {
  const products = [
    'coche','hogar','vida','salud','alquiler',
    'empresas','rc','accidentes','mascotas',
    'cabeza-tractora','transporte-mercancias','agroseguro',
    'comunidades','decesos','taxi','moto','patinete',
    'instrumentos-musicales'
  ]

  // Lista original de compañías
  const companies = ['reale','generali','allianz','axa',
                     'race','asisa','dkv','helvetia','pelayo',
                     'aegon','fiatc','hiscox','zurich',
                     'adeslas','catalana-occidente',
                     'mutuamadrilena','mapfre','santalucia']
  // Partimos en dos filas
  const mitad = Math.ceil(companies.length / 2)
  const rows = [
    companies.slice(0, mitad),
    companies.slice(mitad)
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
        {/* Título */}
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Encuentra el seguro que necesitas
        </h2>

        {/* Grid de productos */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
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

        {/* Carrusel de compañías */}
        <section className="mb-10 space-y-4">
          <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover>
                {row.concat(row).map((key, i) => (
                  <img
                    key={`${key}-${i}`}
                    src={`/logos/${key}.svg`}
                    alt={`Logo de ${key.replace(/-/g, ' ')}`}
                    className="inline-block h-10 sm:h-12 mx-2 sm:mx-[0.5cm]"
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
