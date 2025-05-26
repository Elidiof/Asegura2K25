import React from 'react'
import { Link } from 'react-router-dom'

/*  Cabecera fija azul + onda degradada debajo  */
export default function Header() {
  return (
    <>
      {/* Barra fija */}
      <header className="sticky top-0 z-50 bg-brand-blue text-white shadow-md">
        <div className="container mx-auto flex items-center justify-center py-3">
          {/* Logo → ajusta la ruta si lo tienes en otra carpeta */}
          <Link to="/">
            <img
              src="/logos/logo.svg"
              alt="Asegura2K25"
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Onda decorativa */}
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-full -translate-y-px"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#f97316" />  {/* naranja */}
              <stop offset="70%"  stopColor="#fb7185" />  {/* rosa */}
              <stop offset="100%" stopColor="#ffffff" />  {/* se funde en blanco */}
            </linearGradient>
          </defs>
          <path
            d="M0 24L48 32C96 40 192 56 288 58.7C384 61 480 51 576 37.3C672 24 768 8 864 5.3C960 3 1056 13 1152 24C1248 35 1344 48 1392 54.7L1440 61V120H0Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>
    </>
  )
}
