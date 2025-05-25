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

  const companies = [
    'mapfre.svg','reale.svg','generali.svg','allianz.svg',
    'axa.svg','asisa.svg','dkv.svg','helvetia.svg',
    'pelayo.svg','aegon.svg','fiatc.svg','hiscox.svg','zurich.svg',
    'adeslas.svg','catalana-occidente.svg','mutuamadrilena.svg',
    'santalucia.svg','ocaso.svg','race.svg'
  ]

  // Duplicamos para scroll continuo
  const logosLoop = [...companies, ...companies]

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

        {/* Carrusel en dos filas idénticas */}
        <section className="space-y-4 bg-white py-8">
          <h2 className="text-center text-xl font-semibold mb-6 text-gray-700">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {/* Fila 1 */}
          <Marquee pauseOnHover speed={50} gradient={false} className="overflow-hidden">
            <div className="flex items-center space-x-3">
              {logosLoop.map((file, idx) => (
                <img
                  key={`row1-${idx}-${file}`}
                  src={`/logos/${file}`}
                  alt={file.replace('.svg','')}
                  className="h-12 flex-shrink-0"
                />
              ))}
            </div>
          </Marquee>

          {/* Fila 2 */}
          <Marquee pauseOnHover speed={50} gradient={false} className="overflow-hidden">
            <div className="flex items-center space-x-3">
              {logosLoop.map((file, idx) => (
                <img
                  key={`row2-${idx}-${file}`}
                  src={`/logos/${file}`}
                  alt={file.replace('.svg','')}
                  className="h-12 flex-shrink-0"
                />
              ))}
            </div>
          </Marquee>
        </section>
      </main>
    </>
  )
}
