// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookies-consent', 'all');
    setVisible(false);
  };

  const openSettings = () => {
    window.location.href = '/politica-cookies';
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-24 z-50 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mx-4 p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:justify-center md:items-center">
        <p className="text-gray-700 text-sm leading-relaxed md:w-2/3 md:mr-6">
          Utilizamos <strong>cookies propias</strong> para el correcto funcionamiento de la web y <strong>cookies de terceros</strong> (Google Analytics, redes sociales…) para analizar tu navegación y ofrecerte contenidos personalizados. Puedes aceptar todas o gestionar tus preferencias en nuestra{' '}
          <a
            href="/politica-cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            política de cookies
          </a>.
        </p>
        <div className="flex flex-row items-center space-x-3 md:inline-flex md:flex-col md:space-y-3 w-auto">
          <button
            onClick={acceptAll}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white font-semibold rounded-lg shadow text-center w-auto md:w-full"
          >
            Aceptar todas
          </button>
          <button
            onClick={openSettings}
            className="border border-gray-300 hover:border-gray-400 text-gray-800 px-5 py-2 rounded-lg font-medium w-auto md:w-full text-center"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}
