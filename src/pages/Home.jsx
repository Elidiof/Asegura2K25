import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'

export default function Home() {
  const products = [
    { name: 'Coche', icon: '/logos/coche.png' },
    { name: 'Hogar', icon: '/logos/hogar.png' },
    { name: 'Vida', icon: '/logos/vida.png' },
    { name: 'Salud', icon: '/logos/salud.png' },
    { name: 'Alquiler', icon: '/logos/alquiler.png' },
    { name: 'Empresas', icon: '/logos/empresas.png' },
    { name: 'RC', icon: '/logos/rc.png' }
  ]

  return (
    <>
      <Helmet>
        <title>Asegura2K25 - Seguros a tu medida</title>
        <meta name="description" content="Encuentra el seguro que necesitas en Asegura2K25: coche, hogar, salud y más." />
      </Helmet>

      <main className="container mx-auto p-4">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((prod) => {
            const slug = prod.name.toLowerCase()
            return (
              <Link
                key={slug}
                to={`/seguro/${slug}`}
                className="block text-center p-4 hover:bg-gray-100 rounded-lg transition"
              >
                <Card className="flex flex-col items-center">
                  <img src={prod.icon} alt={prod.name} className="h-12 mb-2" />
                  <CardContent className="font-medium">{prod.name}</CardContent>
                </Card>
              </Link>
            )
          })}
        </section>
      </main>
    </>
  )
}
