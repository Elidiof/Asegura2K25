// src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/Home"));
const Seguro = React.lazy(() => import("./pages/Seguro"));
const AsistenciaViaje = React.lazy(() => import("./pages/AsistenciaViaje"));
const AvisoLegal = React.lazy(() => import("./pages/AvisoLegal"));
const PoliticaPrivacidad = React.lazy(
  () => import("./pages/PoliticaPrivacidad"),
);
const PoliticaCookies = React.lazy(() => import("./pages/PoliticaCookies"));
const Contacto = React.lazy(() => import("./pages/Contacto"));
const Declaracion = React.lazy(() => import("./pages/Declaracion"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
// Se ha eliminado la importación de 'DeclararSiniestro'

export default function App() {
  return (
    <HelmetProvider>
      <Header />
      <ScrollToTop />

      <Suspense fallback={<div className="p-8 text-center">Cargando…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seguro/:name" element={<Seguro />} />
          <Route path="/asistencia-viaje" element={<AsistenciaViaje />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/declaracion" element={<Declaracion />} />
          {/* Se ha eliminado la ruta '/declarar-siniestro' */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </HelmetProvider>
  );
}
