// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData'; // Reutilizamos tus datos existentes

// --- Iconos SVG para los nuevos productos ---
const DaaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" opacity="0.3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.5l-2 2.5 2 2.5" stroke="#3B82F6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15.5l2-2.5-2-2.5" stroke="#F59E0B" />
    </svg>
);

const GruaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4m16 0l-3-4H7L4 12m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0l-2-7h-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21a2 2 0 100-4 2 2 0 000 4zM19 21a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V4l4 4" />
    </svg>
);

export default function Home() {
  // Convertimos tus datos de producto en un array para poder mapearlos
  const existingProducts = Object.keys(productData).map(key => ({
    link: `/seguro/${key}`,
    icon: productData[key].icon,
    title: productData[key].title,
  }));

  // Definimos los nuevos productos
  const newProducts = [
    {
      link: 'https://asegura2k25.com/daa.html',
      icon: <DaaIcon />,
      title: 'Declarar Siniestro Auto', // <-- TÍTULO CAMBIADO
      isExternal: true,
    },
    {
      link: '/asistencia-viaje',
      icon: <GruaIcon />,
      title: 'Asistencia en Viaje',
    },
  ];

  // Unimos los arrays, poniendo los nuevos productos primero
  const allProducts = [...newProducts, ...existingProducts];

  return (
    <>
      <Helmet>
        <title>Asegura2K25 - Tu tranquilidad, nuestro compromiso</title>
        <meta name="description" content="Encuentra el seguro que necesitas. Seguros de coche, hogar, vida, salud y mucho más. Asesoramiento personalizado." />
      </Helmet>
      <main className="bg-slate-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Encuentra el seguro que necesitas
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {allProducts.map((product) => (
              <ProductCard
                key={product.title}
                link={product.link}
                icon={product.icon}
                title={product.title}
                isExternal={product.isExternal}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
