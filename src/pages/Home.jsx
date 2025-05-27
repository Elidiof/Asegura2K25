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
    { name: 'Cabeza tractora', icon: '/logos/cabeza.png' },
    { name: 'Transporte de mercancías', icon: '/logos/transporte.png' },
    { name: 'Agroseguro', icon: '/logos/agro.png' },
    { name: 'Comunidad', icon: '/logos/comunidad.png' },
    { name: 'Decesos', icon: '/logos/decesos.png' },
    { name: 'Taxi', icon: '/logos/taxi.png' },
    { name: 'Moto', icon: '/logos/moto.png' },
    { name: 'Patinete', icon: '/logos/patinete.png' },
    { name: 'Instrumentos', icon: '/logos/instrumentos.png' }
  ]

  return (
    <>
      <main className="wrapper mx-auto px-4 py-12">
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