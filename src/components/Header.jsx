import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex items-center justify-center px-4">
        <Link to="/">
          {/* La imagen está servida desde public/logo.png */}
          <img src="/logo.png" alt="Asegura2K25" className="h-12 md:h-16 mx-auto" />
        </Link>
        <h2 className="mt-2 text-xl">Encuentra el seguro que necesitas</h2>
      </div>
    </header>
  )
}
