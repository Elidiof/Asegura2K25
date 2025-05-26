// src/pages/Seguro.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const productData = {
  coche: { /* … */ },
  hogar: { /* … */ },
  vida: { /* … */ },
  salud: { /* … */ },
  alquiler: { /* … */ },
  empresa: {
    // antes lo tenías como 'empresas', ahora singular como slug
    icon: '/logos/empresa.png',
    description: 'Coberturas integrales para proteger tu actividad empresarial.',
    coverages: [
      'Responsabilidad civil por productos y post-trabajos',
      'Pérdida de beneficios por paralización de la actividad',
      'Asistencia urgente 24 h (cerrajería, cristalería, fontanería…)',
      'Daños materiales por incendio, agua o fenómenos atmosféricos',
      'Robo, rotura de cristales y vandalismo',
      'Defensa jurídica y reclamación de daños'
    ],
    requirements: [
      'CIF y razón social de la empresa',
      'Dirección del local o nave',
      'Tipo de actividad',
      'Facturación anual aproximada'
    ]
  },
  rc:       { /* … */ },
  accidentes: { /* … */ },
  mascotas: { /* … */ },
  'cabeza-tractora': { /* … */ },
  'transporte-mercancias': {
    // sin acento
    icon: '/logos/transporte-mercancias.png',
    description: 'Cobertura para transporte de mercancías.',
    coverages: [
      'Cobertura opcional a todo riesgo (ICC-A – cláusulas inglesas)',
      'Daños a la mercancía por accidente, robo, hurto o incendio',
      'Responsabilidad del transportista según LCTTM / CMR',
      'Daños por mojadura, rotura o mala estiba (según condiciones)',
      'Cobertura en transporte nacional e internacional',
      'Gastos derivados por paralización o pérdida de portes'
    ],
    requirements: [
      'Tipo de mercancía transportada',
      'CIF y nombre de la empresa, o bien DNI si eres autónomo',
      'Alcance del transporte (nacional, internacional o ambos)',
      'Número de vehículos o matrículas',
      'Facturación anual aproximada'
    ]
  },
  agroseguro: { /* … */ },
  comunidades: { /* … */ },
  decesos:    { /* … */ },
  taxi:       { /* … */ },
  moto:       { /* … */ },
  patinete:   { /* … */ },
  'instrumentos-musicales': {
    icon: '/logos/instrumentos-musicales.png',
    description: 'Cobertura para tus instrumentos.',
    coverages: [
      'Robo o hurto del instrumento en cualquier parte del mundo',
      'Daños por accidente, incendio, agua o caída',
      'Daños durante transporte (avión, tren, coche…)',
      'Actos vandálicos en ensayos o actuaciones',
      'Responsabilidad civil por daños a terceros con el instrumento'
    ],
    requirements: [
      'Nombre completo y DNI',
      'Tipo y marca del instrumento',
      'Valor aproximado en euros',
      'Forma habitual de transporte y uso (particular, profesional…)',
      'Fotos del instrumento (frontal y lateral)'
    ]
  }
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
        <div className="flex flex-col items-center">
          <img src={data.icon} alt="" className="h-20 mb-2" />
          <Link to="/" className="text-blue-600 hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        <p className="text-center text-gray-700">{data.description}</p>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
          <ul className="list-disc list-inside space-y-2">
            {data.coverages.map((cov, i) => (
              <li key={i}>{cov}</li>
            ))}
          </ul>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
          <ul className="list-disc list-inside space-y-2">
            {data.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

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
