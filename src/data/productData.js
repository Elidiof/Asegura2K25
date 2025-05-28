// src/data/productData.js
/**
 * Datos completos de los 18 productos.
 */
const productData = {
  coche: {
    title: 'Seguro de Coche',
    icon: '/logos/coche.png',
    description: 'Proteger el coche con cobertura integral y asistencia en viaje.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje desde el km 0',
      'Robo, incendio y lunas',
      'Colisión con animal, daños atmosféricos',
      'Daños propios con o sin franquicia'
    ],
    requirements: [
      'Proporcionar fotografía del permiso de circulación y ficha técnica',
      'Proporcionar fotografía del carnet de conducir (anverso y reverso)',
      'Proporcionar póliza actual en PDF (o número de póliza y compañía)'
    ]
  },
  hogar: {
    title: 'Seguro de Hogar',
    icon: '/logos/hogar.png',
    description: 'Proteger la vivienda frente a daños, robos y siniestros.',
    coverages: [
      'Responsabilidad civil',
      'Daños por agua y rotura de tuberías',
      'Incendio, explosión y caída de rayo',
      'Rotura de cristales',
      'Robo y daños por intento de robo',
      'Daños estéticos',
      'Asistencia urgente 24 h (electricistas, fontaneros, cerrajeros…)',
      'Responsabilidad civil de mascotas'
    ],
    requirements: [
      'Proporcionar dirección completa del inmueble',
      'Indicar año de reforma (si aplica)',
      'Proporcionar valor aproximado del contenido',
      'Indicar tipo de ocupación (propietario, inquilino, segunda residencia)'
    ]
  },
  vida: {
    title: 'Seguro de Vida',
    icon: '/logos/vida.png',
    description: 'Garantizar protección económica ante fallecimiento o invalidez.',
    coverages: [
      'Capital asegurado en caso de fallecimiento',
      'Adelanto de capital por enfermedad grave terminal',
      'Invalidez absoluta y permanente (opcional)',
      'Asistencia familiar y testamento online',
      'Repatriación en caso de fallecimiento',
      'Servicios de orientación médica y psicológica'
    ],
    requirements: [
      'Proporcionar nombre completo y fecha de nacimiento',
      'Indicar capital a asegurar',
      'Especificar coberturas adicionales deseadas',
      'Proporcionar compañía actual (si aplica)'
    ]
  },
  salud: {
    title: 'Seguro de Salud',
    icon: '/logos/salud.png',
    description: 'Acceder a asistencia médica y hospitalaria sin listas de espera.',
    coverages: [
      'Consultas médicas generales y especialistas',
      'Pruebas diagnósticas y análisis clínicos',
      'Hospitalización y urgencias',
      'Acceso a cuadro médico privado',
      'Asistencia telefónica 24 /7',
      'Reembolso de gastos médicos (opcional)'
    ],
    requirements: [
      'Proporcionar nombre completo y fecha de nacimiento',
      'Indicar código postal de residencia',
      'Proporcionar compañía actual (si aplica)',
      'Especificar coberturas opcionales deseadas'
    ]
  },
  alquiler: {
    title: 'Seguro de Alquiler',
    icon: '/logos/alquiler.png',
    description: 'Cubrir impagos y daños en viviendas de alquiler.',
    coverages: [
      'Impago de alquiler mensual hasta 12 meses',
      'Defensa jurídica y asistencia legal ilimitada',
      'Cobertura de actos vandálicos',
      'Gastos de cerrajero y cambio de cerradura',
      'Monitorio y desahucio judicial'
    ],
    requirements: [
      'Proporcionar dirección exacta del inmueble',
      'Indicar importe mensual del alquiler',
      'Especificar tipo de contrato (habitual, vacacional)',
      'Indicar antigüedad y estado del inquilino'
    ]
  },
  empresa: {
    title: 'Seguro para Empresas',
    icon: '/logos/empresa.png',
    description: 'Proteger el negocio ante riesgos y responsabilidad civil.',
    coverages: [
      'Responsabilidad civil por productos y servicios',
      'Pérdida de beneficios por paralización',
      'Asistencia urgente 24 h',
      'Daños materiales por incendio o agua',
      'Robo y vandalismo',
      'Defensa jurídica'
    ],
    requirements: [
      'Proporcionar CIF y razón social',
      'Proporcionar dirección del local o nave',
      'Indicar tipo de actividad',
      'Especificar facturación anual'
    ]
  },
  rc: {
    title: 'Seguro de Responsabilidad Civil',
    icon: '/logos/rc.png',
    description: 'Cubrir reclamaciones por daños a terceros.',
    coverages: [
      'Daños materiales o personales a terceros',
      'Defensa jurídica y fianzas judiciales',
      'RC patronal: accidentes laborales',
      'RC por explotación de actividad',
      'RC por productos o servicios',
      'RC inquilino o arrendador'
    ],
    requirements: [
      'Indicar actividad profesional',
      'Proporcionar dirección completa',
      'Especificar facturación anual',
      'Indicar número de empleados (si aplica)'
    ]
  },
  accidentes: {
    title: 'Seguro de Accidentes',
    icon: '/logos/accidentes.png',
    description: 'Indemnizar y asistir ante accidentes personales.',
    coverages: [
      'Indemnización por fallecimiento accidental',
      'Invalidez permanente parcial o total',
      'Gastos médicos derivados del accidente',
      'Asistencia sanitaria urgente',
      'Ayuda económica por hospitalización',
      'Asistencia y orientación médica'
    ],
    requirements: [
      'Proporcionar nombre completo y fecha de nacimiento',
      'Indicar actividad profesional',
      'Especificar capital deseado',
      'Proporcionar compañía actual (si aplica)'
    ]
  },
  mascotas: {
    title: 'Seguro de Mascotas',
    icon: '/logos/mascotas.png',
    description: 'Proteger mascotas con cobertura sanitaria y RC.',
    coverages: [
      'Responsabilidad civil por daños a terceros',
      'Defensa jurídica y reclamación de daños',
      'Asistencia veterinaria por accidente',
      'Cobertura en caso de fallecimiento o extravío'
    ],
    requirements: [
      'Proporcionar nombre y DNI del propietario',
      'Indicar raza, edad y nombre del animal',
      'Proporcionar número de microchip',
      'Proporcionar dirección de residencia'
    ]
  },
  "cabeza-tractora": {
    title: 'Seguro Cabeza Tractora',
    icon: '/logos/cabeza-tractora.png',
    description: 'Proteger cabezas tractoras ante robos, colisiones y asistencia.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo e incendio',
      'Lunas y asistencia en carretera',
      'Accidentes del conductor'
    ],
    requirements: [
      'Proporcionar permiso de circulación y ficha técnica',
      'Indicar uso (nacional o internacional)',
      'Especificar tipo de mercancías',
      'Proporcionar póliza actual o datos de la compañía'
    ]
  },
  "transporte-mercancias": {
    title: 'Seguro de Transporte de Mercancías',
    icon: '/logos/transporte-mercancias.png',
    description: 'Cubrir daños, robos y pérdidas en transporte de mercancías.',
    coverages: [
      'Todo riesgo opcional (ICC-A)',
      'Daños por accidente, robo o incendio',
      'Responsabilidad según CMR',
      'Daños por mojadura o mala estiba',
      'Cobertura nacional e internacional',
      'Gastos por paralización'
    ],
    requirements: [
      'Indicar tipo de mercancía',
      'Proporcionar CIF o DNI',
      'Especificar alcance del transporte',
      'Indicar número de vehículos'
    ]
  },
  agroseguro: {
    title: 'Agroseguro',
    icon: '/logos/agroseguro.png',
    description: 'Proteger cultivos y ganado frente a siniestros agrícolas.',
    coverages: [
      'Daños en cultivos por pedrisco, lluvia o sequía',
      'Pérdida de producción o rendimiento',
      'Reposición de plantas dañadas',
      'Cobertura para ganado'
    ],
    requirements: [
      'Proporcionar nombre y DNI',
      'Indicar parcela o explotación (SIGPAC)',
      'Especificar tipo de cultivo o ganado',
      'Indicar ubicación y término municipal'
    ]
  },
  comunidades: {
    title: 'Seguro de Comunidades',
    icon: '/logos/comunidades.png',
    description: 'Cubrir siniestros y responsabilidades en comunidades de vecinos.',
    coverages: [
      'Incendio, explosión y daños por agua',
      'Daños eléctricos y fenómenos atmosféricos',
      'Robo en zonas comunes',
      'Responsabilidad civil comunitaria',
      'Asistencia urgente 24 h'
    ],
    requirements: [
      'Proporcionar dirección completa del edificio',
      'Indicar año de reforma de tuberías'
    ]
  },
  decesos: {
    title: 'Seguro de Decesos',
    icon: '/logos/decesos.png',
    description: 'Ofrecer servicios funerarios y asistencia administrativa.',
    coverages: [
      'Servicio funerario completo',
      'Traslado nacional e internacional',
      'Gestión administrativa del fallecimiento',
      'Asistencia en viaje y repatriación',
      'Atención psicológica'
    ],
    requirements: [
      'Proporcionar nombre y fecha de nacimiento de asegurados',
      'Indicar código postal de residencia'
    ]
  },
  taxi: {
    title: 'Seguro de Taxi',
    icon: '/logos/taxi.png',
    description: 'Proteger vehículos de taxi con asistencia y RC.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo, incendio y lunas',
      'Asistencia en carretera',
      'Accidentes del conductor'
    ],
    requirements: [
      'Proporcionar permiso de circulación y ficha técnica',
      'Proporcionar carnet de conducir vigente',
      'Proporcionar póliza actual o compañía'
    ]
  },
  moto: {
    title: 'Seguro de Moto',
    icon: '/logos/moto.png',
    description: 'Cubrir moto y conductor con asistencia en viaje.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje',
      'Robo, incendio y lunas',
      'Daños propios'
    ],
    requirements: [
      'Proporcionar permiso de circulación y ficha técnica',
      'Proporcionar carnet de conducir vigente',
      'Proporcionar póliza actual o compañía'
    ]
  },
  patinete: {
    title: 'Seguro de Patinete',
    icon: '/logos/patinete.png',
    description: 'Proteger patinetes eléctricos con RC y asistencia.',
    coverages: [
      'RC por daños a terceros',
      'Defensa jurídica',
      'Asistencia en viaje'
    ],
    requirements: [
      'Proporcionar nombre y DNI',
      'Indicar ciudad y código postal',
      'Proporcionar foto del patinete'
    ]
  },
  "instrumentos-musicales": {
    title: 'Seguro de Instrumentos Musicales',
    icon: '/logos/instrumentos-musicales.png',
    description: 'Proteger instrumentos frente a robos y daños.',
    coverages: [
      'Robo o hurto en cualquier lugar',
      'Daños por accidente, incendio o agua',
      'Responsabilidad civil'
    ],
    requirements: [
      'Proporcionar nombre y DNI',
      'Indicar tipo y marca del instrumento',
      'Especificar valor aproximado'
    ]
  }
};

export default productData;
