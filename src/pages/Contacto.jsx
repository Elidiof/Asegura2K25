import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto – Asegura2K25</title>
      </Helmet>

      <header className="text-center bg-blue-900 py-6">
        <h1 className="text-4xl font-bold text-white">Contáctenos</h1>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8 pb-16">
        <section className="bg-white rounded-2xl shadow p-6 space-y-6 text-center">
          <p className="text-gray-700 text-lg">
            Contáctenos por WhatsApp o email y le responderemos lo antes posible
          </p>

          <div className="space-y-4">
            <a
              href="https://wa.me/34658945741"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-xl inline-block transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="mailto:contacto@asegura2k25.com"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-xl inline-block transition"
            >
              Enviar Email
            </a>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 underline text-sm font-medium"
            >
              ← Volver a la web
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
