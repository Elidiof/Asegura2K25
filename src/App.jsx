// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
  // Productos apuntando a public/logos/
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

  // Definimos cuáles son PNG y el array completo de compañías
  const pngLogos = ['asisa','dkv','pelayo']
  const compañias = [
    'mapfre','reale','generali','allianz','axa',
    'asisa','dkv','helvetia','zurich','adeslas',
    'catalana-ocidente','mutuamadrilena','santalucia',
    'pelayo','aegon','plusultra','hiscox'
  ]

  // Partimos el array en dos mitades
  const mitad = Math.ceil(compañias.length / 2)
  const rows = [
    compañias.slice(0, mitad),
    compañias.slice(mitad),
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Banner superior */}
      <div className="bg-blue-900 text-white py-4 text-2xl font-bold text-center">
        ASEGURA2K25
      </div>

      <div className="flex-grow p-6 max-w-7xl mx-auto">
        {/* Encabezado */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900">
            Encuentra el seguro que necesitas
          </h1>
          <p className="text-gray-600 mt-2">
            Trabajamos con las mejores aseguradoras en España
          </p>
          <a
            href="https://wa.me/34658945741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
          >
            Contáctanos vía WhatsApp
          </a>
        </header>

        {/* Grid de productos */}
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

        {/* Carrusel de compañías en dos líneas */}
        <section className="mb-12 space-y-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
            Compañías aseguradoras con las que colaboramos
