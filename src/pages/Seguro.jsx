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
  vida: {
    icon: '/logos/vida.png',
    description: 'Tranquilidad para ti y tu familia con nuestra gama de seguros de vida.',
    coverages: [
      'Capital asegurado en caso de fallecimiento',
      'Adelanto de capital por enfermedad grave terminal',
      'Invalidez absoluta y permanente (opcional)',
      'Asistencia familiar y testamento online',
      'Repatriación en caso de fallecimiento',
      'Servicios de orientación médica y psicológica'
    ],
    requirements: [
      'Nombre completo y fecha de nacimiento',
      'Capital que deseas asegurar',
      'Indicar si deseas incluir invalidez u otras coberturas',
      'Compañía aseguradora actual (si la hay)'
    ]
  },
  salud: {
    icon: '/logos/salud.png',
    description: 'Accede a la mejor asistencia médica y hospitalaria sin listas de espera.',
    coverages: [
      'Consultas médicas generales y especialistas',
      'Pruebas diagnósticas y análisis clínicos',
      'Hospitalización, intervenciones quirúrgicas y urgencias',
      'Acceso a cuadro médico privado sin listas de espera',
      'Asistencia médica telefónica 24/7',
      'Opcional: reembolso de gastos médicos y cobertura dental'
    ],
    requirements: [
      'Nombre completo y fecha de nacimiento',
      'Código postal de residencia',
      'Compañía aseguradora actual (si la hay)',
      'Si deseas incluir coberturas opcionales (dental, reembolso, etc.)'
    ]
  },
  alquiler: {
    icon: '/logos/alquiler.png',
    description: 'Protege tu vivienda de alquiler ante impagos y daños.',
    coverages: [
      'Impago de alquiler mensual hasta 12 meses',
      'Defensa jurídica y asistencia legal ilimitada',
      'Actos vandálicos al continente y mobiliario',
      'Gastos de cerrajero y cambio de cerradura',
      'Monitorio y desahucio por vía judicial'
    ],
    requirements: [
      'Dirección exacta del inmueble en alquiler',
      'Importe mensual del alquiler',
      'Tipo de contrato (habitual, vacacional, etc.)',
      'Antigüedad y estado del inquilino'
    ]
  },
  // ... resto de productos exactamente igual ...
}

export default function Seguro() {
  const { name } = useParams()
  const data = productData[name]

  if (!data) {
    return (
      <main className="container mx-auto p-4 mt-8 text-center">
        <Helmet>
          <title>Seguro no encontrado | Asegura2K25</title>
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
        <title>Asegura2K25 – Seguro</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <main className="container mx-auto p-4 mt-8 space-y-8">
        {/* Icono + volver atrás */}
        <div className="flex flex-col items-center">
          <img src={data.icon} alt="" className="h-20 mb-2" />
          <Link to="/" className="text-blue-600 hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        {/* Descripción */}
        <p className="text-center text-gray-700">{data.description}</p>

        {/* Coberturas */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
          <ul className="list-disc list-inside space-y-2">
            {data.coverages.map((cov, i) => (
              <li key={i}>{cov}</li>
            ))}
          </ul>
        </div>

        {/* Requisitos */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
          <ul className="list-disc list-inside space-y-2">
            {data.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
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
