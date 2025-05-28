import React from 'react'
import { Card } from '../components/ui/Card'
import WhatsButton from '../components/WhatsButton'

function Home() {
  const products = [
    { name: 'Coche', icon: '/logos/coche.png' },
    { name: 'Hogar', icon: '/logos/hogar.png' },
    { name: 'Vida', icon: '/logos/vida.png' },
    { name: 'Salud', icon: '/logos/salud.png' },
    { name: 'Alquiler', icon: '/logos/alquiler.png' },
    { name: 'Empresas', icon: '/logos/empresas.png' },
    { name: 'RC', icon: '/logos/rc.png' },
    { name: 'Accidentes', icon: '/logos/accidentes.png' },
    { name: 'Mascotas', icon: '/logos/mascotas.png' },
    { name: 'Cabeza tractora', icon: '/logos/cabeza-tractora.png' },
    { name: 'Transporte de mercancías', icon: '/logos/transporte-mercancias.png' },
    { name: 'Agroseguro', icon: '/logos/agroseguro.png' },
    { name: 'Comunidad', icon: '/logos/comunidades.png' },
    { name: 'Decesos', icon: '/logos/decesos.png' },
    { name: 'Taxi', icon: '/logos/taxi.png' },
    { name: 'Moto', icon: '/logos/moto.png' },
    { name: 'Patinete', icon: '/logos/patinete.png' },
    { name: 'Instrumentos Musicales', icon: '/logos/instrumentos-musicales.png' }
  ]

  return (
    <>
      <main className="wrapper mx-auto px-4 pt-6 pb-24">
        <h2 className="text-xl font-bold text-center my-4 md:my-6">
          Encuentra el seguro que necesitas
        </h2>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </section>
      </main>
      <WhatsButton />
    </>
  )
}

export default Home