// src/pages/Home.jsx

import { Helmet } from 'react-helmet-async'
import Marquee from 'react-fast-marquee'
import productData from '../data/productData'
import ProductCard from '../components/ProductCard'

export default function Home() {
  /* ─────────────────────────────────────────
     Listado de productos que mostramos en la
     cuadrícula principal (tu código original)
  ────────────────────────────────────────── */
  // (productData es un objeto donde cada key es el slug y cada value contiene icon y title)
  const products = Object.entries(productData).map(([key, prod]) => ({
    slug: key,
    icon: prod.icon,
    title: prod.title.replace(/^Seguro de\s?/, ''),
  }))

  /* ─────────────────────────────────────────
     Compañías aseguradoras que animamos en
     el carrusel inferior
  ────────────────────────────────────────── */
  const companies = [
    'mapfre', 'reale', 'generali', 'allianz',
    'axa', 'asisa', 'dkv', 'helvetia',
    'pelayo', 'aegon', 'fiatc', 'hiscox', 'zurich',
    'adeslas', 'catalana-occidente', 'mutuamadrilena',
    'santalucia', 'qualitas', 'race'
  ]

  /* ─────────────────────────────────────────
     Convierte un slug (“cabeza-tractora”) en
     un título legible (“Cabeza Tractora”)
  ────────────────────────────────────────── */
  const formatTitle = slug =>
    slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())

  /* ─────────────────────────────────────────
     Partimos el array de compañías en dos
     filas para que sea más compacto
  ────────────────────────────────────────── */
  const mitad = Math.ceil(companies.length / 2)
  const rows = [
    companies.slice(0, mitad),
    companies.slice(mitad)
  ]

  return (
    <>
      {/* ─────── SEO: Helmet ─────── */}
      <Helmet>
        <title>Asegura2K25 • Seguros a medida</title>
        <meta
          name="description"
          content="Encuentra el seguro que necesitas: coche, hogar, salud, empresa y más."
        />
      </Helmet>

      {/* ─────── Hero + Grid de productos ─────── */}
      <section className="bg-slate-200 py-6">
        <div className="container mx-auto px-4">
          {/* Título principal */}
          <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Encuentra el seguro que necesitas
          </h1>

          {/* Grid de productos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map(({ slug, icon, title }) => (
              <ProductCard
                key={slug}
                to={`/seguro/${slug}`}
                icon={icon}
                title={title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────── Carrusel de compañías ─────── */}
      <section className="mb-10 space-y-4">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl mb-4">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={50} pauseOnHover>
                {[...row, ...row].map((key, i) => {
                  // Si el slug es 'qualitas', carga un nombre de fichero distinto
                  const file = key === 'qualitas'
                    ? 'qualitas-auto.webp'
                    : `${key}.svg`

                  return (
                    <img
                      key={`${key}-${i}`}
                      src={`/logos/${file}`}
                      alt={formatTitle(key)}
                      className="inline-block h-12 mx-3 flex-shrink-0"
                    />
                  )
                })}
              </Marquee>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
