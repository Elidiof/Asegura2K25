
// src/components/ProductCard.jsx
import { Link } from 'react-router-dom'

/**
 * Tarjeta de producto reutilizable.
 * Props:
 *   - to: ruta del link (string)
 *   - icon: URL del icono (string)
 *   - title: texto a mostrar (string)
 */
export default function ProductCard ({ to, icon, title }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center justify-center gap-3
                 rounded-2xl bg-white/90 border border-slate-200
                 shadow-sm hover:shadow-md transition
                 hover:-translate-y-1 focus-visible:outline
                 focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-blue-600 p-6 text-center"
    >
      <img
        src={icon}
        alt={title}
        className="h-16 select-none transition-transform group-hover:scale-105"
        draggable="false"
      />
      <span className="text-sm font-medium text-slate-800">{title}</span>
    </Link>
  )
}
