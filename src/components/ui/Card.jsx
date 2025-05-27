import React from 'react'
import { Link } from 'react-router-dom'

export function Card({ product }) {
  const path = `/seguro-${product.name.toLowerCase().replace(/ /g, '-')}`

  return (
    <Link to={path}>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-4 text-center">
        <img src={product.icon} alt={product.name} className="mx-auto h-16 mb-2" />
        <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
      </div>
    </Link>
  )
}