# Template de Landing Page - Seguros de Salud

## 📋 Descripción

Esta es una template profesional y totalmente personalizable para asesores de seguros de salud. Todo el contenido se gestiona desde un único archivo de configuración.

## 🚀 Cómo Usar Esta Template

### 1. Archivos Principales

- **config.js** - Archivo de configuración (¡AQUÍ ES DONDE HACES TODOS LOS CAMBIOS!)
- **index.html** - Estructura de la página (no modificar)
- **styles.css** - Estilos (no modificar a menos que quieras cambiar colores/diseño)

### 2. Personalización Rápida

Abre el archivo **config.js** y modifica los siguientes valores:

#### 📱 Datos de Contacto

```javascript
contacto: {
    telefono: "34XXXXXXXXX",  // Tu número de WhatsApp (formato internacional)
    instagram: "tu_usuario",   // Tu usuario de Instagram (sin @)
    tiktok: "tu_usuario",      // Tu usuario de TikTok (sin @)
    facebook: "",              // Opcional: tu usuario de Facebook
    linkedin: "",              // Opcional: tu perfil de LinkedIn
}
```

#### 👤 Información Personal

```javascript
personal: {
    nombre: "Tu Nombre",
    titulo: "Asesora de Seguros de Salud",
    empresa: "Seguros Sanitas",
    fotoPerfil: "URL_DE_TU_FOTO",  // Imagen para la sección "Sobre Mí"
    fotoHero: "URL_DE_LA_IMAGEN"   // Imagen de cabecera
}
```

#### ✏️ Textos Principales

```javascript
textos: {
    heroTitulo: "Tu Asesora de Seguros de Salud",
    heroSubtitulo: "Especialista en seguros Sanitas",
    heroDescripcion: "Tu mensaje principal aquí...",
    sobreMiParrafo1: "Primera parte de tu presentación...",
    sobreMiParrafo2: "Segunda parte...",
    sobreMiParrafo3: "Tercera parte...",
}
```

### 3. Cómo Cambiar las Imágenes

Tienes dos opciones:

#### Opción A: Usar imágenes de tu ordenador

1. Crea una carpeta llamada "images" en tu proyecto
2. Guarda tus imágenes allí (ejemplo: "perfil.jpg", "hero.jpg")
3. En config.js, actualiza las rutas:

```javascript
fotoPerfil: "images/perfil.jpg",
fotoHero: "images/hero.jpg"
```

#### Opción B: Usar enlaces de internet

1. Sube tus imágenes a un servicio como Imgur, ImgBB, o tu propio hosting
2. Copia la URL de la imagen
3. Pégala en config.js:

```javascript
fotoPerfil: "https://tu-url-aqui.com/imagen.jpg",
```

### 4. Personalizar Contenido Adicional

#### Beneficios de Sanitas

Modifica el array `beneficiosSanitas` para cambiar las tarjetas de servicios:

```javascript
beneficiosSanitas: [
  {
    icono: "fa-hospital", // Iconos de Font Awesome
    titulo: "Red de Hospitales",
    descripcion: "Acceso a los mejores hospitales",
  },
  // Añade más o modifica
];
```

#### Testimonios

Edita el array `testimonios`:

```javascript
testimonios: [
  {
    estrellas: 5,
    texto: "Comentario del cliente...",
    autor: "María G.",
  },
  // Añade más testimonios
];
```

#### Preguntas Frecuentes

Modifica el array `preguntasFrecuentes`:

```javascript
preguntasFrecuentes: [
  {
    pregunta: "¿Tu pregunta aquí?",
    respuesta: "La respuesta aquí...",
  },
  // Añade más preguntas
];
```

### 5. Cambiar Colores (Opcional)

Si quieres personalizar los colores, edita el archivo **styles.css** al inicio:

```css
:root {
  --primary-color: #00a0df; /* Color principal */
  --secondary-color: #0077b6; /* Color secundario */
  --accent-color: #48cae4; /* Color de acento */
  --dark-color: #023e8a; /* Color oscuro */
}
```

### 6. Iconos Disponibles

Esta template usa Font Awesome. Busca más iconos en: https://fontawesome.com/icons

Ejemplos de iconos populares:

- `fa-hospital` - Hospital
- `fa-user-md` - Médico
- `fa-heart` - Corazón
- `fa-shield-alt` - Escudo
- `fa-star` - Estrella
- `fa-clock` - Reloj
- `fa-phone` - Teléfono
- `fa-envelope` - Email

### 7. Probar tu Web

1. Abre el archivo **index.html** en tu navegador
2. Verifica que todos los cambios se muestren correctamente
3. Prueba todos los enlaces de WhatsApp y redes sociales
4. Revisa en móvil para confirmar que se ve bien (responsive)

### 8. Publicar tu Web

Opciones gratuitas para publicar:

1. **GitHub Pages** (Recomendado)
   - Crea una cuenta en GitHub
   - Sube tus archivos
   - Activa GitHub Pages en la configuración

2. **Netlify**
   - Arrastra tu carpeta al sitio de Netlify
   - Obtendrás una URL automáticamente

3. **Vercel**
   - Similar a Netlify
   - Interfaz muy sencilla

## 📝 Consejos

- Usa imágenes de buena calidad pero optimizadas (no muy pesadas)
- Mantén los textos concisos y claros
- Actualiza tu número de WhatsApp en formato internacional
- Prueba todos los enlaces antes de publicar
- Toma fotos profesionales para tu perfil

## ⚠️ Importante

- **SIEMPRE** cambia el número de teléfono de WhatsApp
- Actualiza TODAS las redes sociales con tus usuarios reales
- Personaliza los textos para que reflejen tu personalidad
- Revisa que las imágenes se carguen correctamente

## 🆘 Problemas Comunes

**Las imágenes no se ven:**

- Verifica que las URLs sean correctas
- Asegúrate de que las imágenes sean públicas
- Comprueba que no haya espacios en las rutas

**Los enlaces de WhatsApp no funcionan:**

- Verifica que el formato sea correcto: 34XXXXXXXXX (sin espacios ni guiones)
- Asegúrate de incluir el código de país

**Los cambios no se ven:**

- Refresca la página (Ctrl + F5 o Cmd + Shift + R)
- Limpia la caché del navegador
- Asegúrate de haber guardado el archivo config.js

## 📧 Soporte

Esta template está diseñada para ser fácil de usar. Si tienes dudas:

1. Revisa este README
2. Verifica que hayas editado solo el archivo config.js
3. Comprueba que la sintaxis del JavaScript sea correcta (comas, comillas, etc.)

¡Buena suerte con tu landing page! 🚀
