// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'

export default function Home() {
  const products = [
    { name: 'Coche', slug: 'coche', icon: '/logos/coche.png' },
    { name: 'Hogar', slug: 'hogar', icon: '/logos/hogar.png' },
    { name: 'Vida', slug: 'vida', icon: '/logos/vida.png' },
    { name: 'Salud', slug: 'salud', icon: '/logos/salud.png' },
    { name: 'Alquiler', slug: 'alquiler', icon: '/logos/alquiler.png' },
    { name: 'Empresa', slug: 'empresas', icon: '/logos/empresas.png' },
    { name: 'RC', slug: 'rc', icon: '/logos/rc.png' },
    { name: 'Accidentes', slug: 'accidentes', icon: '/logos/accidentes.png' },
    { name: 'Mascotas', slug: 'mascotas', icon: '/logos/mascotas.png' },
    { name: 'Cabeza Tractora', slug: 'cabeza-tractora', icon: '/logos/cabeza-tractora.png' },
    { name: 'Transporte Mercancías', slug: 'transporte-mercancias', icon: '/logos/transporte-mercancias.png' },
    { name: 'Agroseguro', slug: 'agroseguro', icon: '/logos/agroseguro.png' },
    { name: 'Comunidades', slug: 'comunidades', icon: '/logos/comunidades.png' },
    { name: 'Decesos', slug: 'decesos', icon: '/logos/decesos.png' },
    { name: 'Taxi', slug: 'taxi', icon: '/logos/taxi.png' },
    { name: 'Moto', slug: 'moto', icon: '/logos/moto.png' },
    { name: 'Patinete', slug: 'patinete', icon: '/logos/patinete.png' },
    { name: 'Instrumentos Musicales', slug: 'instrumentos-musicales', icon: '/logos/instrumentos-musicales.png' }
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
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map(({ name, slug, icon }) => (
            <Link
              key={slug}
              to={`/seguro/${slug}`}
              className="block text-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition"
            >
              <Card className="flex flex-col items-center">
                <img src={icon} alt={name} className="h-12 mb-2" />
                <CardContent className="font-medium">{name}</CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}
