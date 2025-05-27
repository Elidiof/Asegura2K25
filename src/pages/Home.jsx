// -----------------------------------------------------------------------------
// src/pages/Home.jsx
// Página principal de Asegura2K25 con tarjetas de productos y botón flotante de WhatsApp
// -----------------------------------------------------------------------------
import React from 'react'
import { Card } from '../components/ui/Card'
import WhatsButton from '../components/WhatsButton'

export default function Home() {
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
      {/* CABECERA HERO --------------------------------------------------------- */}
      <header className="bg-blue-700 text-white">
        <div className="wrapper mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Tu seguro a medida con&nbsp;Asegura2K25
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Comparación independiente de Mapfre, Reale, Generali,
            Allianz, AXA&nbsp;y más — en&nbsp;menos de&nbsp;5&nbsp;minutos.
          </p>
        </div>
      </header>

      {/* GRID DE PRODUCTOS ----------------------------------------------------- */}
      <main className="wrapper mx-auto px-4 py-12">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="text-center p-4">
              <img src={product.icon} alt={product.name} className="mx-auto h-16 mb-2" />
              <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
            </Card>
          ))}
        </section>
      </main>

      {/* BOTÓN FLOTANTE DE WHATSAPP -------------------------------------------- */}
      <WhatsButton />
    </>
  )
}