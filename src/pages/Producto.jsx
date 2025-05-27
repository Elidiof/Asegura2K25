
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Producto() {
  const { nombre } = useParams()
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Producto: {nombre}</h1>
      <p>Contenido del producto {nombre} aquí...</p>
    </div>
  )
}
