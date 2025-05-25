import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'

export default function Home() {
  const products = [ /* ... */ ]

  return (
    <>
      <Helmet>…</Helmet>
-     {/* ¡Este subtítulo ya no va aquí! */}
-     <h2 className="my-4 text-center text-2xl">Encuentra el seguro que necesitas</h2>
      <main className="container mx-auto p-4">
        {/* …grid de productos… */}
      </main>
    </>
  )
}
