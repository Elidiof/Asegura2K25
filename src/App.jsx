import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
  const products = [
    { name: 'Coche', icon: '/logos/coche.png' },
    /* ... resto de productos ... */
  ]

  const companias = [ /* ... */ ]
  const mitad = Math.ceil(companias.length / 2)
  const rows = [ companias.slice(0, mitad), companias.slice(mitad) ]

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <div className="bg-blue-900 text-white py-3 text-xl text-center">
        Asegura2K25
      </div>

      <div className="flex-grow px-4 py-6 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center">
            Encuentra el seguro que necesitas
          </h1>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-12">
          {products.map(({ name, icon }) => (
            <a key={name} href="/contacto.html" className="block">
              <Card className="bg-gray-100 rounded-2xl p-4 border border-black hover:shadow-lg transition">
                <CardContent className="flex justify-center">
                  <img src={icon} alt={name} className="h-24 w-auto" />
                </CardContent>
              </Card>
            </a>
          ))}
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 text-center mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>
          {rows.map((row, i) => (
            <Marquee key={i} gradient={false} speed={50} pauseOnHover>
              {row.map(key => (
                <img
                  key={key}
                  src={`/logos/${key}.svg`}
                  alt={key.toUpperCase()}
                  className="h-12 mx-4 inline-block"
                />
              ))}
            </Marquee>
          ))}
        </section>
      </div>

      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-1 text-left">
          <p className="text-lg font-semibold">Elidio Ferrer</p>
          <p className="text-sm">Tel: <a href="tel:+34658945741" className="underline">658 945 741</a></p>
          <p className="text-sm">Email: <a href="mailto:contacto@asegura2k25.com" className="underline">contacto@asegura2k25.com</a></p>
          <p className="text-sm">Dirección: <a href="https://maps.app.goo.gl/BDtpFwcmUxzDDbeK7" className="underline">Calle Pino, 27 · Andújar · CP 23740</a></p>
        </div>
        <div className="mt-4 flex justify-center">
          <a href="/legal.html" className="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition">
            Legal
          </a>
        </div>
        <div className="h-8"></div>
        <div className="h-8"></div>
      </footer>

      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <a
          href="https://wa.me/34658945741"
          className="bg-green-500 text-white px-3 py-2 rounded-full shadow-lg hover:bg-green-600 transition text-sm inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="mr-2" /> WhatsApp
        </a>
        <a
          href="https://wa.me/34658945741"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </main>
  )
}
