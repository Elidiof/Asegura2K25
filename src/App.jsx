// src/App.jsx
import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
// import { CookieBanner } from './components/CookieBanner'

// Lazy-loaded pages
const Home               = React.lazy(() => import('./pages/Home'))
const Seguro             = React.lazy(() => import('./pages/Seguro'))
const AvisoLegal         = React.lazy(() => import('./pages/AvisoLegal'))
const PoliticaPrivacidad = React.lazy(() => import('./pages/PoliticaPrivacidad'))
const PoliticaCookies    = React.lazy(() => import('./pages/PoliticaCookies'))

export default function App() {
  return (
    <HelmetProvider>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Header />

      <Suspense fallback={<div className="p-8 text-center">Cargando…</div>}>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Home />} />

          {/* Detalle de producto: /seguro/coche, /seguro/hogar, etc. */}
          <Route path="/seguro/:name" element={<Seguro />} />

          {/* Textos legales */}
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad"  element={<PoliticaPrivacidad />} />
          <Route path="/cookies"     element={<PoliticaCookies />} />

          {/* 404 -> inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      <Footer />
      <CookieBanner />
    </HelmetProvider>
  )
}
