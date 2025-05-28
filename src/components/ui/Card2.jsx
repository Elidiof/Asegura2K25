// src/components/ui/Card.jsx
import React from 'react'

/**
 * Card genérica para todo el sitio.
 * — Fondo gris muy claro (#fafafa = bg-gray-50)
 * — Borde gris (#e5e7eb = border-gray-200)
 * — Sombra suave (+ sombra mayor al hacer hover)
 * — Ligera “elevación” con transform para dar sensación de botón
 */
export function Card({ children, className = '' }) {
  return (
    <div
      className={`
        bg-gray-50 border border-gray-200 rounded-xl
        shadow-sm hover:shadow-lg
        transition transform hover:-translate-y-1
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
