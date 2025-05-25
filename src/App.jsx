// src/App.jsx
import React, { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Footer from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { FaWhatsapp } from 'react-icons/fa'

const Home = lazy(() => import('./pages/Home'))
const Seguro = lazy(() => import('./pages/Seguro'))

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        {/* Banner con logo */}
        <div className="bg-blue-900 flex items-center justify-center py-4">
          <img src="/logos/logo.png" alt="Asegura2K25" className="h-24 sm:h-32" />
        </div>

        {/* Rutas SPA */}
        <main className="bg-gray-100 flex-grow flex flex-col overflow-x-hidden">
          <Suspense fallback={<div className="p-6 text-center">Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="seguro-:name" element={<Seguro />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer, cookies y WhatsApp */}
        <Footer />
        <CookieBanner />
        <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
          {/* ... tus enlaces de WhatsApp ... */}
        </div>
      </HashRouter>
    </HelmetProvider>
  )
}
