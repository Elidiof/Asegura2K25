import React from 'react';
import { Card, CardContent } from './components/ui/Card';
import { FaWhatsapp } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

// Íconos de producto
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

// Logos de aseguradoras (import estático)
import mapfre from './assets/cias/mapfre.svg';
import reale from './assets/cias/reale.svg';
import generali from './assets/cias/generali.svg';
import allianz from './assets/cias/allianz.svg';
import axa from './assets/cias/axa.svg';
import asisa from './assets/cias/asisa.png';
import dkv from './assets/cias/dkv.png';
import helvetia from './assets/cias/helvetia.svg';
import zurich from './assets/cias/zurich.svg';
import adeslas from './assets/cias/adeslas.svg';
import catalanaoccidente from './assets/cias/catalanaoccidente.svg';
import mutuamadrilena from './assets/cias/mutuamadrilena.svg';
import santalucia from './assets/cias/santalucia.svg';
import pelayo from './assets/cias/pelayo.png';
import aegon from './assets/cias/aegon.svg';
import plusultra from './assets/cias/plusultra.svg';
import hiscox from './assets/cias/hiscox.svg';

// Array de productos
const products = [
  { name: 'Hogar', icon: hogarIcon },
  { name: 'Vida', icon: vidaIcon },
  { name: 'Decesos', icon: decesosIcon },
  { name: 'Salud', icon: saludIcon },
  { name: 'Coche', icon: cocheIcon },
  { name: 'Taxi', icon: taxiIcon },
  { name: 'Cabeza tractora', icon: cabezaIcon },
  { name: 'Comunidad', icon: comunidadIcon },
  { name: 'Transporte de mercancías', icon: transporteIcon },
  { name: 'RC', icon: rcIcon },
];

// Mapa de logos
const logos = {
  mapfre,
  reale,
  generali,
  allianz,
  axa,
  asisa,
  dkv,
  helvetia,
  zurich,
  adeslas,
  catalanaoccidente,
  mutuamadrilena,
  santalucia,
  pelayo,
  aegon,
  plusultra,
  hiscox
};

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* BANNER */}
      <div className="bg-blue-900 text-white py-4 text-2xl font-bold text-center">
        ASEGURA2K25
      </div>

      <div className="flex-grow p-6 max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900">
            Encuentra el seguro que necesitas
          </h1>
          <p className="text-gray-600 mt-2">
            Trabajamos con las mejores aseguradoras en España
          </p>
          <a
            href="https://wa.me/34658945741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
          >
            Contáctanos vía WhatsApp
          </a>
        </header>

        {/* GRID DE PRODUCTOS */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {products.map((product) => (
            <Card
              key={product.name}
              className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
            >
              <CardContent className="flex flex-col items-center">
                <img src={product.icon} alt={product.name} className="h-12 w-12 mb-3" />
                <p className="text-sm font-medium text-gray-800">{product.name}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* CARRUSEL DE LOGOS */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
            Compañías aseguradoras con las que colaboramos
          </h2>
          <Marquee gradient={false} speed={50} pauseOnHover>
            {Object.entries(logos).map(([key, src]) => (
              <img
                key={key}
                src={src}
                alt={key.toUpperCase()}
                className="h-12 mx-6 inline-block"
              />
            ))}
          </Marquee>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p className="text-xl font-semibold">Elidio Ferrer</p>
        <p className="mt-2">
          Tel: <a href="tel:+34658945741" className="underline">658 945 741</a>
        </p>
        <p className="mt-2">
          Email: <a href="mailto:contacto@asegura2k25.com" className="underline">contacto@asegura2k25.com</a>
        </p>
        <p className="mt-2">
          Calle Pino, 27 · Andújar (Jaén) · CP 23740
        </p>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/34658945741"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}
