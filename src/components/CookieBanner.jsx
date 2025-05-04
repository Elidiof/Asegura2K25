// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Comprueba si ya existe consentimiento guardado
    const consent = localStorage.getItem('cookies-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookies-consent', 'all');
    setVisible(false);
  };

  const openSettings = () => {
    // Redirige a configuración granular
    window.location.href = '/politica-cookies';
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 flex justify-center z-50">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full mx-4 p-6 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
        <p className="text-gray-700 text-sm leading-relaxed md:w-2/3">
          Utilizamos <strong>cookies propias</strong> para el correcto funcionamiento de la web y <strong>cookies de terceros</strong> (Google Analytics, redes sociales…) para analizar tu navegación y ofrecerte contenidos personalizados. Puedes aceptar todas o gestionar tus preferencias en nuestra{' '}
          <a href="/politica-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            política de cookies
          </a>.
        </p>
        <div className="flex-shrink-0 flex space-x-3">
          <button
            onClick={acceptAll}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
          >
            Aceptar todas
          </button>
          <button
            onClick={openSettings}
            className="px-5 py-2 border border-gray-300 hover:border-gray-400 text-gray-800 rounded-lg font-medium"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}
