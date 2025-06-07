import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto – Asegura2K25</title>
      </Helmet>
      <main className="max-w-7xl mx-auto p-6 space-y-8 pb-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-900">Contáctenos</h1>
          <nav className="mt-2">
            <Link
              to="/"
              className="underline text-gray-600 hover:text-gray-800"
            >
              ← Volver al inicio
            </Link>
          </nav>
        </header>

        <section className="bg-white rounded-2xl shadow p-6 space-y-6">
          <p className="text-gray-700 text-center text-lg">
            Contáctenos por WhatsApp o email y le responderemos lo antes posible
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/34658945741"
              className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-8 py-4 rounded-xl inline-flex items-center transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
              WhatsApp
            </a>
          </div>
          <p className="text-gray-700 text-center text-lg">
            O envíenos un email a
            <a
              href="mailto:contacto@asegura2k25.com"
              className="underline ml-1"
            >
              contacto@asegura2k25.com
            </a>
          </p>
        </section>
      </main>
    </>
  )
}
