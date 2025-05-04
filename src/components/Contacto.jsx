// src/components/Contacto.jsx
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white rounded-2xl shadow p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Contáctenos
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        Contáctenos por WhatsApp o email y le responderemos lo antes posible
      </p>
      <div className="flex justify-center mb-4">
        <a
          href="https://wa.me/34658945741"
          className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-8 py-3 rounded-xl transition inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="mr-2 h-6 w-6" />
          WhatsApp
        </a>
      </div>
      <p className="text-center text-gray-900 font-semibold">
        O envíenos un email a{' '}
        <a
          href="mailto:contacto@asegura2k25.com"
          className="underline"
        >
          contacto@asegura2k25.com
        </a>
      </p>
    </section>
  )
}
