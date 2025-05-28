// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async'
import productData from '../data/productData'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Asegura2K25 • Seguros a medida</title>
      </Helmet>

      {/* Frase introductoria */}
      <section className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-3xl font-bold">Encuentra el seguro que necesitas</h1>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="bg-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Object.entries(productData).map(([key, prod]) => (
              <ProductCard
                key={key}
                to={`/seguro/${key}`}
                icon={prod.icon}
                title={prod.title.replace(/^Seguro de\s?/, '')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
