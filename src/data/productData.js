// src/data/productData.js
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
      'Colisión con animales y daños atmosféricos',
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
      'Daños por agua y rotura de tuberías',
      'Incendio, explosión y caída de rayo',
      'Rotura de cristales',
      'Robo y daños por intento de robo',
      'Daños estéticos',
      'Asistencia urgente 24 h (electricistas, fontaneros, cerrajeros...)',
      'Responsabilidad civil de mascotas'
    ],
    requirements: [
      'Proporciónanos la dirección completa del inmueble',
      'Indica año de reforma (si lo hubiese)',
      'Indícanos el valor aproximado del contenido',
      'Indícanos el tipo de ocupación (propietario, inquilino, segunda residencia)'
    ]
  },
  vida: {
    title: 'Seguro de Vida',
    icon: '/logos/vida.png',
    description: 'Cuida tu vida hoy, asegura tu futuro.',
    coverages: [
      'Capital asegurado en caso de fallecimiento',
      'Adelanto de capital por enfermedad grave terminal',
      'Invalidez absoluta y permanente (opcional)',
      'Asistencia familiar y testamento online',
      'Repatriación en caso de fallecimiento',
      'Servicios de orientación médica y psicológica'
    ],
    requirements: [
      'Indícanos nombre completo y fecha de nacimiento',
      'Indícanos capital a asegurar',
      'Especifica coberturas adicionales deseadas',
      'Indícanos compañía actual (si la hubiese)'
    ]
  },
  salud: {
    title: 'Seguro de Salud',
    icon: '/logos/salud.png',
    description: 'Protegemos tu salud, cuidamos de ti.',
    coverages: [
      'Consultas médicas generales y especialistas',
      'Pruebas diagnósticas y análisis clínicos',
      'Hospitalización y urgencias',
      'Acceso a cuadro médico privado',
      'Asistencia telefónica 24/7',
      'Reembolso de gastos médicos (opcional)'
    ],
    requirements: [
      'Indícanos nombre completo y fecha de nacimiento',
      'Indícanos tu código postal de residencia',
      'Indícanos compañía actual (si aplica)',
      'Especifica coberturas opcionales deseadas'
    ]
  },
  alquiler: {
    title: 'Seguro de Alquiler',
    icon: '/logos/alquiler.png',
    description: 'Alquila con tranquilidad y confianza.',
    coverages: [
      'Impago de alquiler mensual hasta 12 meses',
      'Defensa jurídica y asistencia legal ilimitada',
      'Cobertura de actos vandálicos',
      'Gastos de cerrajero y cambio de cerradura',
      'Monitorio y desahucio judicial'
    ],
    requirements: [
      'Indícanos la dirección exacta del inmueble',
      'Indícanos el importe mensual del alquiler',
      'Especifica tipo de contrato (habitual, vacacional)',
      'Indícanos antigüedad y estado del inquilino'
    ]
  },
  empresa: {
    title: 'Seguro para Empresas',
    icon: '/logos/empresa.png',
    description: 'Protección integral para tu empresa.',
    coverages: [
      'Responsabilidad civil por productos y servicios',
      'Pérdida de beneficios por paralización',
      'Asistencia urgente 24 h',
      'Daños materiales por incendio o agua',
      'Robo y vandalismo',
      'Defensa jurídica'
    ],
    requirements: [
      'Proporciónanos CIF y razón social',
      'Proporciónanos la dirección del local o nave',
      'Indícanos tipo de actividad',
      'Especifica facturación anual'
    ]
  },
  rc: {
    title: 'Seguro de Responsabilidad Civil',
    icon: '/logos/rc.png',
    description: 'Tu responsabilidad, nuestra cobertura.',
    coverages: [
      'Daños materiales o personales a terceros',
      'Defensa jurídica y fianzas judiciales',
      'RC patronal: accidentes laborales',
      'RC por explotación de actividad',
      'RC por productos o servicios',
      'RC inquilino o arrendador'
    ],
    requirements: [
      'Indícanos actividad profesional',
      'Proporciona la dirección completa',
      'Especifica la facturación anual',
      'Indica el número de empleados (si los hubiese)'
    ]
  },
  accidentes: {
    title: 'Seguro de Accidentes',
    icon: '/logos/accidentes.png',
    description: 'Respaldo inmediato ante cualquier imprevisto.',
    coverages: [
      'Indemnización por fallecimiento accidental',
      'Invalidez permanente parcial o total',
      'Gastos médicos derivados del accidente',
      'Asistencia sanitaria urgente',
      'Ayuda económica por hospitalización',
      'Asistencia y orientación médica'
    ],
    requirements: [
      'Proporciona nombre completo y fecha de nacimiento',
      'Indícanos actividad profesional',
      'Especifica el capital deseado',
      'Proporciona la compañía actual (si la hubiese)'
    ]
  },
  mascotas: {
    title: 'Seguro de Mascotas',
    icon: '/logos/mascotas.png',
    description: 'Tus animales, miembros de la familia con cobertura total.',
    coverages: [
      'Responsabilidad civil por daños a terceros',
      'Defensa jurídica y reclamación de daños',
      'Asistencia veterinaria por accidente',
      'Cobertura en caso de fallecimiento o extravío'
    ],
    requirements: [
      'Indícanos el nombre, apellidos y DNI del propietario',
      'Indícanos la raza, edad y nombre del animal',
      'Proporciona el número de microchip',
      'Proporciona la dirección de residencia'
    ]
  },
  "cabeza-tractora": {
    title: 'Seguro Cabeza Tractora',
    icon: '/logos/cabeza-tractora.png',
    description: 'Seguridad en ruta para tu tractora.',
    coverages: [
      'Responsabilidad civil obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo e incendio',
      'Lunas y asistencia en carretera',
      'Accidentes del conductor'
    ],
    requirements: [
      'Envíanos el permiso de circulación y ficha técnica',
      'Indica el uso (nacional o internacional)',
      'Especifica tipo de mercancías',
      'Envíanos póliza actual en PDF (o número de póliza y compañía)'
    ]
  },
  "transporte-mercancias": {
    title: 'Seguro de Transporte de Mercancías',
    icon: '/logos/transporte-mercancias.png',
    description: 'Tus mercancías aseguradas en cada viaje.',
    coverages: [
      'Todo riesgo opcional (ICC-A)',
      'Daños por accidente, robo o incendio',
      'Responsabilidad según CMR',
      'Daños por mojadura o mala estiba',
      'Cobertura nacional e internacional',
      'Gastos por paralización'
    ],
    requirements: [
      'Indícanos el tipo de mercancía',
      'Proporciona CIF o DNI',
      'Especifica alcance del transporte',
      'Indícanos el número de vehículos', 
      'Indícanos la facturación anual'
    ]
  },
  agroseguro: {
    title: 'Agroseguro',
    icon: '/logos/agroseguro.png',
    description: 'Protege tus cosechas y tu ganado ante cualquier imprevisto.',
    coverages: [
      'Daños en cultivos por pedrisco, lluvia o sequía',
      'Pérdida de producción o rendimiento',
      'Reposición de plantas dañadas',
      'Cobertura para ganado'
    ],
    requirements: [
      'Proporciona nombre, apellidos y DNI',
      'Indica parcela o explotación (SIGPAC)',
      'Especifica el tipo de cultivo o ganado',
      'Indica la ubicación y término municipal'
    ]
  },
  comunidades: {
    title: 'Seguro de Comunidades',
    icon: '/logos/comunidades.png',
    description: 'La tranquilidad de tu comunidad, garantizada.',
    coverages: [
      'Incendio, explosión y daños por agua',
      'Daños eléctricos y fenómenos atmosféricos',
      'Robo en zonas comunes',
      'Responsabilidad civil comunitaria',
      'Asistencia urgente 24 h'
    ],
    requirements: [
      'Proporciona la dirección completa del edificio',
      'Indica año de reforma'
    ]
  },
  decesos: {
    title: 'Seguro de Decesos',
    icon: '/logos/decesos.png',
    description: 'A tu lado cuando más lo necesites.',
    coverages: [
      'Servicio funerario completo',
      'Traslado nacional e internacional',
      'Gestión administrativa del fallecimiento',
      'Asistencia en viaje y repatriación',
      'Atención psicológica'
    ],
    requirements: [
      'Proporciona nombre, apellidos y fecha de nacimiento de los asegurados',
      'Indica código postal de residencia'
    ]
  },
  taxi: {
    title: 'Seguro de Taxi',
    icon: '/logos/taxi.png',
    description: 'Tu viaje seguro en cada trayecto.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Daños propios y colisión',
      'Robo, incendio y lunas',
      'Asistencia en carretera',
      'Accidentes del conductor'
    ],
    requirements: [
      'Envíanos el permiso de circulación y ficha técnica',
      'Envíanos el carnet de conducir vigente',
      'Envíanos la póliza actual o compañía'
    ]
  },
  moto: {
    title: 'Seguro de Moto',
    icon: '/logos/moto.png',
    description: 'Disfruta la carretera con total confianza.',
    coverages: [
      'RC obligatoria y voluntaria',
      'Defensa jurídica y reclamación de daños',
      'Asistencia en viaje',
      'Robo, incendio y lunas',
      'Daños propios'
    ],
    requirements: [
      'Envíanos el permiso de circulación y ficha técnica',
      'Envíanos el carnet de conducir vigente',
      'Envíanos la póliza actual o número de póliza y compañía'
    ]
  },
  patinete: {
    title: 'Seguro de Patinete',
    icon: '/logos/patinete.png',
    description: 'Movilidad urbana protegida sin complicaciones.',
    coverages: [
      'RC por daños a terceros',
      'Defensa jurídica',
      'Asistencia en viaje'
    ],
    requirements: [
      'Proporciónanos el nombre, apellidos y DNI',
      'Indícanos tu ciudad y código postal',
      'Proporciónanos foto del patinete'
    ]
  },
  "instrumentos-musicales": {
    title: 'Seguro de Instrumentos Musicales',
    icon: '/logos/instrumentos-musicales.png',
    description: 'Cuida tu música, protege tus instrumentos.',
    coverages: [
      'Robo o hurto en cualquier lugar',
      'Daños por accidente, incendio o agua',
      'Responsabilidad civil'
    ],
    requirements: [
      'Proporciónanos nombre, apellidos y DNI',
      'Indícanos el tipo y marca del instrumento',
      'Especifícanos el valor aproximado'
    ]
  }
};

export default productData;
