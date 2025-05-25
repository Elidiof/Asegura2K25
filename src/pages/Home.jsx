// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

export default function Home() {
  const products = [ /* ... */ ]
  const companies = [ /* ... */ ]

  // Partimos en dos filas
  const mitad = Math.ceil(companies.length / 2)
  const rows = [
    companies.slice(0, mitad),
    companies.slice(mitad)
  ]

  return (
    <>
      {/* …helmet y grid de productos idem… */}

      {/* Carrusel de compañías */}
      <section className="mb-10 space-y-4">
        <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl mb-4">
          Compañías aseguradoras con las que colaboramos
        </h2>

        {rows.map((row, idx) => (
          <Marquee
            key={idx}
            gradient={false}
            speed={50}
            pauseOnHover
            className="overflow-hidden"
          >
            <div className="flex items-center whitespace-nowrap space-x-3">
              {row.map((key) => (
                <img
                  key={key}
                  src={`/logos/${key}.svg`}
                  alt={key.replace(/-/g, ' ')}
                  className="h-12 flex-shrink-0"
                />
              ))}
            </div>
          </Marquee>
        ))}
      </section>
    </>
  )
}
