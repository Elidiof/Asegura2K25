import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Sección del Logo (Tu código original) */}
      <div className="bg-blue-900 py-6 text-white">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <img src="/logo.png" alt="Asegura2K25" className="mx-auto h-[4.5rem] md:h-24" />
          </Link>
        </div>
      </div>

      {/* --- NUEVA SECCIÓN DE BOTONES DE ACCIÓN --- */}
      <div className="bg-slate-100 border-t border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
            <Link
              to="/declaracion" // Enlaza a la página que ya tienes
              className="w-full sm:w-auto text-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition"
            >
              Declarar Siniestro
            </Link>
            <Link
              to="/asistencia-viaje" // Enlaza a la nueva página de asistencia
              className="w-full sm:w-auto text-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-300 transition"
            >
              Asistencia en Viaje
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
