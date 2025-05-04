// src/App.jsx
import React from 'react'
import { Card, CardContent } from './components/ui/Card'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function App() {
  const products = [
    /* ... tus productos ... */
  ]

  const companias = [
    /* ... tus compañías ... */
  ]
  const mitad = Math.ceil(companias.length / 2)
  const rows = [
    companias.slice(0, mitad),
    companias.slice(mitad),
  ]

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-gray-100">
      {/* Banner con logo ajustado a su propia altura */}
      <div className="bg-blue-900 flex items-center justify-center h-36 sm:h-48">
        <img
          src="/logos/asegura2k25.png"
          alt="Asegura2K25"
          className="h-full w-auto"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex-grow px-4 py-6 max-w-7xl mx-auto">
        {/* Título */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 text-center">
            Encuentra el seguro que necesitas
          </h1>
        </header>

        {/* Grid de productos */}
        {/* ... resto del código ... */}
      </div>

      {/* Footer */}
      {/* ... footer ... */}

      {/* Botones fijos de WhatsApp */}
      {/* ... botones ... */}
    </main>
  )
}
