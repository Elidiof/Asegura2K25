// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
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
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-gray-100">
      {/* Banner */}
      <div className="bg-blue-900 text-white py-3 text-xl text-center">
        Asegura2K25
      </div>

      {/* Contenido principal */}
      <div className="flex-grow px-4 py-6 max-w-7xl mx-auto">
        {/* Título */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center">
            Encuentra el seguro que necesitas
          </h1>
        </header>

        {/* Grid de productos con ajuste responsive para evitar scroll horizontal */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {products.map(({ name, icon }) => (
            <Card
              key={name}
              className="bg-gray-100 shadow-none rounded-2xl p-4 transition"
            >
              <CardContent className="flex flex-col items-center">
                <img
                  src={icon}
                  alt={name}
                  className="
                    w-4/5 h-auto
                    sm:w-auto sm:h-24
                    md:h-32
                    mb-3
                  "
                />
                <p className="text-sm sm:text-base font-medium text-gray-800 text-center">
                  {name}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Carrusel de compañías */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 text-center mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>
          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover direction="left" loop={0}>
                {row.map((key, i) => (
                  <img
                    key={key}
                    src={`/logos/${key}.svg`}
                    alt={key.replace(/-/g, ' ').toUpperCase()}
                    className="h-10 sm:h-12 inline-block mx-[0.5cm]"
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </section>
      </div>

      {/* Footer con contacto y botón Legal centrado */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-left space-y-1 px-4">
          <p className="text-lg font-semibold">Elidio Ferrer</p>
          <p className="text-sm">
            Tel: <a href="tel:+34658945741" className="underline">658 945 741</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:contacto@asegura2k25.com" className="underline">contacto@asegura2k25.com</a>
          </p>
          <p className="text-sm">
            Dirección:{' '}
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
        <div className="mt-4 flex justify-center">
          <a
            href="/legal.html"
            className="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition text-sm"
          >
            Legal
          </a>
        </div>
      </footer>

      {/* Botones fijos de WhatsApp */}
      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <a
          href="https://wa.me/34658945741"
          className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos vía WhatsApp
        </a>
        <a
          href="https://wa.me/34658945741"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </main>
  )
}
