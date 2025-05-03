// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

// —————— Productos (igual que antes) —————— 
import hogarIcon from './assets/hogar.png'
import vidaIcon from './assets/vida.png'
import decesosIcon from './assets/decesos.png'
import saludIcon from './assets/salud.png'
import cocheIcon from './assets/coche.png'
import taxiIcon from './assets/taxi.png'
import cabezaIcon from './assets/cabeza-tractora.png'
import comunidadIcon from './assets/comunidad.png'
import transporteIcon from './assets/transporte-mercancias.png'
import rcIcon from './assets/rc.png'

const products = [
  { name: 'Hogar', icon: hogarIcon },
  { name: 'Vida', icon: vidaIcon },
  { name: 'Decesos', icon: decesosIcon },
  { name: 'Salud', icon: saludIcon },
  { name: 'Coche', icon: cocheIcon },
  { name: 'Taxi', icon: taxiIcon },
  { name: 'Cabeza tractora', icon: cabezaIcon },
  { name: 'Comunidad', icon: comunidadIcon },
  { name: 'Transporte de mercancías', icon: transporteIcon },
  { name: 'RC', icon: rcIcon },
]

// —————— Carrusel de logos ——————
// 1) Glob eager a todos los SVG/PNG en src/assets/
const logoModules = import.meta.globEager('./assets/*.{svg,png}')

// 2) Construye un objeto name → URL
const logos = Object.entries(logoModules).reduce((obj, [path, mod]) => {
  // path = './assets/mapfre.svg' → name = 'mapfre'
  const file = path.split('/').pop()
  const name = file.replace(/\.(svg|png)$/, '')
  obj[name] = mod.default
  return obj
}, {})

// 3) Define el orden en que quieres mostrarlos
const logoOrder = [
  'mapfre','reale','generali','allianz','axa',
  'asisa','dkv','helvetia','zurich','adeslas',
  'gco','mutuamadrilena','santalucia',
  'pelayo','aegon','plusultra','hiscox'
]

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* …banner, header, grid de productos… */}

      {/* Carrusel */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Compañías aseguradoras con las que colaboramos
        </h2>
        <Marquee gradient={false} speed={50} pauseOnHover loop>
          {logoOrder.map((key) => {
            const src = logos[key]
            if (!src) return null  // Omite si no existe
            return (
              <img
                key={key}
                src={src}
                alt={key.replace(/-/g, ' ').toUpperCase()}
                className="h-12 mx-6 inline-block"
              />
            )
          })}
        </Marquee>
      </section>

      {/* …footer, botón flotante… */}
    </main>
  )
}
