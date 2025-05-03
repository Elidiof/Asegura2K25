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

const aseguradoras = [
  'MAPFRE', 'REALE', 'Generali', 'Allianz', 'AXA', 'Asisa', 'DKV', 'Helvetia', 'Zurich', 'Adeslas',
  'Catalana Occidente', 'Mutua Madrileña', 'Santalucía', 'Pelayo', 'Aegon', 'Plus Ultra Seguros', 'Hiscox'
];

export default function App() {
  return (
    <main className="min-h-screen p-0 text-center relative">
      {/* Banner superior */}
      <div className="bg-blue-900 text-white py-4 text-2xl font-bold">ASEGURA2K25</div>

      <div className="p-6">
        {/* Encabezado y llamada a WhatsApp */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-blue-900">Encuentra el seguro que necesitas</h1>
          <p className="text-gray-600 mt-2">Trabajamos con las mejores aseguradoras en España</p>
          <a
            href="https://wa.me/34658945741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          >
            Contáctanos vía WhatsApp
          </a>
        </header>

        {/* Productos con imagen */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {products.map((p) => (
            <Card key={p.name} className="text-center">
              <CardContent>
                <img src={p.icon} alt={p.name} className="h-12 w-12 mx-auto mb-2" />
                <p>{p.name}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Carrusel horizontal de logos */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Trabajamos con estas aseguradoras</h2>
          <Marquee gradient={false} speed={40} pauseOnHover>
            {aseguradoras.map((name, idx) => (
              <img
                key={idx}
                src={`/logos/${name.replace(/\s+/g, '').toLowerCase()}.png`}
                alt={name}
                className="h-12 mx-8 inline-block"
              />
            ))}
          </Marquee>
        </section>
      </div>

      {/* Pie con datos de contacto dentro de franja azul */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p className="text-xl font-semibold">Elidio Ferrer</p>
        <p className="mt-2">Tel: <a href="tel:+34658945741" className="underline">658 945 741</a></p>
        <p className="mt-2">Email: <a href="mailto:contacto@asegura2K25.com" className="underline">contacto@asegura2K25.com</a></p>
        <p className="mt-2">Calle Pino, 27 Andújar (Jaén) CP 23740</p>
      </footer>

      {/* Botón flotante WhatsApp a la derecha */}
      <a
        href="https://wa.me/34658945741"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}
