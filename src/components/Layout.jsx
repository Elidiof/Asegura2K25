// src/components/Layout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav className="bg-blue-900 p-4 flex justify-center">
        {/* Ajuste de tamaño de logo */}
        <img src="/logo.svg" alt="Asegura2K25" className="h-16" />
      </nav>
      <Outlet />
    </div>
  )
}