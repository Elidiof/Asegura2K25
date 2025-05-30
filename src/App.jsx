// src/App.jsx
import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Header from './components/Header'
import Footer from './components/Footer'
// import { CookieBanner } from './components/CookieBanner' // ← Eliminado porque usamos Cookiebot

// Lazy-loaded pages
const Home               = React.lazy(() => import('./pages/Home'))
const Seguro             = React.lazy(() => import('./pages/Seguro'))
const AvisoLegal         = React.lazy(() => import('./pages/AvisoLegal'))
const PoliticaPrivacidad = React.lazy(() => import('./pages/PoliticaPrivacidad'))
const PoliticaCookies    = React.lazy(() => import('./pages/PoliticaCookies'))

export default function App () {
  return (
    <HelmetProvider>
      <Header />

      <Suspense fallback={<div className="p-8 text-center">Cargando…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seguro/:id" element={<Seguro />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      <Footer />
    </HelmetProvider>
  )
}
