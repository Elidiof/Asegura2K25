import React from 'react'
import logo from '../assets/logo.png' // Pon aquí la ruta real de tu imagen
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Si prefieres usar un <Link> alrededor del logo para volver al home */}
        <Link to="/">
          <img src={logo} alt="Asegura2K25" className="h-12 md:h-16" />
        </Link>
        {/* Aquí podrías añadir navitems u otro contenido si lo necesitas */}
      </div>
    </header>
  )
}
