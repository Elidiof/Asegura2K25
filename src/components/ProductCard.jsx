// src/components/ProductCard.jsx
import { Link } from 'react-router-dom'

/**
 * Tarjeta de producto.
 * Cambia únicamente estilos para que contraste mejor con el fondo,
 * sin modificar tamaños de fuente ni añadir contenido extra.
 */
export default function ProductCard ({ to, icon, title }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center gap-3
                 rounded-2xl border border-slate-200 bg-white
                 p-6 text-center shadow-sm
                 transition hover:-translate-y-1
                 hover:shadow-md focus-visible:outline
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <img src={icon} alt={title} className="h-16 select-none" draggable="false" />
      <span className="text-base font-medium text-slate-800">{title}</span>
    </Link>
  )
}
