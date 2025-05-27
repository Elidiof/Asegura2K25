
import React from 'react'
import { Card } from '../components/ui/Card'
import WhatsButton from '../components/WhatsButton'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Coche', icon: '/logos/coche.png', link: '/producto/coche' },
  { name: 'Hogar', icon: '/logos/hogar.png', link: '/producto/hogar' },
  { name: 'Vida', icon: '/logos/vida.png', link: '/producto/vida' },
  { name: 'Salud', icon: '/logos/salud.png', link: '/producto/salud' },
  { name: 'Alquiler', icon: '/logos/alquiler.png', link: '/producto/alquiler' },
  { name: 'Empresas', icon: '/logos/empresas.png', link: '/producto/empresas' },
  { name: 'RC', icon: '/logos/rc.png', link: '/producto/rc' },
  { name: 'Accidentes', icon: '/logos/accidentes.png', link: '/producto/accidentes' },
  { name: 'Mascotas', icon: '/logos/mascotas.png', link: '/producto/mascotas' },
  { name: 'Cabeza tractora', icon: '/logos/cabeza.png', link: '/producto/cabeza-tractora' },
  { name: 'Transporte de mercancías', icon: '/logos/transporte.png', link: '/producto/transporte' },
  { name: 'Agroseguro', icon: '/logos/agro.png', link: '/producto/agroseguro' },
  { name: 'Comunidad', icon: '/logos/comunidad.png', link: '/producto/comunidad' },
  { name: 'Decesos', icon: '/logos/decesos.png', link: '/producto/decesos' },
  { name: 'Taxi', icon: '/logos/taxi.png', link: '/producto/taxi' },
  { name: 'Moto', icon: '/logos/moto.png', link: '/producto/moto' },
  { name: 'Patinete', icon: '/logos/patinete.png', link: '/producto/patinete' },
  { name: 'Instrumentos', icon: '/logos/instrumentos.png', link: '/producto/instrumentos' }
]

function Home() {
  return (
    <>
      <main className="wrapper mx-auto px-4 py-12">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <Link key={index} to={product.link}>
              <Card className="text-center p-4">
                <img src={product.icon} alt={product.name} className="mx-auto h-16 mb-2" />
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
              </Card>
            </Link>
          ))}
        </section>
      </main>
      <WhatsButton />
    </>
  )
}

export default Home
