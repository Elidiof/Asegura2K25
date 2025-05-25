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

        {/* Carrusel estático extraído de asegura2k25.com */}
        <section className="bg-white py-8">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-semibold mb-6">
              Compañías aseguradoras con las que colaboramos
            </h2>
            <Marquee pauseOnHover speed={50} gradient={false} className="no-scrollbar">
              <div className="flex items-center space-x-4">
                <img src="/logos/mapfre.svg" alt="Mapfre" className="h-12" />
                <img src="/logos/reale.svg" alt="Reale" className="h-12" />
                <img src="/logos/generali.svg" alt="Generali" className="h-12" />
                <img src="/logos/allianz.svg" alt="Allianz" className="h-12" />
                <img src="/logos/axa.svg" alt="AXA" className="h-12" />
                <img src="/logos/asisa.svg" alt="Asisa" className="h-12" />
                <img src="/logos/dkv.svg" alt="DKV" className="h-12" />
                <img src="/logos/helvetia.svg" alt="Helvetia" className="h-12" />
                <img src="/logos/pelayo.svg" alt="Pelayo" className="h-12" />
                <img src="/logos/aegon.svg" alt="Aegon" className="h-12" />
                <img src="/logos/fiatc.svg" alt="Fiatc" className="h-12" />
                <img src="/logos/hiscox.svg" alt="Hiscox" className="h-12" />
                <img src="/logos/zurich.svg" alt="Zurich" className="h-12" />
                <img src="/logos/adeslas.svg" alt="Adeslas" className="h-12" />
                <img src="/logos/catalana-occidente.svg" alt="Catalana Occidente" className="h-12" />
                <img src="/logos/mutuamadrilena.svg" alt="Mutua Madrileña" className="h-12" />
                <img src="/logos/santalucia.svg" alt="Santalucía" className="h-12" />
                <img src="/logos/ocaso.svg" alt="Ocaso" className="h-12" />
                <img src="/logos/race.svg" alt="RACE" className="h-12" />
              </div>
            </Marquee>
          </div>
        </section>
      </main>
    </>
  )
}
