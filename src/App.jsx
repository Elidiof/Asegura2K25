import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import { CookieBanner } from './components/CookieBanner';
import Footer from './components/Footer';

// Lazy-loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const Seguro = React.lazy(() => import('./pages/Seguro'));

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        {/* Hero / Banner */}
        <Header />

        {/* Main content */}
        <main className="container mx-auto p-4">
          <Suspense fallback={<div className="p-4 text-center">Cargando…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seguro/:name" element={<Seguro />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Cookie banner and footer */}
        <CookieBanner />
        <Footer />
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
