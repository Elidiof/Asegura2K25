// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-8 text-sm">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-bold">📍</span>
          <a
            href="https://maps.app.goo.gl/z9Gq6t1j3RNKVJyG6"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Calle Pino 27, Andújar (Jaén) 23740
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">📞</span>
          <a
            href="https://wa.me/34658945741"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Teléfono / WhatsApp: 658 945 741
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">✉️</span>
          <a
            href="mailto:contacto@asegura2k25.com"
            className="underline"
          >
            contacto@asegura2k25.com
          </a>
        </div>

        {/* Enlaces legales */}
        <div className="mt-4 space-x-2 text-center">
          <a
            href="/legal.html"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition text-sm"
          >
            Legal / Cookies
          </a>
          <a
            href="/aviso-legal.html"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition text-sm"
          >
            Aviso Legal
          </a>
          <a
            href="/privacidad.html"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition text-sm"
          >
            Privacidad
          </a>
        </div>

        <div className="mt-4 text-xs text-center text-gray-300">
          © 2025 ASEGURA2K25. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
