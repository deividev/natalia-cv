// ============================================
// EJEMPLOS DE CONFIGURACIÓN
// ============================================
// Copia y pega estos ejemplos en tu config.js

// ===== EJEMPLO 1: Configuración Completa =====
const EJEMPLO_COMPLETO = {
  personal: {
    nombre: "María García López",
    titulo: "Asesora de Seguros de Salud Certificada",
    empresa: "Seguros Sanitas",
    fotoPerfil: "images/maria-perfil.jpg",
    fotoHero: "images/hero-salud.jpg",
  },

  contacto: {
    telefono: "34612345678",
    instagram: "maria_seguros",
    tiktok: "mariaseguros",
    facebook: "maria.seguros.salud",
    linkedin: "maria-garcia-lopez",
  },

  textos: {
    heroTitulo: "María García - Tu Experta en Seguros de Salud",
    heroSubtitulo: "Más de 10 años ayudando a familias",
    heroDescripcion:
      "Como asesora certificada de seguros de salud, mi misión es ayudarte a encontrar la mejor cobertura para ti y tu familia. Asesoramiento gratuito, personalizado y sin compromisos.",

    sobreMiParrafo1:
      "Soy María García, asesora de seguros de salud con más de 10 años de experiencia en el sector. Mi pasión es ayudar a las personas a proteger lo más importante: su salud y la de sus seres queridos.",
    sobreMiParrafo2:
      "Me especializo en seguros Sanitas y he ayudado a más de 500 familias a encontrar la cobertura perfecta. Cuento con certificación profesional y actualización constante en productos de salud.",
    sobreMiParrafo3:
      "Mi filosofía de trabajo es simple: escuchar tus necesidades, explicar todas las opciones de forma clara y acompañarte en cada paso del proceso. Tu tranquilidad es mi prioridad.",

    añoActual: "2026",
  },
};

// ===== EJEMPLO 2: Solo WhatsApp e Instagram =====
const EJEMPLO_BASICO = {
  contacto: {
    telefono: "34677889900",
    instagram: "seguros_ana",
    tiktok: "ana_seguros",
    facebook: "", // Dejamos vacío si no usamos
    linkedin: "", // Dejamos vacío si no usamos
  },
};

// ===== EJEMPLO 3: Testimonios Variados =====
const EJEMPLO_TESTIMONIOS = {
  testimonios: [
    {
      estrellas: 5,
      texto:
        "María me ayudó a encontrar un seguro perfecto para toda mi familia. Su atención es excepcional y siempre está disponible para resolver dudas. Muy recomendable.",
      autor: "Laura M.",
    },
    {
      estrellas: 5,
      texto:
        "Profesional, cercana y con gran conocimiento del sector. Gracias a su asesoramiento tengo un seguro de calidad a buen precio.",
      autor: "Jorge P.",
    },
    {
      estrellas: 5,
      texto:
        "Me explicó todas las opciones con mucha claridad. El seguimiento post-venta es excelente. Sin duda la mejor decisión.",
      autor: "Carmen R.",
    },
    {
      estrellas: 5,
      texto:
        "Llevo 3 años trabajando con ella y no puedo estar más contento. Gestión rápida y eficiente de todo lo relacionado con mi póliza.",
      autor: "Roberto G.",
    },
  ],
};

// ===== EJEMPLO 4: Preguntas Frecuentes Personalizadas =====
const EJEMPLO_FAQ = {
  preguntasFrecuentes: [
    {
      pregunta: "¿Cobras comisión por tu asesoramiento?",
      respuesta:
        "No, mi asesoramiento es 100% gratuito. Me paga la compañía aseguradora, no tú. El precio de tu seguro es el mismo contratar directamente o a través de mí, pero con mi asesoramiento tienes apoyo personalizado.",
    },
    {
      pregunta: "¿Puedo cancelar mi seguro cuando quiera?",
      respuesta:
        "Sí, los seguros de salud se pueden cancelar cuando desees. Te ayudo con todos los trámites necesarios y te explico las condiciones de cancelación.",
    },
    {
      pregunta: "¿Qué pasa si tengo una urgencia médica?",
      respuesta:
        "Sanitas ofrece atención de urgencias 24/7 los 365 días del año. Te explico cómo funciona el servicio y qué hacer en caso de emergencia.",
    },
    {
      pregunta: "¿Puedo incluir a mi pareja e hijos?",
      respuesta:
        "Por supuesto. Los seguros familiares incluyen descuentos especiales. Estudio tu caso y te propongo la mejor opción para todos.",
    },
    {
      pregunta: "¿Tendré un contacto directo contigo después de contratar?",
      respuesta:
        "Sí, siempre. Soy tu asesora permanente. Cualquier cambio, duda o incidencia, me contactas directamente y yo lo gestiono.",
    },
  ],
};

