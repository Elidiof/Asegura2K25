import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <Link to="/">
          <img src="/logo.png" alt="Asegura2K25" className="h-[4.5rem] md:h-[6rem] mx-auto" />
        </Link>
      </div>
    </header>
  )
}
