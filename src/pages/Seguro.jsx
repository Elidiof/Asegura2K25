// src/pages/Seguro.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const productData = {
  coche: {
    icon: '/logos/coche.png',
    description: 'Solicita tu seguro de coche. Trabajamos con las mejores compañías y te asesoramos.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje desde el km 0',
      'Robo, incendio y lunas',
      'Colisión con animal, daños atmosféricos',
      'Daños propios con o sin franquicia'
    ],
    requirements: [
      'Fotografía del permiso de circulación',
      'Fotografía de la ficha técnica',
      'Fotografía del carnet de conducir por ambas caras',
      'Foto de la póliza actual o número de póliza y nombre de la compañía'
    ]
  },
  hogar: {
    icon: '/logos/hogar.png',
    description: 'Protege tu hogar con coberturas a medida: incendio, robo y responsabilidad civil.',
    coverages: [
      'Responsabilidad civil',
      'Daños por agua y rotura de tuberías',
      'Incendio, explosión y caída de rayo',
      'Rotura de cristales',
      'Robo y daños por intento de robo',
      'Daños estéticos',
      'Asistencia urgente 24 h (electricistas, fontaneros, cerrajeros…)',
      'Responsabilidad civil de mascotas (cumpliendo la ley para perros)'
    ],
    requirements: [
      'Dirección completa del inmueble',
      'Año de reforma (si la hubiese)',
      'Valor aproximado del contenido',
      'Indícanos si se trata de tu vivienda habitual, segunda residencia, inquilino o propietario'
    ]
  },
  // ... resto de productos ...
}

export default function Seguro() {
  const { name } = useParams()
  const data = productData[name]

  if (!data) {
    return (
      <main className="container mx-auto p-4 mt-8 text-center">
        <Helmet>
          <title>Seguro no encontrado</title>
        </Helmet>
        <p className="text-xl mb-6">El seguro que buscas no existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Volver al inicio
        </Link>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>Seguro – Asegura2K25</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <main className="container mx-auto p-4 mt-8 space-y-8">
        {/* Icono y volver atrás */}
        <div className="flex flex-col items-center">
          <img src={data.icon} alt="" className="h-20 mb-2" />
          <Link to="/" className="text-blue-600 hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        {/* descripción */}
        <p className="text-center text-gray-700">{data.description}</p>

        {/* lista de coberturas */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
          <ul className="list-disc list-inside space-y-2">
            {data.coverages.map((cov, i) => (
              <li key={i}>{cov}</li>
            ))}
          </ul>
        </div>

        {/* lista de requisitos */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
          <ul className="list-disc list-inside space-y-2">
            {data.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* CTA WhatsApp / Email */}
        <div className="text-center">
          <p className="mb-4">Puedes enviarnos los datos por WhatsApp o por email</p>
          <div className="space-x-4">
            <a
              href="https://wa.me/34658945741"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Enviar por WhatsApp
            </a>
            <a
              href="mailto:contacto@asegura2k25.com"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Enviar por Email
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
