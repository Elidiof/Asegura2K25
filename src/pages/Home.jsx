// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData';

// Se han eliminado los componentes de iconos SVG ya que ahora se usan imágenes.

export default function Home() {
  // Se cargan los productos existentes desde el archivo de datos.
  const existingProducts = Object.keys(productData).map(key => ({
    link: `/seguro/${key}`,
    icon: productData[key].icon,
    title: productData[key].title,
  }));

  // Se definen los nuevos productos con las rutas a las imágenes.
  const newProducts = [
    {
      link: '/declarar-siniestro',
      icon: '/logos/Daa.png', // Ruta a tu imagen en la carpeta 'public'
      title: 'Declarar Siniestro Auto',
    },
    {
      link: '/asistencia-viaje',
      icon: '/logos/Asistencia.png', // Ruta a tu imagen en la carpeta 'public'
      title: 'Asistencia en Viaje',
    },
  ];

  // Se unen ambos arrays, poniendo los nuevos productos al principio.
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
