
// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async'
import productData from '../data/productData'
import ProductCard from '../components/ProductCard'
import hero from '/hero.jpg' // ajusta o elimina si no tienes imagen

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Asegura2K25 • Seguros a medida</title>
        <meta name="description" content="Comparador independiente con las mejores aseguradoras." />
      </Helmet>

      {/* HERO opcional */}
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Tu seguro al mejor precio</h1>
        <p className="max-w-2xl mx-auto">Trabajamos con Mapfre, Allianz, AXA, Generali y muchas más para ofrecerte la mejor póliza.</p>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">Nuestros seguros</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(productData).map(([key, prod]) => (
              <ProductCard
                key={key}
                to={`/seguro/${key}`}
                icon={prod.icon}
                title={prod.title.split(' ')[1] || prod.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
