// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

/**
 * Tarjeta de producto.
 * Modificada para aceptar descripción y enlaces externos.
 */
export default function ProductCard({ link, icon, title, description, isExternal = false }) {
  // El contenido de la tarjeta es el mismo para ambos casos (enlace interno o externo)
  const cardContent = (
    <>
      <div className="flex-shrink-0">
        {/* Permite pasar tanto una ruta de imagen como un componente SVG */}
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="h-16 select-none" draggable="false" />
        ) : (
          icon
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-slate-800">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-slate-600">{description}</p>
        )}
      </div>
      <div className="mt-4 flex-shrink-0">
        <span className="text-blue-600 font-semibold group-hover:underline">
          Saber más &rarr;
        </span>
      </div>
    </>
  );

  const cardClasses = `
    group flex h-full flex-col items-center justify-center gap-3
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
