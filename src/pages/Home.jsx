
// src/pages/Home.jsx
import productData from '../data/productData'
import ProductCard from '../components/ProductCard'
import { Helmet } from 'react-helmet-async'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Asegura2K25</title>
      </Helmet>

      <section className="bg-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Object.entries(productData).map(([key, prod]) => (
              <ProductCard
                key={key}
                to={`/seguro/${key}`}
                icon={prod.icon}
                title={prod.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
