// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'                   // ← Añadido para navegación SPA
import { Card, CardContent } from '../components/ui/Card'
import Marquee from 'react-fast-marquee'

export default function Home() {
  const products = [
    { name: 'coche', icon: '/logos/coche.png' },
    { name: 'Hogar', icon: '/logos/hogar.png' },
    { name: 'Vida', icon: '/logos/vida.png' },
    { name: 'Salud', icon: '/logos/salud.png' },
    { name: 'Alquiler', icon: '/logos/alquiler.png' },
    { name: 'Empresas', icon: '/logos/empresas.png' },
    { name: 'RC', icon: '/logos/rc.png' },
    { name: 'Accidentes', icon: '/logos/accidentes.png' },
    { name: 'Mascotas', icon: '/logos/mascotas.png' },
    { name: 'Cabeza tractora', icon: '/logos/cabeza-tractora.png' },
    { name: 'Transporte de mercancías', icon: '/logos/mercancias.png' },
    { name: 'Agroseguro', icon: '/logos/agroseguro.png' },
    { name: 'Comunidad', icon: '/logos/comunidades.png' },
    { name: 'Decesos', icon: '/logos/decesos.png' },
    { name: 'Taxi', icon: '/logos/taxi.png' },
    { name: 'Moto', icon: '/logos/moto.png' },
    { name: 'Patinete', icon: '/logos/patinete.png' },
    { name: 'Instrumentos', icon: '/logos/instrumentos.png' }
  ]

  const companias = [
    'mapfre', 'reale', 'generali', 'allianz', 'axa', 'asisa', 'dkv',
    'helvetia', 'zurich', 'adeslas', 'catalana-ocidente',
    'mutuamadrilena', 'santalucia', 'pelayo', 'aegon', 'hiscox'
  ]
  const mitad = Math.ceil(companias.length / 2)
  const rows = [companias.slice(0, mitad), companias.slice(mitad)]

  // Datos OG / Twitter
  const ogTitle = "Asegura2K25 – Seguros de coche, hogar, salud y más | Andújar"
  const ogDescription = "Cotiza tu seguro de coche, hogar, salud, vida y más en Andújar (Jaén). Asesoramiento personalizado al mejor precio. Contacta con Elidio Ferrer."
  const ogImage = "https://asegura2k25.netlify.app/og-image.jpg"
  const canonical = "https://asegura2k25.netlify.app/"

  return (
    <>
      {/* ——— Meta-etiquetas SEO, OG y Twitter ——— */}
      <Helmet>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-6">
        {/* Cabecera */}
        <header className="mb-8">
          <h1 className="text-blue-900 text-center font-bold text-2xl sm:text-4xl">
            Encuentra el seguro que necesitas
          </h1>
        </header>

        {/* Grid de productos */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 mb-12">
          {products.map(({ name, icon }) => {
            const slug = name
              .toLowerCase()
              .replace(/ /g, '-')
              .normalize('NFD')
              .replace(/[^a-z0-9-]/g, '')
            return (
              <Link key={name} to={`/seguro-${slug}`} className="block">
                <Card className="bg-gray-100 border border-black rounded-2xl p-3 sm:p-4 transition hover:shadow-lg">
                  <CardContent className="flex justify-center">
                    <img
                      src={icon}
                      alt={name}
                      className="mb-2 sm:mb-3 h-20 sm:h-24 w-auto"
                    />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </section>

        {/* Marquee de compañías */}
        <section className="mb-10 space-y-4">
          <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>
          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover>
                {row.map((key) => (
                  <img
                    key={key}
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
