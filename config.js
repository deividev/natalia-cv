// ============================================
// CONFIGURACIÓN DE LA PÁGINA WEB
// ============================================
// Modifica estos valores para personalizar tu web

const CONFIG = {
  // ===== DATOS PERSONALES =====
  personal: {
    nombre: "Tu Nombre",
    titulo: "Asesora de Seguros de Salud",
    empresa: "Seguros Sanitas",
    
    // IMÁGENES - Elige UNA de estas 2 opciones:
    // 
    // OPCIÓN A (RECOMENDADA): Guardar imágenes localmente
    // 1. Crea una carpeta llamada "images" en tu proyecto
    // 2. Guarda tus fotos ahí (ejemplo: perfil.jpg, hero.jpg)
    // 3. Usa rutas así:
    // fotoPerfil: "images/perfil.jpg",
    // fotoHero: "images/hero.jpg",
    //
    // OPCIÓN B: Usar URLs de internet
    // 1. Sube tus fotos a imgur.com o imgbb.com
    // 2. Copia la URL directa de la imagen
    // 3. Pégala aquí (como está ahora)
    
    fotoPerfil: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800",
    fotoHero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200",
    
    // EJEMPLOS:
    // Local: fotoPerfil: "images/mi-foto.jpg",
    // URL:   fotoPerfil: "https://i.imgur.com/abc123.jpg",
  },

  // ===== CONTACTO Y REDES SOCIALES =====
  contacto: {
    // WhatsApp: Formato internacional (34 para España, seguido del número sin espacios)
    telefono: "34608484371",
    // Redes sociales (solo el nombre de usuario, sin @)
    instagram: "tu_usuario",
    tiktok: "tu_usuario",
    // Para más opciones de redes, añade aquí:
    facebook: "", // Deja vacío si no usas
    linkedin: "", // Deja vacío si no usas
  },

  // ===== TEXTOS PRINCIPALES =====
  textos: {
    // Hero Section (primera sección)
    heroTitulo: "Tu Asesora de Seguros de Salud",
    heroSubtitulo: "Especialista en seguros Sanitas",
    heroDescripcion:
      "Te ayudo a encontrar el mejor seguro de salud adaptado a tus necesidades. Asesoramiento personalizado, sin compromiso y con total transparencia.",

    // Sección "Sobre Mí"
    sobreMiParrafo1:
      "Aquí puedes escribir tu presentación personal. Cuéntales a tus clientes quién eres, tu experiencia en el sector de seguros, qué te motivó a dedicarte a esto y por qué pueden confiar en ti.",
    sobreMiParrafo2:
      "Menciona tu formación, años de experiencia, número de clientes satisfechos, o cualquier dato relevante que genere confianza. También puedes hablar de tu filosofía de trabajo y compromiso con tus clientes.",
    sobreMiParrafo3:
      "Este espacio es para que te conectes personalmente con tus futuros clientes y generes cercanía y confianza.",

    // Año del footer
    añoActual: "2026",
  },

  // ===== BENEFICIOS DE SANITAS =====
  beneficiosSanitas: [
    {
      icono: "fa-hospital",
      titulo: "Red de Hospitales",
      descripcion: "Acceso a los mejores hospitales y clínicas",
    },
    {
      icono: "fa-user-md",
      titulo: "Especialistas",
      descripcion: "Amplio cuadro médico de profesionales",
    },
    {
      icono: "fa-clock",
      titulo: "Atención 24/7",
      descripcion: "Asistencia médica cuando la necesites",
    },
    {
      icono: "fa-shield-alt",
      titulo: "Cobertura Total",
      descripcion: "Planes adaptados a cada necesidad",
    },
  ],

  // ===== BENEFICIOS DEL ASESORAMIENTO =====
  beneficiosAsesoramiento: [
    "Estudio personalizado de tus necesidades",
    "Comparación de diferentes modalidades",
    "Asesoramiento sin coste adicional",
    "Gestión completa de tu póliza",
    "Atención continua post-venta",
  ],

  // ===== TESTIMONIOS =====
  testimonios: [
    {
      estrellas: 5,
      texto:
        "Excelente atención y asesoramiento. Me ayudó a encontrar el seguro perfecto para mi familia. Siempre disponible para resolver dudas. 100% recomendable.",
      autor: "María G.",
    },
    {
      estrellas: 5,
      texto:
        "Muy profesional y cercana. Comparó varias opciones y me explicó todo con claridad. Estoy muy contento con mi seguro de Sanitas.",
      autor: "Carlos R.",
    },
    {
      estrellas: 5,
      texto:
        "Gracias a su asesoramiento conseguí un seguro con mejor cobertura y precio. Su seguimiento post-venta es excelente.",
      autor: "Ana P.",
    },
  ],

  // ===== PREGUNTAS FRECUENTES =====
  preguntasFrecuentes: [
    {
      pregunta: "¿El asesoramiento tiene algún coste?",
      respuesta:
        "No, el asesoramiento es completamente gratuito. Te ayudo a encontrar el mejor seguro sin ningún coste adicional.",
    },
    {
      pregunta: "¿Cuánto tarda en activarse el seguro?",
      respuesta:
        "Una vez contratado, el seguro suele activarse en 24-48 horas. Te acompaño en todo el proceso de contratación.",
    },
    {
      pregunta: "¿Puedo cambiar de modalidad después?",
      respuesta:
        "Sí, puedes modificar tu póliza según tus necesidades. Te ayudo con cualquier cambio o ampliación de cobertura.",
    },
    {
      pregunta: "¿Qué cubre exactamente Sanitas?",
      respuesta:
        "Sanitas ofrece diferentes modalidades con coberturas que incluyen medicina general, especialistas, hospitalización, pruebas diagnósticas y más. Te ayudo a elegir la que mejor se adapte a ti.",
    },
    {
      pregunta: "¿Ofrecen descuentos para familias?",
      respuesta:
        "Sí, existen descuentos especiales para familias y grupos. Contacta conmigo para revisar las mejores opciones para tu caso.",
    },
  ],

  // ===== OPCIONES DEL FORMULARIO =====
  opcionesFormulario: [
    { valor: "", texto: "¿Qué te interesa?" },
    { valor: "individual", texto: "Seguro Individual" },
    { valor: "familiar", texto: "Seguro Familiar" },
    { valor: "dental", texto: "Seguro Dental" },
    { valor: "info", texto: "Información General" },
  ],
};

// No modifiques el código a partir de aquí
// ============================================

// Función para generar el enlace de WhatsApp
function getWhatsAppLink(
  mensaje = "Hola, me gustaría información sobre seguros Sanitas",
) {
  return `https://wa.me/${CONFIG.contacto.telefono}?text=${encodeURIComponent(mensaje)}`;
}

// Función para generar enlaces de redes sociales
function getSocialLink(red) {
  const links = {
    instagram: `https://instagram.com/${CONFIG.contacto.instagram}`,
    tiktok: `https://tiktok.com/@${CONFIG.contacto.tiktok}`,
    facebook: CONFIG.contacto.facebook
      ? `https://facebook.com/${CONFIG.contacto.facebook}`
      : null,
    linkedin: CONFIG.contacto.linkedin
      ? `https://linkedin.com/in/${CONFIG.contacto.linkedin}`
      : null,
  };
  return links[red];
}
