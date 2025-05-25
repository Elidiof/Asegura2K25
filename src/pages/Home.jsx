// src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'      
import { Card, CardContent } from '../components/ui/Card'
import Marquee from 'react-fast-marquee'

export default function Home() {
  const products = [
    { name: 'Coche', icon: '/logos/coche.png' },
    // ... resto ...
  ]

  return (
    <>
      <Helmet>
        <title>Encuentra seguros de coche, hogar, salud y más | Asegura2K25</title>
        {/* ... demás meta-tags ... */}
      </Helmet>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-6">
        <header className="mb-8">
          <h1 className="text-blue-900 text-center font-bold text-2xl sm:text-4xl">
            Encuentra el seguro que necesitas
          </h1>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-12">
          {products.map(({ name, icon }) => {
            const slug = name
              .toLowerCase()
              .replace(/ /g, '-')
              .normalize('NFD')
              .replace(/[^a-z0-9-]/g, '')
            return (
              // **Sin "/" al inicio** para HashRouter
              <Link key={slug} to={`seguro-${slug}`} className="block">
                <Card className="bg-gray-100 border border-black rounded-2xl p-3 transition hover:shadow-lg">
                  <CardContent className="flex justify-center">
                    <img src={icon} alt={name} className="h-20 w-auto" />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </section>

        {/* Marquee ... */}
      </main>
    </>
  )
}
