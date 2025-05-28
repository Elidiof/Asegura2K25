import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsButton() {
  return (
    <a
      href="https://wa.me/34658945741"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Contacto por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

export default WhatsButton