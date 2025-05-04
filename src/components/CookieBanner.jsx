// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Comprueba si ya existe consentimiento
    const consent = localStorage.getItem('cookies-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#f5f5f5',
        padding: '1em',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      <p>
        Utilizamos <strong>cookies propias</strong> para el correcto funcionamiento de la web y{' '}
        <strong>cookies de terceros</strong> (Google Analytics, redes sociales…) para analizar tu
        navegación y ofrecerte contenidos personalizados. Puedes aceptar todas o gestionar tus
        preferencias en nuestra{' '}
        <a href="/politica-cookies" target="_blank" rel="noopener noreferrer">
          política de cookies
        </a>.
      </p>
      <button onClick={acceptCookies}>Aceptar todas</button>
      <button onClick={() => window.location.href = '/politica-cookies'}>
        Configurar
      </button>
    </div>
  );
}
