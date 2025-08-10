import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Estilo base para los botones, para que sean idénticos
  const buttonStyle = "w-full sm:w-auto text-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-700 hover:bg-slate-800 transition";

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Sección del Logo */}
      <div className="bg-blue-900 py-6 text-white">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <img src="/logo.png" alt="Asegura2K25" className="mx-auto h-[4.5rem] md:h-24" />
          </Link>
        </div>
      </div>

      {/* --- SECCIÓN DE BOTONES DE ACCIÓN (ACTUALIZADA) --- */}
      <div className="bg-slate-100 border-t border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
            {/* El botón de declarar siniestro ahora es una etiqueta <a> para enlace externo */}
            <a
              href="https://asegura2k25.com/daa.html"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyle}
            >
              Declarar Siniestro
            </a>
            <Link
              to="/asistencia-viaje"
              className={buttonStyle}
            >
              Asistencia en Viaje
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

