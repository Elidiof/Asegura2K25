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

      {/* Hero dentro del fondo gris */}
      <section className="bg-slate-200 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-x2 font-bold text-center mb-10">Encuentra el seguro que necesitas</h1>

          {/* Grid de productos */}
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
