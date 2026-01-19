// ============================================
// PLANTILLA DE CONFIGURACIÓN - CLIENTE NUEVO
// ============================================
// Duplica este archivo como "config.js" y personaliza

const CONFIG = {
  // ===== DATOS PERSONALES =====
  personal: {
    nombre: "[NOMBRE DEL CLIENTE]",
    titulo: "[TÍTULO PROFESIONAL]",
    empresa: "Seguros Sanitas",
    
    // IMPORTANTE: Guarda las fotos del cliente en la carpeta "images/"
    // con los nombres: perfil.jpg y hero.jpg
    fotoPerfil: "images/perfil.jpg",
    fotoHero: "images/hero.jpg",
  },

  // ===== CONTACTO Y REDES SOCIALES =====
  contacto: {
    telefono: "34[NÚMERO]",        // Ejemplo: 34612345678
    instagram: "[usuario]",         // Sin @
    tiktok: "[usuario]",            // Sin @
    facebook: "",                   // Opcional
    linkedin: "",                   // Opcional
  },

  // ===== TEXTOS PRINCIPALES =====
  textos: {
    heroTitulo: "[Nombre] - Tu Experta en Seguros de Salud",
    heroSubtitulo: "Especialista en seguros Sanitas",
    heroDescripcion: "Te ayudo a encontrar el mejor seguro de salud adaptado a tus necesidades. Asesoramiento personalizado, sin compromiso y con total transparencia.",
    
    // Personaliza estos después (o déjalos así para empezar)
    sobreMiParrafo1: "Soy [Nombre], asesora de seguros de salud con [X] años de experiencia. Mi pasión es ayudar a las personas a proteger lo más importante: su salud y la de sus seres queridos.",
    sobreMiParrafo2: "Me especializo en seguros Sanitas y he ayudado a más de [X] familias a encontrar la cobertura perfecta. Cuento con certificación profesional y actualización constante.",
    sobreMiParrafo3: "Mi filosofía de trabajo es simple: escuchar tus necesidades, explicar todas las opciones de forma clara y acompañarte en cada paso. Tu tranquilidad es mi prioridad.",
    
    añoActual: "2026"
  },

  // ===== BENEFICIOS DE SANITAS =====
  beneficiosSanitas: [
    {
      icono: "fa-hospital",
      titulo: "Red de Hospitales",
      descripcion: "Acceso a los mejores hospitales y clínicas"
    },
    {
      icono: "fa-user-md",
      titulo: "Especialistas",
      descripcion: "Amplio cuadro médico de profesionales"
    },
    {
      icono: "fa-clock",
      titulo: "Atención 24/7",
      descripcion: "Asistencia médica cuando la necesites"
    },
    {
      icono: "fa-shield-alt",
      titulo: "Cobertura Total",
      descripcion: "Planes adaptados a cada necesidad"
    }
  ],

  // ===== BENEFICIOS DEL ASESORAMIENTO =====
  beneficiosAsesoramiento: [
    "Estudio personalizado de tus necesidades",
    "Comparación de diferentes modalidades",
    "Asesoramiento sin coste adicional",
    "Gestión completa de tu póliza",
    "Atención continua post-venta"
  ],

  // ===== TESTIMONIOS =====
  testimonios: [
    {
      estrellas: 5,
      texto: "Excelente atención y asesoramiento. Me ayudó a encontrar el seguro perfecto para mi familia. Siempre disponible para resolver dudas. 100% recomendable.",
      autor: "María G."
    },
    {
      estrellas: 5,
      texto: "Muy profesional y cercana. Comparó varias opciones y me explicó todo con claridad. Estoy muy contento con mi seguro de Sanitas.",
      autor: "Carlos R."
    },
    {
      estrellas: 5,
      texto: "Gracias a su asesoramiento conseguí un seguro con mejor cobertura y precio. Su seguimiento post-venta es excelente.",
      autor: "Ana P."
    }
  ],

  // ===== PREGUNTAS FRECUENTES =====
  preguntasFrecuentes: [
    {
      pregunta: "¿El asesoramiento tiene algún coste?",
      respuesta: "No, el asesoramiento es completamente gratuito. Te ayudo a encontrar el mejor seguro sin ningún coste adicional."
    },
    {
      pregunta: "¿Cuánto tarda en activarse el seguro?",
      respuesta: "Una vez contratado, el seguro suele activarse en 24-48 horas. Te acompaño en todo el proceso de contratación."
    },
    {
      pregunta: "¿Puedo cambiar de modalidad después?",
      respuesta: "Sí, puedes modificar tu póliza según tus necesidades. Te ayudo con cualquier cambio o ampliación de cobertura."
    },
    {
      pregunta: "¿Qué cubre exactamente Sanitas?",
      respuesta: "Sanitas ofrece diferentes modalidades con coberturas que incluyen medicina general, especialistas, hospitalización, pruebas diagnósticas y más. Te ayudo a elegir la que mejor se adapte a ti."
    },
    {
      pregunta: "¿Ofrecen descuentos para familias?",
      respuesta: "Sí, existen descuentos especiales para familias y grupos. Contacta conmigo para revisar las mejores opciones para tu caso."
    }
  ],

  // ===== OPCIONES DEL FORMULARIO =====
  opcionesFormulario: [
    { valor: "", texto: "¿Qué te interesa?" },
    { valor: "individual", texto: "Seguro Individual" },
    { valor: "familiar", texto: "Seguro Familiar" },
    { valor: "dental", texto: "Seguro Dental" },
    { valor: "info", texto: "Información General" }
  ]
};

// ============================================
// FUNCIONES DEL SISTEMA (NO MODIFICAR)
// ============================================

function getWhatsAppLink(mensaje = "Hola, me gustaría información sobre seguros Sanitas") {
  return `https://wa.me/${CONFIG.contacto.telefono}?text=${encodeURIComponent(mensaje)}`;
}

function getSocialLink(red) {
  const links = {
    instagram: `https://instagram.com/${CONFIG.contacto.instagram}`,
    tiktok: `https://tiktok.com/@${CONFIG.contacto.tiktok}`,
    facebook: CONFIG.contacto.facebook ? `https://facebook.com/${CONFIG.contacto.facebook}` : null,
    linkedin: CONFIG.contacto.linkedin ? `https://linkedin.com/in/${CONFIG.contacto.linkedin}` : null
  };
  return links[red];
}
