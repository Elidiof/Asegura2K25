import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';

// Componentes cargados perezosamente para optimizar la carga
const Home = React.lazy(() => import('./pages/Home'));
const Seguro = React.lazy(() => import('./pages/Seguro'));

function App() {
  return (
    <HashRouter>
      <main className="container mx-auto p-4">
        {/* Suspense muestra un mensaje mientras los componentes lazy se cargan */}
        <Suspense fallback={<div className="p-4 text-center">Cargando…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Ruta para cada seguro, con parámetro name */}
            <Route path="/seguro/:name" element={<Seguro />} />
            {/* Redirige cualquier ruta desconocida a la página principal */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <CookieBanner />
      <Footer />
    </HashRouter>
  );
}

export default App;
