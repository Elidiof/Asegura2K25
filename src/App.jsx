// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
  const products = [
    { name: 'Coche', icon: '/logos/coche.png' },
    { name: 'Moto', icon: '/logos/moto.png' },
    { name: 'Hogar', icon: '/logos/hogar.png' },
    { name: 'Comunidad', icon: '/logos/comunidad.png' },
    { name: 'Decesos', icon: '/logos/decesos.png' },
    { name: 'Vida', icon: '/logos/vida.png' },
    { name: 'Salud', icon: '/logos/salud.png' },
    { name: 'Accidentes', icon: '/logos/accidentes.png' },
    { name: 'Taxi', icon: '/logos/taxi.png' },
    { name: 'Cabeza tractora', icon: '/logos/cabeza-tractora.png' },
    { name: 'Transporte de mercancías', icon: '/logos/mercancias.png' },
    { name: 'Empresas', icon: '/logos/empresas.png' },
    { name: 'RC', icon: '/logos/rc.png' },
    { name: 'Agroseguro', icon: '/logos/agroseguro.png' },
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

        {/* Grid de productos: cada Card envuelta en un enlace a /contacto.html */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 mb-12">
          {products.map(({ name, icon }) => (
            <a key={name} href="/contacto.html" className="block">
              <Card className="bg-gray-100 rounded-2xl p-3 sm:p-4 transition border border-black hover:shadow-lg">
                <CardContent className="flex justify-center">
                  <img
                    src={icon}
                    alt={name}
                    className="h-20 w-auto sm:h-24 mb-2 sm:mb-3"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </section>

        {/* Carrusel de compañías */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 text-center mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>
          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover>
                {row.map((key) => (
                  <img
                    key={key}
                    src={`/logos/${key}.svg`}
                    alt={key.replace(/-/g, ' ').toUpperCase()}
                    className="h-10 sm:h-12 inline-block mx-2 sm:mx-[0.5cm]"
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-left space-y-1 px-4">
          <p className="text-lg font-semibold">Elidio Ferrer</p>
          <p className="text-sm">
            Tel: <a href="tel:+34658945741" className="underline">658 945 741</a>
          </p>
          <p className="text-sm">
            Email:{' '}
            <a href="mailto:contacto@asegura2k25.com" className="underline">
              contacto@asegura2k25.com
            </a>
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
        {/* Espacios extras debajo de "Legal" */}
        <div className="h-8"></div>
        <div className="h-8"></div>
      </footer>

      {/* Botones fijos de WhatsApp */}
      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <a
          href="https://wa.me/34658945741"
          className="flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition px-3 py-2 text-xs sm:text-sm md:px-6 md:py-4 md:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos vía WhatsApp
        </a>
        <a
          href="https://wa.me/34658945741"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition p-3 md:p-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="h-5 w-5 md:h-10 md:w-10" />
        </a>
      </div>
    </main>
  )
}
