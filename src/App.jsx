// src/App.jsx
import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaWhatsapp } from 'react-icons/fa'
// …tus imports de Card, productos, footer, etc.

export default function App() {
  // 1. Carga todos los SVG/PNG de /src/assets/cias con Vite
  const modules = import.meta.globEager('./assets/cias/*.{svg,png}')
  // 2. Construye un mapa name → URL
  const logos = {}
  Object.entries(modules).forEach(([path, mod]) => {
    // path: './assets/cias/catalana-ocidente.svg'
    const name = path
      .split('/')
      .pop()
      .replace(/\.(svg|png)$/, '')           // quita extensión
    logos[name] = mod.default                // Vite expone la URL como default
  })

  // 3. Define el orden en que quieras mostrarlos
  const order = [
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
    'plusultra',
    'hiscox'
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* …banner, header, productos… */}

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Compañías aseguradoras con las que colaboramos
        </h2>
        <Marquee gradient={false} speed={50} pauseOnHover loop>
          {order.map((key) => {
            const src = logos[key]
            if (!src) return null  // si falta el fichero, simplemente lo omite
            return (
              <img
                key={key}
                src={src}
                alt={key.replace(/-/g,' ').toUpperCase()}
                className="h-12 mx-6 inline-block"
              />
            )
          })}
        </Marquee>
      </section>

      {/* …footer, botón WhatsApp… */}
    </main>
  )
}
