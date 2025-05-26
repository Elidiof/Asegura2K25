const productData = {
  coche: {
    title: 'Seguro de Coche',
    icon: '/logos/coche.png',
    description: 'Solicita tu seguro de coche. Trabajamos con las mejores compañías y te asesoramos.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje desde el km 0',
      'Robo, incendio y lunas',
      'Colisión con animal y daños atmosféricos',
      'Daños propios con o sin franquicia'
    ],
    requirements: [
      'Permiso de circulación',
      'Ficha técnica',
      'Carnet de conducir (anverso / reverso)',
      'Póliza actual o nº de póliza y compañía'
    ]
  },

  hogar: {
    title: 'Seguro de Hogar',
    icon: '/logos/hogar.png',
    description: 'Protege tu hogar con coberturas a medida: incendio, robo y responsabilidad civil.',
    coverages: [
      'Responsabilidad civil',
      'Daños por agua',
      'Incendio, explosión y rayo',
      'Rotura de cristales',
      'Robo y vandalismo',
      'Daños estéticos',
      'Asistencia urgente 24 h'
    ],
    requirements: [
      'Dirección completa',
      'Año de reforma (si la hubo)',
      'Valor aproximado de contenido',
      '¿Vivienda habitual, segunda residencia, inquilino o propietario?'
    ]
  },

  vida: {
    title: 'Seguro de Vida',
    icon: '/logos/vida.png',
    description: 'Tranquilidad para ti y tu familia con nuestra gama de seguros de vida.',
    coverages: [
      'Capital en caso de fallecimiento',
      'Anticipo por enfermedad grave',
      'Invalidez absoluta y permanente',
      'Asistencia familiar y testamento on-line'
    ],
    requirements: [
      'Nombre y fecha de nacimiento',
      'Capital a asegurar',
      'Indicar si se quiere invalidez u otras coberturas'
    ]
  },

  salud: {
    title: 'Seguro de Salud',
    icon: '/logos/salud.png',
    description: 'Asistencia médica y hospitalaria sin listas de espera.',
    coverages: [
      'Consultas y especialidades',
      'Pruebas diagnósticas',
      'Hospitalización y urgencias',
      'Orientación médica 24/7'
    ],
    requirements: [
      'Nombre y fecha de nacimiento',
      'Código postal',
      'Compañía actual (si la hay)'
    ]
  },

  alquiler: {
    title: 'Seguro de Alquiler',
    icon: '/logos/alquiler.png',
    description: 'Protege tu vivienda de alquiler ante impagos y daños.',
    coverages: [
      'Impago de rentas hasta 12 meses',
      'Defensa jurídica',
      'Actos vandálicos',
      'Cambios de cerradura'
    ],
    requirements: [
      'Dirección del inmueble',
      'Importe mensual del alquiler',
      'Tipo de contrato'
    ]
  },

  empresa: {
    title: 'Seguro para Empresas',
    icon: '/logos/empresa.png',
    description: 'Coberturas integrales para proteger tu actividad empresarial.',
    coverages: [
      'RC explotación y productos',
      'Daños materiales',
      'Pérdida de beneficios',
      'Asistencia 24 h'
    ],
    requirements: [
      'CIF y razón social',
      'Dirección del local o nave',
      'Tipo de actividad',
      'Facturación anual'
    ]
  },

  rc: {
    title: 'Responsabilidad Civil',
    icon: '/logos/rc.png',
    description: 'Cobertura frente a reclamaciones de terceros.',
    coverages: [
      'Daños materiales o personales',
      'Defensa jurídica y fianzas',
      'RC patronal',
      'RC productos / post-trabajos'
    ],
    requirements: [
      'Actividad a cubrir',
      'Dirección del riesgo',
      'Facturación anual',
      'Número de empleados'
    ]
  },

  accidentes: {
    title: 'Seguro de Accidentes',
    icon: '/logos/accidentes.png',
    description: 'Coberturas para accidentes personales.',
    coverages: [
      'Indemnización por fallecimiento',
      'Invalidez permanente',
      'Gastos médicos por accidente'
    ],
    requirements: [
      'Nombre y fecha de nacimiento',
      'Actividad profesional',
      'Capital a asegurar'
    ]
  },

  mascotas: {
    title: 'Seguro de Mascotas',
    icon: '/logos/mascotas.png',
    description: 'Protege a tu mascota frente a accidentes y enfermedades.',
    coverages: [
      'RC obligatoria',
      'Gastos veterinarios (opcional)',
      'Asistencia 24 h'
    ],
    requirements: [
      'Datos del propietario',
      'Raza, edad y microchip',
      'Dirección de residencia'
    ]
  },

  'cabeza-tractora': {
    title: 'Seguro Cabeza Tractora',
    icon: '/logos/cabeza-tractora.png',
    description: 'Seguro específico para cabezas tractoras.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo e incendio'
    ],
    requirements: [
      'Permiso de circulación y ficha técnica',
      'Uso nacional o internacional',
      'Tipo de mercancías'
    ]
  },

  'transporte-mercancias': {
    title: 'Transporte de Mercancías',
    icon: '/logos/transporte-mercancias.png',
    description: 'Cobertura para transporte de mercancías.',
    coverages: [
      'Daños a la carga',
      'Robo y hurto',
      'RC transportista (CMR / LCTTM)'
    ],
    requirements: [
      'Tipo de mercancía',
      'Alcance del transporte',
      'Facturación anual'
    ]
  },

  agroseguro: {
    title: 'Agroseguro',
    icon: '/logos/agroseguro.png',
    description: 'Seguros para el sector agrícola.',
    coverages: [
      'Daños por pedrisco o sequía',
      'Pérdida de producción',
      'Seguro para ganado'
    ],
    requirements: [
      'Datos SIGPAC o explotación',
      'Tipo de cultivo o ganado',
      'Ubicación'
    ]
  },

  comunidades: {
    title: 'Seguro de Comunidades',
    icon: '/logos/comunidades.png',
    description: 'Cobertura para comunidades de propietarios.',
    coverages: [
      'Incendio y daños por agua',
      'Daños eléctricos',
      'Responsabilidad civil',
      'Asistencia 24 h'
    ],
    requirements: [
      'Dirección del edificio',
      'Año de construcción/reformas'
    ]
  },

  decesos: {
    title: 'Seguro de Decesos',
    icon: '/logos/decesos.png',
    description: 'Servicios funerarios y trámites.',
    coverages: [
      'Servicio funerario completo',
      'Traslado y repatriación',
      'Asistencia en viaje'
    ],
    requirements: [
      'Nombre y fecha de nacimiento asegurados',
      'Código postal'
    ]
  },

  taxi: {
    title: 'Seguro de Taxi',
    icon: '/logos/taxi.png',
    description: 'Seguro específico para taxis.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Daños propios',
      'Asistencia en carretera'
    ],
    requirements: [
      'Permiso de circulación',
      'Ficha técnica',
      'Carnet de conducir'
    ]
  },

  moto: {
    title: 'Seguro de Moto',
    icon: '/logos/moto.png',
    description: 'Cobertura para todo tipo de motocicletas.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Robo e incendio',
      'Asistencia en viaje'
    ],
    requirements: [
      'Permiso de circulación',
      'Ficha técnica',
      'Carnet de conducir'
    ]
  },

  patinete: {
    title: 'Seguro de Patinete',
    icon: '/logos/patinete.png',
    description: 'Protección para patinetes eléctricos.',
    coverages: [
      'Responsabilidad civil',
      'Daños personales del conductor',
      'Asistencia en caso de accidente'
    ],
    requirements: [
      'Datos del propietario',
      'Uso personal o profesional',
      'Foto del patinete (opcional)'
    ]
  },

  'instrumentos-musicales': {
    title: 'Instrumentos Musicales',
    icon: '/logos/instrumentos-musicales.png',
    description: 'Cobertura para tus instrumentos.',
    coverages: [
      'Robo o hurto mundial',
      'Daños por accidente',
      'Daños durante transporte'
    ],
    requirements: [
      'Tipo y marca del instrumento',
      'Valor aproximado',
      'Fotos del instrumento'
    ]
  }
}
