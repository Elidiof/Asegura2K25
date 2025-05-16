
// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { CookieBanner } from './components/CookieBanner'
import { FaWhatsapp } from 'react-icons/fa'
import Footer from './components/Footer'
import Marquee from 'react-fast-marquee'

export default function App() {
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
    { name: 'Transporte de mercancías', icon: '/logos/mercancias.png' },
    { name: 'Agroseguro', icon: '/logos/agroseguro.png' },
    { name: 'Comunidad', icon: '/logos/comunidades.png' },
    { name: 'Decesos', icon: '/logos/decesos.png' },
    { name: 'Taxi', icon: '/logos/taxi.png' },
    { name: 'Moto', icon: '/logos/moto.png' },
    { name: 'Patinete', icon: '/logos/patinete.png' },
    { name: 'Instrumentos', icon: '/logos/instrumentos.png' }
  ]

  const companias = [
    'mapfre', 'reale', 'generali', 'allianz', 'axa', 'asisa', 'dkv',
    'helvetia', 'zurich', 'adeslas', 'catalana-ocidente',
    'mutuamadrilena', 'santalucia', 'pelayo', 'aegon', 'hiscox'
  ]
  const mitad = Math.ceil(companias.length / 2)
  const rows = [
    companias.slice(0, mitad),
    companias.slice(mitad),
  ]

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <div className="bg-blue-900 flex items-center justify-center py-4">
        <img src="/logos/logo.png" alt="Asegura2K25" className="h-24 sm:h-32" />
      </div>

      <div className="flex-grow px-4 py-6 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center">
            Encuentra el seguro que necesitas
          </h1>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 mb-12">
          {products.map(({ name, icon }) => {
            const href = `/seguro-${name
              .toLowerCase()
              .replace(/ /g, '-')
              .normalize('NFD')
              .replace(/[^a-z0-9-]/g, '')}.html`

            return (
              <a key={name} href={href} className="block">
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
            )
          })}
        </section>

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
                    alt={`Logo de ${key.replace(/-/g, ' ')}`}
                    className="h-10 sm:h-12 inline-block mx-2 sm:mx-[0.5cm]"
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </section>
      </div>

  <footer class="bg-blue-900 text-white py-8 text-sm px-6">
    <div class="max-w-4xl mx-auto space-y-3">
      <div class="flex items-center gap-2">
        <span class="font-bold">📍</span>
        <a href="https://maps.app.goo.gl/z9Gq6t1j3RNKVJyG6" target="_blank" rel="noopener" class="underline">
          Calle Pino 27, Andújar (Jaén) 23740
        </a>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-bold">📞</span>
        <a href="https://wa.me/34658945741" target="_blank" rel="noopener" class="underline">
          Teléfono / WhatsApp: 658 945 741
        </a>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-bold">✉️</span>
        <a href="mailto:contacto@asegura2k25.com" class="underline">
          contacto@asegura2k25.com
        </a>
      </div>

      <div class="mt-4">
        <a href="/legal.html" class="inline-block bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition text-sm">
          Legal
        </a>
      </div>

      <div class="mt-4 text-xs text-center text-gray-300">
        © 2025 ASEGURA2K25. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</body>
</html>
