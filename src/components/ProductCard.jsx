// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

/**
 * Tarjeta de producto.
 * Modificada para que coincida con el diseño original (sin descripción ni "Saber más").
 * Mantiene la capacidad de usar enlaces externos y componentes SVG como iconos.
 */
export default function ProductCard({ link, icon, title, isExternal = false }) {
  const cardContent = (
    <>
      {/* Permite pasar tanto una ruta de imagen como un componente SVG */}
      {typeof icon === 'string' ? (
        <img src={icon} alt={title} className="h-16 select-none" draggable="false" />
      ) : (
        icon
      )}
      <span className="text-base font-medium text-slate-800">{title}</span>
    </>
  );

  const cardClasses = `
    flex flex-col items-center justify-center gap-3
    rounded-2xl border border-slate-200 bg-white
    p-6 text-center shadow-sm
    transition hover:-translate-y-1
    hover:shadow-md focus-visible:outline
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
  `;

  // Si es un enlace externo, usa una etiqueta <a>
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {cardContent}
      </a>
    );
  }

  // Si no, usa el componente <Link> de react-router-dom
  return (
    <Link to={link} className={cardClasses}>
      {cardContent}
    </Link>
  );
}
