import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'

export default function Home() {
  const products = [
    { slug: 'coche', icon: '/logos/coche.png' },
    { slug: 'hogar', icon: '/logos/hogar.png' },
    { slug: 'vida', icon: '/logos/vida.png' },
    { slug: 'salud', icon: '/logos/salud.png' },
    { slug: 'alquiler', icon: '/logos/alquiler.png' },
    { slug: 'empresas', icon: '/logos/empresas.png' },
    { slug: 'rc', icon: '/logos/rc.png' },
    { slug: 'accidentes', icon: '/logos/accidentes.png' },
    { slug: 'mascotas', icon: '/logos/mascotas.png' },
    { slug: 'cabeza-tractora', icon: '/logos/cabeza-tractora.png' },
    { slug: 'transporte-mercancias', icon: '/logos/transporte-mercancias.png' },
    { slug: 'agroseguro', icon: '/logos/agroseguro.png' },
    { slug: 'comunidades', icon: '/logos/comunidades.png' },
    { slug: 'decesos', icon: '/logos/decesos.png' },
    { slug: 'taxi', icon: '/logos/taxi.png' },
    { slug: 'moto', icon: '/logos/moto.png' },
    { slug: 'patinete', icon: '/logos/patinete.png' },
    { slug: 'instrumentos-musicales', icon: '/logos/instrumentos-musicales.png' }
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
        <h2 className="text-center text-2xl font-semibold mb-6">
          Encuentra el seguro que necesitas
        </h2>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map(({ slug, icon }) => (
            <Link
              key={slug}
              to={`/seguro/${slug}`}
              className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition flex items-center justify-center"
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
