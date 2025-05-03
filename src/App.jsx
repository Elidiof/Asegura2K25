// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
  // Productos con iconos desde public/logos/
  const products = [
    { name: 'Hogar', icon: '/logos/hogar.png' },
    { name: 'Vida', icon: '/logos/vida.png' },
    { name: 'Decesos', icon: '/logos/decesos.png' },
    { name: 'Salud', icon: '/logos/salud.png' },
    { name: 'Coche', icon: '/logos/coche.png' },
    { name: 'Taxi', icon: '/logos/taxi.png' },
    { name: 'Cabeza tractora', icon: '/logos/cabeza-tractora.png' },
    { name: 'Comunidad', icon: '/logos/comunidad.png' },
    { name: 'Transporte de mercancías', icon: '/logos/transporte-mercancias.png' },
    { name: 'RC', icon: '/logos/rc.png' },
  ]

  // Compañías (todas en SVG, plusultra eliminado)
  const companias = [
    'mapfre',
    'reale',
    'generali',
    'allianz',
    'axa',
    'asisa',
    'dkv',
    'helvetia',
    'zurich',
    'adeslas',
    'catalana-ocidente',
    'mutuamadrilena',
    'santalucia',
    'pelayo',
    'aegon',
    'hiscox',
  ]

  // Partir en dos filas
  const mitad = Math.ceil(companias.length / 2)
  const rows = [
    companias.slice(0, mitad),
    companias.slice(mitad),
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Banner superior */}
      <div className="bg-blue-900 text-white py-3 sm:py-4 text-xl sm:text-2xl font-bold text-center">
        Asegura2K25
      </div>

      <div className="flex-grow px-4 sm:px-6 py-6 max-w-7xl mx-auto">
        {/* Encabezado */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center sm:text-left">
              Encuentra el seguro que necesitas
            </h1>
            <a
              href="https://wa.me/34658945741"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md hover:bg-green-600 transition text-sm sm:text-base"
            >
              Contáctanos vía WhatsApp
            </a>
          </div>
        </header>

        {/* Grid de productos */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {products.map(({ name, icon }) => (
            <Card
              key={name}
              className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-xl transition"
            >
              <CardContent className="flex flex-col items-center">
                <img
                  src={icon}
                  alt={name}
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mb-3 sm:mb-4"
                />
                <p className="text-sm sm:text-base font-medium text-gray-800 text-center">
                  {name}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Carrusel de compañías en dos líneas */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700 text-center">
            Compañías aseguradoras con las que colaboramos
          </h2>
          {rows.map((row, index) => (
            <Marquee
              key={index}
              gradient={false}
              speed={50}
              pauseOnHover
              direction="left"
              loop={0}
            >
              {row.map(key => (
                <img
                  key={key}
                  src={`/logos/${key}.svg`}
                  alt={key.replace(/-/g, ' ').toUpperCase()}
                  className="h-10 sm:h-12 mx-4 sm:mx-6 inline-block"
                />
              ))}
            </Marquee>
          ))}
        </section>
      </div>

      {/* Footer con contacto alineado a la izquierda */}
      <footer className="bg-blue-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto text-left space-y-1 sm:space-y-2 px-4 sm:px-6">
          <p className="text-lg sm:text-xl font-semibold">Elidio Ferrer</p>
          <p className="text-sm sm:text-base">
            Tel: <a href="tel:+34658945741" className="underline">658 945 741</a>
          </p>
          <p className="text-sm sm:text-base">
            Email: <a href="mailto:contacto@asegura2k25.com" className="underline">contacto@asegura2k25.com</a>
          </p>
          <p className="text-sm sm:text-base">
            Dirección: <a
              href="https://maps.app.goo.gl/BDtpFwcmUxzDDbeK7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Calle Pino, 27 · Andújar (Jaén) · CP 23740
            </a>
          </p>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/34658945741"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} className="sm:!text-white" />
      </a>
    </main>
  )
}
