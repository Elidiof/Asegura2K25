// src/pages/AsistenciaViaje.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AsistenciaViaje() {
    // Lista ampliada y actualizada con múltiples teléfonos por compañía.
    const companies = [
        { name: 'Allianz', phones: ['900 300 250', '913 255 242'] },
        { name: 'AXA', phones: ['911 119 543', '918 070 050'] },
        { name: 'Catalana Occidente', phones: ['913 939 030'] },
        { name: 'Divina Pastora', phones: ['915 949 328'] },
        { name: 'DKV', phones: ['976 506 000'] },
        { name: 'Generali', phones: ['911 123 443', '900 903 326'] },
        { name: 'Helvetia', phones: ['900 106 010', '900 810 464'] },
        { name: 'Liberty Seguros', phones: ['900 101 369'] },
        { name: 'Mapfre', phones: ['918 365 365', '900 122 122'] },
        { name: 'Mutua Madrileña', phones: ['915 555 555', '900 555 555'] },
        { name: 'Pelayo', phones: ['915 200 500'] },
        { name: 'Occident', phones: ['917 838 383'] },
        { name: 'Qualitas Auto', phones: ['900 901 281'] },
        { name: 'Reale Seguros', phones: ['918 073 737', '900 365 900'] },
        { name: 'Santalucía', phones: ['915 728 219'] },
        { name: 'Zurich', phones: ['932 671 040'] },
    ].sort((a, b) => a.name.localeCompare(b.name)); // Ordenar alfabéticamente

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
                      <li key={company.name} className="px-6 py-4 flex items-center justify-between flex-wrap gap-x-6 gap-y-2">
                          <span className="text-lg font-medium text-slate-800">{company.name}</span>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-end">
                            {company.phones.map(phone => (
                                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-lg font-semibold text-blue-600 hover:underline whitespace-nowrap">
                                    {phone}
                                </a>
                            ))}
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </main>
    </>
  );
};
