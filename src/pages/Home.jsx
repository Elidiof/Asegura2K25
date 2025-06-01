// src/pages/Home.jsx

import { Helmet } from 'react-helmet-async'
import Marquee from 'react-fast-marquee'
import productData from '../data/productData'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const products = Object.entries(productData).map(([key, prod]) => ({
    slug: key,
    icon: prod.icon,
    title: prod.title.replace(/^Seguro de\s?/, ''),
  }))

  const companies = [
    'mapfre', 'reale', 'generali', 'allianz',
    'axa', 'asisa', 'dkv', 'helvetia', 'pelayo',
    'aegon', 'fiatc', 'hiscox', 'zurich',
    'adeslas', 'catalana-occidente', 'mutuamadrilena',
    'santalucia', 'qualitas', 'race', 'Occident'//,
    //'divina', 'segurmoto', 'mmt', 'cleverea'
  ]

  const formatTitle = slug =>
    slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())

  const mitad = Math.ceil(companies.length / 2)
  const rows = [
    companies.slice(0, mitad),
    companies.slice(mitad)
  ]

  return (
    <>
      <Helmet>
        <title>Asegura2K25 • Seguros a medida</title>
        <meta
          name="description"
          content="Encuentra el seguro que necesitas: coche, hogar, salud, empresa y más."
        />
      </Helmet>

      <section className="bg-slate-200 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Encuentra el seguro que necesitas
          </h1>
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

      <section className="bg-white py-8 mb-10">
        <div className="container mx-auto px-4 space-y-4">
          <h2 className="text-gray-700 text-center font-semibold text-lg sm:text-xl">
            Compañías aseguradoras con las que colaboramos
          </h2>

          {rows.map((row, idx) => (
            <div key={idx} className="overflow-hidden">
              <Marquee gradient={false} speed={30} pauseOnHover autoFill>
                {row.map((key, i) => {
                  const basePath = '/logos/'
                  const baseName = key === 'qualitas' ? 'qualitas-auto' : key

                  return (
                    <img
                      key={`${key}-${i}`}
                      src={`${basePath}${baseName}.webp`}
                      alt={formatTitle(key)}
                      className="inline-block h-12 mx-3 flex-shrink-0"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = `${basePath}${baseName}.svg`
                        setTimeout(() => {
                          if (e.target.src.includes('.svg')) {
                            e.target.onerror = null
                            e.target.src = `${basePath}${baseName}.png`
                          }
                        }, 100)
                      }}
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
