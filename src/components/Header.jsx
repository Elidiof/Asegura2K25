import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-900 py-6 text-white">
      <div className="container mx-auto px-4 text-center">
        <Link to="/">
          <img src="/logo.png" alt="Asegura2K25" className="mx-auto h-[4.5rem] md:h-24" />
        </Link>
      </div>
    </header>
  )
}
