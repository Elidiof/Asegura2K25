// src/pages/Seguro.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const productData = {
  coche: {
    title: 'Seguro de Coche',
    icon: '/logos/coche.png',
    description: 'Solicita tu seguro de coche. Trabajamos con las mejores compañías.',
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
    title: 'Seguro de Hogar',
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
    title: 'Seguro de Vida',
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
    title: 'Seguro de Salud',
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
    title: 'Seguro de Alquiler',
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
  empresa: {
    title: 'Seguro para Empresas',
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
  rc: {
    title: 'Seguro de Responsabilidad Civil',
    icon: '/logos/rc.png',
    description: 'Cobertura frente a reclamaciones de terceros.',
    coverages: [
      'Daños materiales o personales a terceros',
      'Defensa jurídica y fianzas judiciales',
      'RC patronal: accidentes laborales de empleados',
      'RC por explotación de la actividad o local',
      'RC por productos o trabajos realizados (postventa)',
      'RC inquilino o arrendador (según caso)'
    ],
    requirements: [
      'Actividad profesional o tipo de riesgo a cubrir',
      'Dirección completa del negocio o inmueble',
      'Importe aproximado de facturación anual (si aplica)',
      'Número de empleados (si aplica)'
    ]
  },
  accidentes: {
    title: 'Seguro de Accidentes',
    icon: '/logos/accidentes.png',
    description: 'Coberturas para accidentes personales y terceros.',
    coverages: [
      'Indemnización por fallecimiento accidental',
      'Invalidez permanente parcial o total por accidente',
      'Gastos médicos derivados del accidente',
      'Asistencia sanitaria urgente',
      'Ayuda económica en caso de hospitalización',
      'Asistencia en viajes y orientación médica'
    ],
    requirements: [
      'Nombre completo y fecha de nacimiento',
      'Actividad profesional o tipo de trabajo',
      'Capital deseado para fallecimiento e invalidez',
      'Compañía aseguradora actual (si la hay)'
    ]
  },
  mascotas: {
    title: 'Seguro de Mascotas',
    icon: '/logos/mascotas.png',
    description: 'Protege a tu mascota frente a enfermedades y accidentes.',
    coverages: [
      'Responsabilidad civil por daños a terceros (obligatoria por ley)',
      'Defensa jurídica y reclamación de daños',
      'Asistencia veterinaria por accidente (opcional)',
      'Fallecimiento o extravío del animal (opcional)'
    ],
    requirements: [
      'Nombre completo y DNI del propietario',
      'Raza, edad y nombre del animal',
      'Número de microchip',
      'Dirección de residencia'
    ]
  },
  'cabeza-tractora': {
    title: 'Seguro Cabeza Tractora',
    icon: '/logos/cabeza-tractora.png',
    description: 'Seguro específico para cabezas tractoras.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo e incendio',
      'Lunas y asistencia en carretera desde el km 0',
      'Accidentes del conductor y defensa jurídica'
    ],
    requirements: [
      'Nombre completo y DNI si es persona física, o razón social y CIF si es empresa',
      'Permiso de circulación y ficha técnica',
      'Indicar si es uso nacional o internacional',
      'Tipo de mercancías transportadas habitualmente',
      'Foto de la póliza actual, o número de póliza y compañía'
    ]
  },
  'transporte-mercancias': {
    title: 'Seguro de Transporte de Mercancías',
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
      'CIF y nombre de la empresa, o bien DNI, nombre y apellidos si eres autónomo',
      'Alcance del transporte (nacional, internacional o ambos)',
      'Número de vehículos o matrículas',
      'Facturación anual aproximada'
    ]
  },
  agroseguro: {
    title: 'Agroseguro',
    icon: '/logos/agroseguro.png',
    description: 'Seguros para el sector agrícola.',
    coverages: [
      'Daños en cultivos por pedrisco, lluvia o sequía',
      'Cobertura por pérdida de producción o rendimiento',
      'Reposición de plantas o árboles dañados (según líneas)',
      'Seguro para ganado: accidentes, enfermedades y robo'
    ],
    requirements: [
      'Nombre completo y DNI',
      'Parcela o explotación agraria asegurada (SIGPAC)',
      'Tipo de cultivo o número de animales',
      'Ubicación y término municipal'
    ]
  },
  comunidades: {
    title: 'Seguro de Comunidades',
    icon: '/logos/comunidades.png',
    description: 'Coberturas para comunidades de vecinos.',
    coverages: [
      'Incendio, explosión y daños por agua',
      'Daños eléctricos y fenómenos atmosféricos',
      'Robo en zonas comunes y vandalismo',
      'Responsabilidad civil de la comunidad',
      'Reclamación de impagos a propietarios morosos',
      'Asistencia urgente 24 h'
    ],
    requirements: [
      'Dirección completa del edificio',
      'Año de reforma de tuberías, bajantes y canalizaciones'
    ]
  },
  decesos: {
    title: 'Seguro de Decesos',
    icon: '/logos/decesos.png',
    description: 'Servicios funerarios y trámites.',
    coverages: [
      'Prestación completa del servicio funerario',
      'Traslado nacional e internacional',
      'Gestión administrativa del fallecimiento',
      'Asistencia en viaje y repatriación',
      'Atención psicológica y testamento online',
      'Opción de devolución del capital no consumido'
    ],
    requirements: [
      'Nombre completo y fecha de nacimiento de todos los asegurados',
      'Código postal de residencia',
      'Compañía aseguradora actual (si la hay)',
      'Si deseas incluir servicios adicionales como asistencia en viaje'
    ]
  },
  taxi: {
    title: 'Seguro de Taxi',
    icon: '/logos/taxi.png',
    description: 'Seguro específico para vehículos de taxi.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo, incendio y lunas',
      'Asistencia en carretera desde km 0',
      'Accidentes del conductor'
    ],
    requirements: [
      'Fotografía del permiso de circulación',
      'Fotografía de la ficha técnica',
      'Fotografía del carnet de conducir por ambas caras',
      'Póliza actual, o número de póliza y nombre de compañía'
    ]
  },
  moto: {
    title: 'Seguro de Moto',
    icon: '/logos/moto.png',
    description: 'Cobertura para todo tipo de motocicletas.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje desde el km 0',
      'Robo, incendio y lunas',
      'Daños propios con o sin franquicia'
    ],
    requirements: [
      'Fotografía del permiso de circulación',
      'Fotografía de la ficha técnica',
      'Fotografía del carnet de conducir por ambas caras',
      'Foto de la póliza actual o número de póliza y nombre de compañía'
    ]
  },
  patinete: {
    title: 'Seguro de Patinete',
    icon: '/logos/patinete.png',
    description: 'Protección para patinetes eléctricos.',
    coverages: [
      'Responsabilidad civil por daños a terceros',
      'Defensa jurídica y fianzas',
      'Daños personales del conductor',
      'Asistencia en caso de accidente (según compañía)'
    ],
    requirements: [
      'Nombre completo y DNI',
      'Ciudad y código postal de circulación',
      'Uso personal o profesional',
      'Foto del patinete (si ya lo tienes)'
    ]
  },
  'instrumentos-musicales': {
    title: 'Seguro de Instrumentos Musicales',
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
      'Forma habitual de transporte (particular, profesional…)',
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
          <title>Seguro no encontrado</title>
        </Helmet>
        <h1 className="text-2xl font-semibold mb-4">Seguro no encontrado</h1>
        <p className="mb-6">El seguro que buscas no existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Volver al inicio
        </Link>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>{data.title} - Asegura2K25</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <main className="container mx-auto p-4 mt-8">
        {/* Icono y título */}
        <div className="flex flex-col items-center mb-6">
          <img src={data.icon} alt={data.title} className="h-20 mb-2" />
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <Link to="/" className="mt-2 text-blue-600 hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        {/* Descripción */}
        <p className="text-center text-gray-700 mb-8">{data.description}</p>

        {/* Coberturas */}
        <div className="max-w-2xl mx-auto mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">¿Qué cubre?</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.coverages.map((cov, i) => (
              <li key={i}>{cov}</li>
            ))}
          </ul>
        </div>

        {/* Requisitos */}
        <div className="max-w-2xl mx-auto mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            ¿Qué necesitamos para prepararte un presupuesto?
          </h2>
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
