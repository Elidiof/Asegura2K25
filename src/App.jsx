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

  // Compañías y cuáles van en PNG
  const pngLogos = ['asisa', 'dkv', 'pelayo']
  const companias = [
    'mapfre','reale','generali','allianz','axa',
    'asisa','dkv','helvetia','zurich','adeslas',
    'catalana-ocidente','mutuamadrilena','santalucia',
    'pelayo','aegon','plusultra','hiscox'
  ]

  // Dividir en dos filas
  const mitad = Math.ceil(companias.length / 2)
  const rows = [
    companias.slice(0, mitad),
    companias.slice(mitad),
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Banner superior */}
      <div className="bg-blue-900 text-white py-4 text-2xl font-bold text-center">
        Asegura2K25
      </div>

      <div className="flex-grow p-6 max-w-7xl mx-auto">
        {/* Encabezado con título a la izquierda y botón a la derecha */}
        <header className="mb-12">
          <div className="flex items-center justify-between flex-wrap">
            <h1 className="text-4xl font-bold text-blue-900">
              Encuentra el seguro que necesitas
            </h1>
            <a
              href="https://wa.me/34658945741"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
            >
              Contáctanos vía WhatsApp
            </a>
          </div>
        </header>

        {/* Grid de productos con iconos más grandes */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
          {products.map(({ name, icon }) => (
            <Card
              key={name}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              <CardContent className="flex flex-col items-center">
                <img
                  src={icon}
                  alt={name}
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4"
                />
                <p className="text-sm font-medium text-gray-800">{name}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Carrusel de compañías en dos líneas, ambas moviéndose a la izquierda */}
        <section className="mb-12 space-y-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {rows.map((row, index) => (
            <Marquee
              key={index}
              gradient={false}
              speed={60}
              pauseOnHover
              direction="left"
              loop={0}
            >
              {row.map((key) => {
                const ext = pngLogos.includes(key) ? 'png' : 'svg'
                return (
                  <img
                    key={key}
                    src={`/logos/${key}.${ext}`}
                    alt={key.replace(/-/g, ' ').toUpperCase()}
                    className="h-12 mx-6 inline-block"
                  />
                )
              })}
            </Marquee>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p className="text-xl font-semibold">Elidio Ferrer</p>
        <p className="mt-2">
          Tel: <a href="tel:+34658945741" className="underline">658 945 741</a>
        </p>
        <p className="mt-2">
          Email: <a href="mailto:contacto@asegura2k25.com" className="underline">contacto@asegura2k25.com</a>
        </p>
        <p className="mt-2">
          Calle Pino, 27 · Andújar (Jaén) · CP 23740
        </p>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/34658945741"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  )
}
