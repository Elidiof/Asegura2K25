/**
 * Datos completos de los 18 productos.
 */
const productData = {
  coche: {
    title: 'Seguro de Coche',
    icon: '/logos/coche.png',
    description: 'Conduce tranquilo, nosotros te respaldamos.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje desde el km 0',
      'Robo, incendio y lunas',
      'Colisión con animal y daños atmosféricos',
      'Daños propios con o sin franquicia'
    ],
    requirements: [
      'Envíanos fotografía del permiso de circulación y ficha técnica',
      'Envíanos fotografía del carnet de conducir (anverso y reverso)',
      'Envíanos póliza actual en PDF (o número de póliza y compañía)'
    ]
  },
  hogar: {
    title: 'Seguro de Hogar',
    icon: '/logos/hogar.png',
    description: 'Tu hogar, nuestra máxima prioridad.',
    coverages: [
      'Responsabilidad civil',
      'Daños por agua, fuego y fenómenos meteorológicos',
      'Robo en vivienda habitual',
      'Daños eléctricos y asistencia 24h'
    ],
    requirements: [
      'Dirección completa del inmueble',
      'Año de construcción y superficie',
      'Valor contenido y continente'
    ]
  },
  vida: {
    title: 'Seguro de Vida',
    icon: '/logos/vida.png',
    description: 'Protege el futuro de los tuyos.',
    coverages: [
      'Fallecimiento por cualquier causa',
      'Invalidez absoluta y permanente',
      'Asistencia psicológica y orientación legal',
      'Anticipo para gastos del sepelio'
    ],
    requirements: [
      'DNI o NIE del asegurado',
      'Formulario de salud',
      'Edad y profesión actual'
    ]
  },
  salud: {
    title: 'Seguro de Salud',
    icon: '/logos/salud.png',
    description: 'Accede a la mejor sanidad privada.',
    coverages: [
      'Cuadro médico completo y libre elección',
      'Hospitalización, pruebas y consultas',
      'Cobertura dental incluida',
      'Sin copagos (según modalidad)'
    ],
    requirements: [
      'DNI de todos los asegurados',
      'Formulario de salud por asegurado',
      'Código postal de residencia'
    ]
  },
  alquiler: {
    title: 'Seguro de Alquiler',
    icon: '/logos/alquiler.png',
    description: 'Protege tu vivienda y garantiza tus ingresos.',
    coverages: [
      'Impago de alquiler hasta 12 meses',
      'Actos vandálicos del inquilino',
      'Asistencia legal y desahucio',
      'Daños materiales por siniestro'
    ],
    requirements: [
      'DNI del propietario',
      'Contrato de alquiler',
      'IBI o escritura del inmueble'
    ]
  },
  empresas: {
    title: 'Seguro para Empresas',
    icon: '/logos/empresas.png',
    description: 'Coberturas a medida para tu negocio.',
    coverages: [
      'Responsabilidad civil general y patronal',
      'Daños materiales y lucro cesante',
      'Robo, incendio y agua',
      'Seguros para autónomos y sociedades'
    ],
    requirements: [
      'Datos fiscales de la empresa',
      'Actividad y superficie del local',
      'Valor del contenido y maquinaria'
    ]
  },
  responsabilidad: {
    title: 'Responsabilidad Civil',
    icon: '/logos/responsabilidad.png',
    description: 'Responde ante terceros con total tranquilidad.',
    coverages: [
      'RC general y de explotación',
      'RC profesional',
      'RC inquilinos y propietarios',
      'Defensa jurídica'
    ],
    requirements: [
      'Actividad o profesión',
      'Volumen estimado de ingresos',
      'Cobertura deseada'
    ]
  },
  accidentes: {
    title: 'Seguro de Accidentes',
    icon: '/logos/accidentes.png',
    description: 'Tu seguridad personal protegida ante cualquier imprevisto.',
    coverages: [
      'Indemnización por accidente grave',
      'Gastos médicos incluidos',
      'Cobertura 24/7 en todo el mundo',
      'Protección para autónomos y particulares'
    ],
    requirements: [
      'DNI o NIE del asegurado',
      'Cuestionario de salud básico',
      'Antigüedad laboral si es para autónomos'
    ]
  },
  mascotas: {
    title: 'Seguro para Mascotas',
    icon: '/logos/mascotas.png',
    description: 'Protección médica y legal para tu compañero peludo.',
    coverages: [
      'Asistencia veterinaria por accidente',
      'Cobertura por robo o extravío',
      'Responsabilidad civil',
      'Sacrificio y gastos de sepelio'
    ],
    requirements: [
      'Edad y raza del animal',
      'Cartilla veterinaria',
      'Microchip obligatorio'
    ]
  },
  tractora: {
    title: 'Seguro Cabeza Tractora',
    icon: '/logos/tractora.png',
    description: 'Diseñado para profesionales del transporte.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Asistencia en viaje específica para tractora',
      'Lunas, incendio, robo y daños propios',
      'Paralización opcional'
    ],
    requirements: [
      'Permiso de circulación y ficha técnica',
      'Carnet de conducir del titular',
      'Póliza anterior (si hay)'
    ]
  },
  transporte: {
    title: 'Transporte de Mercancías',
    icon: '/logos/transporte.png',
    description: 'Protege tus envíos en carretera, mar o aire.',
    coverages: [
      'Daños o pérdida de la carga',
      'Robo y vuelco',
      'Cobertura internacional',
      'Opciones para CMR, paquetería, ADR...'
    ],
    requirements: [
      'Tipo de mercancía',
      'Facturación anual',
      'Zona geográfica de cobertura'
    ]
  },
  agroseguro: {
    title: 'Agroseguro',
    icon: '/logos/agroseguro.png',
    description: 'Protección integral para agricultores y ganaderos.',
    coverages: [
      'Daños por climatología',
      'Pérdidas de producción',
      'Muerte de ganado',
      'Cobertura estatal subvencionada'
    ],
    requirements: [
      'Cultivo o actividad ganadera',
      'Localización de la finca',
      'CIF/NIF del titular'
    ]
  },
  comunidades: {
    title: 'Comunidades',
    icon: '/logos/comunidades.png',
    description: 'Protege el edificio y la convivencia.',
    coverages: [
      'Daños por agua, incendio, actos vandálicos',
      'RC comunidad, presidente y empleados',
      'Asistencia 24h',
      'Reclamación de impagos'
    ],
    requirements: [
      'Dirección del edificio',
      'Número de viviendas',
      'Año de construcción y superficie'
    ]
  },
  decesos: {
    title: 'Decesos',
    icon: '/logos/decesos.png',
    description: 'Tranquilidad para ti y tu familia.',
    coverages: [
      'Servicio funerario completo',
      'Traslado nacional e internacional',
      'Asistencia jurídica y psicológica',
      'Coberturas complementarias opcionales'
    ],
    requirements: [
      'Edad del asegurado',
      'Localidad de residencia',
      'Modalidad deseada'
    ]
  },
  taxi: {
    title: 'Taxi',
    icon: '/logos/taxi.png',
    description: 'Tu herramienta de trabajo siempre protegida.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Asistencia en viaje con vehículo de sustitución',
      'Daños propios y lunas',
      'Pérdida de ingresos por inmovilización'
    ],
    requirements: [
      'Permiso de circulación y ficha técnica',
      'Licencia de taxi',
      'Póliza anterior (si hay)'
    ]
  },
  moto: {
    title: 'Moto',
    icon: '/logos/moto.png',
    description: 'Disfruta de tu moto con total seguridad.',
    coverages: [
      'Responsabilidad civil y defensa jurídica',
      'Asistencia en carretera',
      'Robo e incendio',
      'Cobertura de equipación'
    ],
    requirements: [
      'Permiso de circulación y ficha técnica',
      'Carnet de conducir',
      'Póliza anterior si la hay'
    ]
  },
  patinete: {
    title: 'Patinete',
    icon: '/logos/patinete.png',
    description: 'Protección esencial para movilidad urbana.',
    coverages: [
      'RC obligatoria',
      'Daños a terceros',
      'Asistencia jurídica',
      'Cobertura nacional'
    ],
    requirements: [
      'Edad del conductor',
      'Tipo de uso (privado o laboral)',
      'Ciudad de circulación habitual'
    ]
  },
  instrumentos: {
    title: 'Instrumentos Musicales',
    icon: '/logos/instrumentos.png',
    description: 'Asegura tu instrumento frente a cualquier imprevisto.',
    coverages: [
      'Daños accidentales',
      'Robo dentro y fuera del domicilio',
      'Cobertura en giras o desplazamientos',
      'Valor convenido o reposición'
    ],
    requirements: [
      'Tipo de instrumento',
      'Valor asegurado',
      'Uso (aficionado o profesional)'
    ]
  }
}

export default productData
