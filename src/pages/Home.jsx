// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'

export default function Home() {
  const products = [
    { slug: 'coche', icon: '/logos/coche-icon.png' },
    { slug: 'hogar', icon: '/logos/hogar-icon.png' },
    { slug: 'vida', icon: '/logos/vida-icon.png' },
    { slug: 'salud', icon: '/logos/salud-icon.png' },
    { slug: 'alquiler', icon: '/logos/alquiler-icon.png' },
    { slug: 'empresas', icon: '/logos/empresas-icon.png' },
    { slug: 'rc', icon: '/logos/rc-icon.png' },
    { slug: 'accidentes', icon: '/logos/accidentes-icon.png' },
    { slug: 'mascotas', icon: '/logos/mascotas-icon.png' },
    { slug: 'cabeza-tractora', icon: '/logos/cabeza-tractora-icon.png' },
    { slug: 'transporte-mercancias', icon: '/logos/transporte-mercancias-icon.png' },
    { slug: 'agroseguro', icon: '/logos/agroseguro-icon.png' },
    { slug: 'comunidades', icon: '/logos/comunidades-icon.png' },
    { slug: 'decesos', icon: '/logos/decesos-icon.png' },
    { slug: 'taxi', icon: '/logos/taxi-icon.png' },
    { slug: 'moto', icon: '/logos/moto-icon.png' },
    { slug: 'patinete', icon: '/logos/patinete-icon.png' },
    { slug: 'instrumentos-musicales', icon: '/logos/instrumentos-musicales-icon.png' }
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

      {/* NO deje ningún texto extra aquí */}

      <main className="container mx-auto p-4">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map(({ slug, icon }) => (
            <Link
              key={slug}
              to={`/seguro/${slug}`}
              className="h-32 flex items-center justify-center bg-white rounded-lg shadow hover:bg-gray-50 transition"
            >
              <Card className="p-0 bg-transparent shadow-none">
                <img src={icon} alt={slug} className="h-16 w-auto" />
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}
