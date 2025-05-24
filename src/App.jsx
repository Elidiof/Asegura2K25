// src/App.jsx
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { FaWhatsapp } from 'react-icons/fa'

const Home = lazy(() => import('./pages/Home'))
const Seguro = lazy(() => import('./pages/Seguro'))

export default function App() {
  return (
    <BrowserRouter>
      {/* ——— Banner azul con logo ——— */}
      <div className="bg-blue-900 flex items-center justify-center py-4">
        <img
          src="/logos/logo.png"
          alt="Asegura2K25"
          className="h-24 sm:h-32"
        />
      </div>

      {/* ——— Contenedor principal con rutas ——— */}
      <main className="bg-gray-100 flex-grow flex flex-col overflow-x-hidden">
        <Suspense fallback={<div className="p-6 text-center">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seguro-:name" element={<Seguro />} />
            {/* Ruta comodín: si no existe la URL, redirige al Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* ——— Footer y banner de cookies ——— */}
      <Footer />
      <CookieBanner />

      {/* ——— Botón flotante de WhatsApp ——— */}
      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <a
          href="https://wa.me/34658945741"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-3 py-2 text-xs sm:text-sm md:px-6 md:py-4 md:text-base flex items-center justify-center shadow-lg transition hover:bg-green-600 rounded"
        >
          Contáctanos vía WhatsApp
        </a>
        <a
          href="https://wa.me/34658945741"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 md:p-6 flex items-center justify-center shadow-lg transition hover:bg-green-600 rounded-full"
        >
          <FaWhatsapp className="h-5 w-5 md:h-10 md:w-10" />
        </a>
      </div>
    </BrowserRouter>
  )
}
