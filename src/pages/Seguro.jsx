import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const productData = {
  coche: {
    title: 'Seguro de Coche',
    icon: '/logos/coche.png',
    description: 'Solicita tu seguro de coche en Andújar (Jaén). Trabajamos con las mejores compañías y te asesoramos gratis.',
    coverages: ['Responsabilidad civil obligatoria', 'Cobertura de lunas', 'Asistencia en carretera']
  },
  hogar: {
    title: 'Seguro de Hogar',
    icon: '/logos/hogar.png',
    description: 'Protege tu hogar con coberturas a medida: incendio, robo y responsabilidad civil.',
    coverages: ['Daños por agua', 'Robo y vandalismo', 'Responsabilidad civil']
  },
  vida: {
    title: 'Seguro de Vida',
    icon: '/logos/vida.png',
    description: 'Tranquilidad para ti y tu familia con nuestra gama de seguros de vida.',
    coverages: ['Capital asegurado', 'Asistencia sanitaria', 'Invalidez permanente']
  },
  salud: {
    title: 'Seguro de Salud',
    icon: '/logos/salud.png',
    description: 'Accede a la mejor asistencia médica y hospitalaria sin esperas.',
    coverages: ['Especialidades médicas', 'Pruebas diagnósticas', 'Hospitalización']
  },
  alquiler: {
    title: 'Seguro de Alquiler',
    icon: '/logos/alquiler.png',
    description: 'Protege tu vivienda de alquiler ante impagos y daños.',
    coverages: ['Impago de rentas', 'Reparaciones urgentes', 'Responsabilidad civil']
  },
  empresas: {
    title: 'Seguro para Empresas',
    icon: '/logos/empresas.png',
    description: 'Coberturas integrales para proteger tu actividad empresarial.',
    coverages: ['Multirriesgo', 'Responsabilidad civil', 'Protección jurídica']
  },
  rc: {
    title: 'Seguro de Responsabilidad Civil',
    icon: '/logos/rc.png',
    description: 'Cobertura frente a reclamaciones de terceros.',
    coverages: ['Daños personales', 'Daños materiales', 'Gastos judiciales']
  }
}

export default function Seguro() {
  const { name } = useParams()
  const data = productData[name]

  if (!data) {
    return (
      <main className="container mx-auto p-4 text-center">
        <Helmet>
          <title>Seguro no encontrado</title>
        </Helmet>
        <h1>Seguro no encontrado</h1>
        <p>El seguro que buscas no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>{data.title} - Asegura2K25</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <main className="container mx-auto p-4">
        <div className="flex items-center space-x-4 mb-6">
          <img src={data.icon} alt={data.title} className="h-16" />
          <h1 className="text-2xl font-bold">{data.title}</h1>
        </div>
        <p className="mb-4">{data.description}</p>
        <h2 className="text-xl font-semibold mb-2">Coberturas destacadas</h2>
        <ul className="list-disc list-inside mb-6">
          {data.coverages.map((cov, idx) => (
            <li key={idx}>{cov}</li>
          ))}
        </ul>
        <a
          href="https://wa.me/34658945741"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Pide tu oferta personalizada por WhatsApp
        </a>
      </main>
    </>
  )
}
