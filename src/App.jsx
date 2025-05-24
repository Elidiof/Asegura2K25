// src/App.jsx
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import { CookieBanner } from './components/CookieBanner'

const Home = lazy(() => import('./pages/Home'))
const Seguro = lazy(() => import('./pages/Seguro'))

export default function App() {
  return (
    <BrowserRouter>
      <main className="bg-gray-100 min-h-screen flex flex-col overflow-x-hidden">
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seguro-:name" element={<Seguro />} />
            {/* Cualquier otra ruta */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
        <CookieBanner />
      </main>
    </BrowserRouter>
  )
}