// ===== EJEMPLO 5: Beneficios Personalizados =====
const EJEMPLO_BENEFICIOS_SANITAS = {
  beneficiosSanitas: [
    {
      icono: "fa-hospital",
      titulo: "40+ Hospitales Propios",
      descripcion: "Red exclusiva de centros médicos en toda España",
    },
    {
      icono: "fa-user-doctor",
      titulo: "25.000+ Especialistas",
      descripcion: "Los mejores profesionales a tu disposición",
    },
    {
      icono: "fa-mobile-screen",
      titulo: "App Móvil Sanitas",
      descripcion: "Gestiona citas y consultas desde tu smartphone",
    },
    {
      icono: "fa-stethoscope",
      titulo: "Medicina Preventiva",
      descripcion: "Chequeos anuales y programas de prevención",
    },
    {
      icono: "fa-tooth",
      titulo: "Opciones Dentales",
      descripcion: "Coberturas de odontología disponibles",
    },
    {
      icono: "fa-child",
      titulo: "Pediatría Especializada",
      descripcion: "Cuidado experto para los más pequeños",
    },
  ],
};

// ===== EJEMPLO 6: Opciones de Formulario Ampliadas =====
const EJEMPLO_FORMULARIO = {
  opcionesFormulario: [
    { valor: "", texto: "¿Qué tipo de seguro te interesa?" },
    { valor: "individual", texto: "Seguro de Salud Individual" },
    { valor: "familiar", texto: "Seguro de Salud Familiar" },
    { valor: "pareja", texto: "Seguro para Pareja" },
    { valor: "dental", texto: "Seguro Dental" },
    { valor: "completo", texto: "Seguro Completo (Salud + Dental)" },
    { valor: "cambio", texto: "Cambiar de Aseguradora" },
    { valor: "ampliacion", texto: "Ampliar Cobertura Actual" },
    { valor: "info", texto: "Solo Información General" },
  ],
};

// ===== EJEMPLO 7: URLs de Imágenes Profesionales Gratuitas =====
// Puedes usar estas mientras consigues tus propias fotos

const EJEMPLO_IMAGENES = {
  // Fotos de mujer profesional para perfil
  fotosPerfil: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800",
    "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800",
  ],

  // Fotos de hombre profesional para perfil
  fotosPerfilHombre: [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
  ],

  // Fotos para hero (cabecera)
  fotosHero: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200",
    "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1200",
  ],
};

// ===== EJEMPLO 8: Íconos Font Awesome Útiles =====
const EJEMPLO_ICONOS = {
  // Salud y Medicina
  salud: [
    "fa-heartbeat", // Latido del corazón
    "fa-heart-pulse", // Pulso
    "fa-stethoscope", // Estetoscopio
    "fa-user-doctor", // Médico
    "fa-syringe", // Jeringa
    "fa-pills", // Pastillas
    "fa-briefcase-medical", // Maletín médico
  ],

  // Servicios
  servicios: [
    "fa-hospital", // Hospital
    "fa-clinic-medical", // Clínica
    "fa-ambulance", // Ambulancia
    "fa-phone-medical", // Teléfono médico
    "fa-clock", // Reloj (24/7)
    "fa-calendar-check", // Citas
  ],

  // Familia
  familia: [
    "fa-users", // Grupo de personas
    "fa-child", // Niño
    "fa-baby", // Bebé
    "fa-person-breastfeeding", // Maternidad
    "fa-house-medical", // Casa médica
  ],

  // Beneficios
  beneficios: [
    "fa-shield-heart", // Protección
    "fa-check-circle", // Check
    "fa-star", // Estrella
    "fa-award", // Premio
    "fa-certificate", // Certificado
    "fa-thumbs-up", // Pulgar arriba
  ],

  // Tecnología
  tecnologia: [
    "fa-mobile-screen", // Móvil
    "fa-laptop-medical", // Portátil médico
    "fa-wifi", // Wifi
    "fa-video", // Videollamada
  ],

  // Contacto
  contacto: [
    "fa-phone", // Teléfono
    "fa-envelope", // Email
    "fa-message", // Mensaje
    "fa-comments", // Comentarios
    "fa-headset", // Auriculares (soporte)
  ],
};

// ===== TIPS IMPORTANTES =====
/*

1. NÚMEROS DE TELÉFONO:
   - Formato internacional: código país + número
   - España: 34 + número (sin espacios)
   - Ejemplo: "34612345678"

2. IMÁGENES:
   - Usa imágenes de buena calidad (mínimo 800px de ancho para perfil)
   - Para hero usa al menos 1200px de ancho
   - Optimiza el peso (usa herramientas como TinyPNG)

3. TEXTOS:
   - Sé auténtico y personal
   - Usa lenguaje claro y cercano
   - Destaca tus puntos fuertes
   - No uses textos genéricos

4. REDES SOCIALES:
   - Solo incluye las que uses activamente
   - Deja vacías ("") las que no uses
   - Mantén tus perfiles actualizados

5. TESTIMONIOS:
   - Usa testimonios reales si es posible
   - Incluye iniciales o nombres reales (con permiso)
   - Varía la longitud de los comentarios
   - 3-6 testimonios es lo ideal

6. PREGUNTAS FRECUENTES:
   - Responde dudas reales de tus clientes
   - Sé específico y claro
   - 4-8 preguntas es suficiente
   - Actualiza según las dudas que recibas

*/
