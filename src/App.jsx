// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
  // Todos los iconos en /public/logos/*.svg
  const products = [
    { name: 'Hogar', icon: '/logos/hogar.svg' },
    { name: 'Vida', icon: '/logos/vida.svg' },
    { name: 'Decesos', icon: '/logos/decesos.svg' },
    { name: 'Salud', icon: '/logos/salud.svg' },
    { name: 'Coche', icon: '/logos/coche.svg' },
    { name: 'Taxi', icon: '/logos/taxi.svg' },
    { name: 'Cabeza tractora', icon: '/logos/cabeza-tractora.svg' },
    { name: 'Comunidad', icon: '/logos/comunidad.svg' },
    { name: 'Transporte de mercancías', icon: '/logos/transporte-mercancias.svg' },
    { name: 'RC', icon: '/logos/rc.svg' },
  ]

  const companias = [
    'mapfre','reale','generali','allianz','axa','asisa','dkv',
    'helvetia','zurich','adeslas','catalana-ocidente',
    'mutuamadrilena','santalucia','pelayo','aegon','hiscox'
  ]

  const mitad = Math.ceil(companias.length / 2)
  const rows = [
    companias.slice(0, mitad),
    companias.slice(mitad),
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="bg-blue-900 text-white py-3 text-xl text-center">
        Asegura2K25
      </div>

      <div className="flex-grow px-4 py-6 w-full">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center sm:text-left">
              Encuentra el seguro que necesitas
            </h1>
            <a
              href="https://wa.me/34658945741"
              className="mt-4 sm:mt-0 bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos vía WhatsApp
            </a>
          </div>
        </header>

        {/* Productos */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {products.map(({ name, icon }) => (
            <Card key={name} className="bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
              <CardContent className="flex flex-col items-center">
                <img src={icon} alt={name} className="h-12 w-12 sm:h-16 sm:w-16 mb-3" />
                <p className="text-sm sm:text-base font-medium text-gray-800 text-center">{name}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Carrusel de compañías */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 text-center mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>
          {rows.map((row, i) => (
            <div key={i} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover direction="left" loop={0}>
                {row.map(key => (
                  <img
                    key={key}
                    src={`/logos/${key}.svg`}
                    alt={key.toUpperCase()}
                    className="h-10 sm:h-12 mx-4 inline-block"
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="px-4 text-left space-y-1">
          <p className="text-lg font-semibold">Elidio Ferrer</p>
          <p className="text-sm">
            <a href="tel:+34658945741" className="underline">658 945 741</a>
          </p>
          <p className="text-sm">
            <a href="mailto:contacto@asegura2k25.com" className="underline">contacto@asegura2k25.com</a>
          </p>
          <p className="text-sm">
            <a
              href="https://maps.app.goo.gl/BDtpFwcmUxzDDbeK7"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calle Pino, 27 · Andújar (Jaén) · CP 23740
            </a>
          </p>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/34658945741"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </main>
  )
}
