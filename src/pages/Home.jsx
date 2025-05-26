import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Header from '../components/Header'   // ← nuevo import

export default function Home() {
  /* ───────── listados ───────── */
  const products = [
    'coche', 'hogar', 'vida', 'salud', 'alquiler',
    'empresa', 'rc', 'accidentes', 'mascotas',
    'cabeza-tractora', 'transporte-mercancias', 'agroseguro',
    'comunidades', 'decesos', 'taxi', 'moto', 'patinete',
    'instrumentos-musicales',
  ]

  const companies = [
    'mapfre', 'reale', 'generali', 'allianz',
    'axa', 'asisa', 'dkv', 'helvetia',
    'pelayo', 'aegon', 'fiatc', 'hiscox', 'zurich',
    'adeslas', 'catalana-occidente', 'mutuamadrilena',
    'santalucia', 'ocaso', 'race',
  ]

  /* Convierte slug en título legible */
  const formatTitle = slug =>
    slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  /* Divide compañías en 2 filas para marquee */
  const mitad = Math.ceil(companies.length / 2)
  const rows = [companies.slice(0, mitad), companies.slice(mitad)]

  return (
    <>
      <Helmet>
        <title>Asegura2K25 – Seguros a tu medida</title>
        <meta
          name="description"
          content="Encuentra el seguro que necesitas en Asegura2K25: coche, hogar, salud, mascotas, empresas y más."
        />
      </Helmet>

      {/* ───────── cabecera fija + onda ───────── */}
      <Header />

      {/* ───────── contenido principal ───────── */}
      <main className="container mx-auto p-4 pt-24">
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Encuentra el seguro que necesitas
        </h2>

        {/* cuadrícula de productos */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {products.map(slug => (
            <Link
              key={slug}
              to={`/seguro/${slug}`}
              className="block bg-white/90 backdrop-blur border border-white/40
                         rounded-xl p-4 flex flex-col items-center
                         hover:shadow-2xl transition"
            >
              <img
                src={`/logos/${slug}.png`}
                alt={formatTitle(slug)}
                className="h-20 w-auto"
              />
              <span className="mt-3 text-sm sm:text-base font-medium text-gray-700 text-center">
                {formatTitle(slug)}
              </span>
            </Link>
          ))}
        </section>

        {/* carrusel de compañías */}
        <section className="mb-10 space-y-4">
          <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover>
                {[...row, ...row].map((key, i) => (
                  <img
                    key={`${key}-${i}`}
                    src={`/logos/${key}.svg`}
                    alt={key.replace(/-/g, ' ')}
                    className="inline-block h-12 mx-3 flex-shrink-0"
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
