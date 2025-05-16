// src/components/Footer.jsx
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const contactData = [
  {
    icon: <FaMapMarkerAlt />, 
    text: 'Calle Pino 27, Andújar (Jaén) 23740',
    link: 'https://maps.app.goo.gl/z9Gq6t1j3RNKVJyG6'
  },
  {
    icon: <FaPhone />, 
    text: 'Teléfono / WhatsApp: 658 945 741',
    link: 'https://wa.me/34658945741'
  },
  {
    icon: <FaEnvelope />, 
    text: 'contacto@asegura2k25.com',
    link: 'mailto:contacto@asegura2k25.com'
  }
]

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 px-4 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        {contactData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {item.text}
            </a>
          </div>
        ))}

        <div className="mt-4">
          <a
            href="/legal.html"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition text-sm"
          >
            Legal
          </a>
        </div>

        <div className="mt-4 text-xs text-center text-gray-300">
          © 2025 ASEGURA2K25. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
