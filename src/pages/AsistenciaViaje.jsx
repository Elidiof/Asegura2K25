// src/pages/AsistenciaViaje.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AsistenciaViaje() {
    // Puedes reemplazar esto con datos reales de las aseguradoras
    const companies = [
        { name: 'AXA', phone: '900 901 281' },
        { name: 'Allianz', phone: '900 117 117' },
        { name: 'Generali', phone: '900 903 433' },
        { name: 'Mapfre', phone: '900 122 122' },
        { name: 'Mutua Madrileña', phone: '900 555 555' },
        { name: 'Línea Directa', phone: '900 123 234' },
    ];

  return (
    <>
      <Helmet>
        <title>Asistencia en Viaje - Asegura2K25</title>
        <meta name="description" content="Teléfonos de contacto de las principales compañías de seguros para asistencia en carretera." />
      </Helmet>
      <main className="bg-slate-100 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Asistencia en Viaje
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Aquí tienes los números de contacto para solicitar asistencia en carretera. Guarda esta página en tus favoritos.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md">
              <ul className="divide-y divide-slate-200">
                  {companies.map((company) => (
                      <li key={company.name} className="px-6 py-4 flex items-center justify-between flex-wrap gap-4">
                          <span className="text-lg font-medium text-slate-800">{company.name}</span>
                          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-lg font-semibold text-blue-600 hover:underline">
                              {company.phone}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </main>
    </>
  );
};
