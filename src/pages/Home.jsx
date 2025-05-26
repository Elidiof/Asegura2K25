import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

export default function Home() {
  /* ─────────────────────────────────────────
     Listado de productos que mostramos en la
     cuadrícula principal
  ────────────────────────────────────────── */
  const products = [
    'coche', 'hogar', 'vida', 'salud', 'alquiler',
    'empresa', 'rc', 'accidentes', 'mascotas',
    'cabeza-tractora', 'transporte-mercancias', 'agroseguro',
    'comunidades', 'decesos', 'taxi', 'moto', 'patinete',
    'instrumentos-musicales'
  ]

  /* ─────────────────────────────────────────
     Compañías aseguradoras que animamos en
     el carrusel inferior
  ────────────────────────────────────────── */
  const companies = [
    'mapfre', 'reale', 'generali', 'allianz',
    'axa', 'asisa', 'dkv', 'helvetia',
    'pelayo', 'aegon', 'fiatc', 'hiscox', 'zurich',
    'adeslas', 'catalana-occidente', 'mutuamadrilena',
    'santalucia', 'qualitas', 'race'
  ]

  /* ─────────────────────────────────────────
     Convierte un slug (“cabeza-tractora”) en
     un título legible (“Cabeza Tractora”)
  ────────────────────────────────────────── */
  const formatTitle = slug =>
    slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())

  /* ─────────────────────────────────────────
     Partimos el array de compañías en dos
     filas para que sea más compacto
  ────────────────────────────────────────── */
  const mitad = Math.ceil(companies.length / 2)
  const rows = [
    companies.slice(0, mitad),
    companies.slice(mitad)
  ]

  return (
    <>
      <Helmet>
        <title>Asegura2K25 – Seguros a tu medida</title>
        <meta
          name="description"
          content="Encuentra el seguro que necesitas en Asegura2K25: coche, hogar, salud, mascotas, empresas y más."
        />
      </Helmet>

      <main className="container mx-auto p-4">
        {/* --------- Título principal --------- */}
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Encuentra el seguro que necesitas
        </h2>

        {/* --------- Cuadrícula de productos --------- */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {products.map(slug => (
            <Link
              key={slug}
              to={`/seguro/${slug}`}
              className="block bg-white border border-gray-300 rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              {/* Icono */}
              <img
                src={`/logos/${slug}.png`}
                alt={formatTitle(slug)}
                className="h-20 w-auto"
              />
              {/* Título debajo del icono */}
              <span className="mt-3 text-sm sm:text-base font-medium text-gray-700 text-center">
                {formatTitle(slug)}
              </span>
            </Link>
          ))}
        </section>

{/* --------- Carrusel de compañías --------- */}
<section className="mb-10 space-y-4">
  <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl mb-4">
    Compañías aseguradoras con las que colaboramos
  </h2>

  {rows.map((row, idx) => (
    <div key={idx} className="overflow-hidden">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {[...row, ...row].map((key, i) => {
          const file = key === 'qualitas'
            ? 'qualitas-auto.webp'   // ⭐ aquí enganchamos tu logo
            : `${key}.svg`

          return (
            <img
              key={`${key}-${i}`}
              src={`/logos/${file}`}
              alt={key.replace(/-/g, ' ')}
              className="inline-block h-12 mx-3 flex-shrink-0"
            />
          )
        })}
      </Marquee>
    </div>
  ))}
</section>

      </main>
    </>
  )
}
