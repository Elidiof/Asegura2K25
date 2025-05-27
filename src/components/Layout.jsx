// src/components/Layout.jsx
/**
 * Layout minimal para las páginas legales.
 * Solo envuelve el contenido y actualiza el título de la pestaña.
 * El Header y el Footer los renderiza App.jsx, así evitamos duplicarlos.
 */
import React from 'react'

export default function Layout ({ titulo = '', children }) {
  React.useEffect(() => {
    if (titulo) document.title = `${titulo} | Asegura2K25`
  }, [titulo])

  return (
    <main className="container mx-auto px-4 py-8">
      {children}
    </main>
  )
}