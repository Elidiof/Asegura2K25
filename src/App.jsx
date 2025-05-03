import React from 'react';
import { Card, CardContent } from './components/ui/Card';
import { FaWhatsapp } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

// Importa aquí tus íconos personalizados desde src/assets
import hogarIcon from './assets/hogar.png';
import vidaIcon from './assets/vida.png';
import decesosIcon from './assets/decesos.png';
import saludIcon from './assets/salud.png';
import cocheIcon from './assets/coche.png';
import taxiIcon from './assets/taxi.png';
import cabezaIcon from './assets/cabeza-tractora.png';
import comunidadIcon from './assets/comunidad.png';
import transporteIcon from './assets/transporte-mercancias.png';
import rcIcon from './assets/rc.png';

const products = [
  /* ...igual que antes... */
];

// Lista de aseguradoras; la extensión se decide en tiempo de render
const aseguradoras = [
  'mapfre', 'reale', 'generali', 'allianz', 'axa',
  'asisa', 'dkv', 'helvetia', 'zurich', 'adeslas',
  'catalanaoccidente', 'mutuamadrilena', 'santalucia',
  'pelayo', 'aegon', 'plusultra', 'hiscox'
];

// Logos que están en PNG
const pngLogos = ['asisa', 'dkv', 'pelayo'];

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ...banner, header, productos... */}

      {/* Carrusel horizontal de logos */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Compañías aseguradoras con las que colaboramos
        </h2>
        <Marquee gradient={false} speed={50} pauseOnHover loop>
          {aseguradoras.map((key) => {
            // Selecciona extensión según compañía
            const ext = pngLogos.includes(key) ? 'png' : 'svg';
            // Require dinámico
            const logoSrc = require(`./assets/cias/${key}.${ext}`).default;
            return (
              <img
                key={key}
                src={logoSrc}
                alt={key.toUpperCase()}
                className="h-12 mx-6 inline-block"
              />
            );
          })}
        </Marquee>
      </section>

      {/* ...footer, botón WhatsApp... */}
    </main>
  );
}
