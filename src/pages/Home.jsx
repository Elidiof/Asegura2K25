// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

export default function Home() {
  const products = [
    /* … tus productos … */
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

  // split en dos mitades
  const mitad = Math.ceil(companies.length / 2)
  const primeraFila = companies.slice(0, mitad)
  const segundaFila = companies.slice(mitad)

  return (
    <>
      <Helmet>
        <title>Asegura2K25 - Seguros a tu medida</title>
        <meta
          name="description"
          content="Encuentra el seguro que necesitas en Asegura2K25..."
        />
      </Helmet>

      <main className="container mx-auto p-4">
        {/* … grid de productos … */}

        {/* Carrusel animado en 2 filas */}
        <section className="mb-10 space-y-4">
          <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {/* Fila 1 */}
          <Marquee
            pauseOnHover
            speed={50}
            gradient={false}
            className="overflow-hidden"
          >
            {primeraFila.map((file) => (
              <img
                key={file}
                src={`/logos/${file}`}
                alt={file.replace('.svg', '')}
                className="h-12 mx-3 flex-shrink-0"
              />
            ))}
          </Marquee>

          {/* Fila 2, invertida para variedad */}
          <Marquee
            pauseOnHover
            speed={50}
            gradient={false}
            className="overflow-hidden"
            direction="right"
          >
            {segundaFila.map((file) => (
              <img
                key={file}
                src={`/logos/${file}`}
                alt={file.replace('.svg', '')}
                className="h-12 mx-3 flex-shrink-0"
              />
            ))}
          </Marquee>
        </section>
      </main>
    </>
  )
}
