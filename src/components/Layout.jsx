import React from 'react';
import Navbar from './Navbar'; // Ajusta la ruta si tu Navbar está en otra carpeta
import Footer from './Footer';

/**
 * Componente de layout genérico.
 * Envuelve cada página con la cabecera, el contenido principal y el pie de página.
 * También actualiza dinámicamente el título de la pestaña.
 */
export default function Layout({ titulo = '', children }) {
  React.useEffect(() => {
    if (titulo) {
      document.title = `${titulo} | Asegura2K25`;
    }
  }, [titulo]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}