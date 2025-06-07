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

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/34658945741?text=Hola%2C%20estoy%20contactando%20desde%20la%20web%20de%20Asegura2K25."
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-4 rounded-xl inline-flex items-center transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 .19 5.5.01 12.31A11.93 11.93 0 0 0 1.9 18.2L0 24l6.02-1.9a11.81 11.81 0 0 0 5.96 1.54h.05c6.63 0 12.01-5.38 12.01-12.01 0-3.2-1.25-6.22-3.52-8.35zM12 21.3a9.4 9.4 0 0 1-4.77-1.3l-.34-.2-3.57 1.13 1.14-3.48-.22-.36a9.42 9.42 0 0 1 1.3-11.43A9.32 9.32 0 0 1 12 2.6c5.17 0 9.39 4.22 9.39 9.39S17.17 21.3 12 21.3zm5.26-7.2c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15s-.74.93-.91 1.12c-.17.2-.34.22-.63.07s-1.22-.45-2.32-1.44a8.65 8.65 0 0 1-1.6-1.98c-.17-.29 0-.45.13-.6.13-.13.29-.34.43-.5.14-.15.2-.26.3-.44.1-.2.05-.37 0-.52s-.63-1.54-.86-2.1c-.22-.53-.45-.46-.63-.47H7.8c-.2 0-.52.07-.8.37-.28.29-1.06 1.03-1.06 2.5s1.1 2.89 1.25 3.09c.15.2 2.17 3.32 5.27 4.66.74.32 1.31.5 1.75.64.73.23 1.39.2 1.9.12.58-.09 1.7-.7 1.94-1.37.24-.66.24-1.23.17-1.37-.07-.13-.26-.2-.54-.35z" />
              </svg>
              WhatsApp
            </a>

            <a
              href="mailto:contacto@asegura2k25.com"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-6 py-4 rounded-xl inline-flex items-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99-8 5.01-8-5V6l8 5 8-5v2.99z" />
              </svg>
              Email
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
