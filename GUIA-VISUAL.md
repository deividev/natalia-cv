# 🎨 GUÍA VISUAL DE PERSONALIZACIÓN

Esta guía te muestra exactamente **dónde aparece cada cosa** que editas en config.js

---

## 🖼️ SECCIÓN HERO (Cabecera)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [IMAGEN DE FONDO]  ← personal.fotoHero        │
│                                                 │
│  personal.empresa (arriba a la izquierda)      │
│                                                 │
│  ┌────────────────────────────────────┐       │
│  │  textos.heroTitulo                 │       │
│  │  (Título grande en blanco)         │       │
│  │                                     │       │
│  │  textos.heroSubtitulo               │       │
│  │  (Subtítulo en blanco)             │       │
│  │                                     │       │
│  │  textos.heroDescripcion             │       │
│  │  (Descripción más pequeña)         │       │
│  │                                     │       │
│  │  [📱 Contactar por WhatsApp]      │       │
│  │  (Botón con contacto.telefono)     │       │
│  └────────────────────────────────────┘       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Editas:**
- `personal.empresa` → Nombre en la barra superior
- `personal.fotoHero` → Imagen de fondo
- `textos.heroTitulo` → Título principal
- `textos.heroSubtitulo` → Subtítulo
- `textos.heroDescripcion` → Texto descriptivo
- `contacto.telefono` → Enlace del botón WhatsApp

---

## ⭐ SECCIÓN BENEFICIOS

```
┌─────────────────────────────────────────────────┐
│         ¿Por qué elegir Sanitas?                │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │     │
│  │  Título  │  │  Título  │  │  Título  │     │
│  │  Descr   │  │  Descr   │  │  Descr   │     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                 │
│  ← beneficiosSanitas (array)                   │
└─────────────────────────────────────────────────┘
```

**Editas:**
```javascript
beneficiosSanitas: [
    {
        icono: "fa-hospital",        // ← Ícono Font Awesome
        titulo: "Red de Hospitales",  // ← Título de la tarjeta
        descripcion: "Acceso a..."    // ← Descripción
    },
    // ... más tarjetas
]
```

---

## 👤 SECCIÓN SOBRE MÍ

```
┌─────────────────────────────────────────────────┐
│                 Sobre Mí                        │
│                                                 │
│  ┌────────┐    personal.nombre                 │
│  │ FOTO   │    personal.titulo                  │
│  │ PERFIL │                                     │
│  └────────┘    textos.sobreMiParrafo1          │
│  ↑              (primer párrafo)                │
│  personal.                                      │
│  fotoPerfil     textos.sobreMiParrafo2          │
│                 (segundo párrafo)               │
│                                                 │
│                 textos.sobreMiParrafo3          │
│                 (tercer párrafo)                │
└─────────────────────────────────────────────────┘
```

**Editas:**
- `personal.fotoPerfil` → Tu foto
- `personal.nombre` → Tu nombre
- `personal.titulo` → Tu cargo/especialidad
- `textos.sobreMiParrafo1` → Primera parte de tu historia
- `textos.sobreMiParrafo2` → Segunda parte
- `textos.sobreMiParrafo3` → Tercera parte

---

## 💬 SECCIÓN TESTIMONIOS

```
┌─────────────────────────────────────────────────┐
│        Lo Que Dicen Mis Clientes               │
│                                                 │
│  ┌────────────────┐  ┌────────────────┐       │
│  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │       │
│  │                │  │                │       │
│  │ "texto"        │  │ "texto"        │       │
│  │                │  │                │       │
│  │ - Autor        │  │ - Autor        │       │
│  └────────────────┘  └────────────────┘       │
│   ↑ testimonios[0]    ↑ testimonios[1]        │
└─────────────────────────────────────────────────┘
```

**Editas:**
```javascript
testimonios: [
    {
        estrellas: 5,                    // ← Número de estrellas
        texto: "Excelente atención...",  // ← Comentario
        autor: "María G."                // ← Nombre del cliente
    },
    // ... más testimonios
]
```

---

## ❓ SECCIÓN PREGUNTAS FRECUENTES

```
┌─────────────────────────────────────────────────┐
│           Preguntas Frecuentes                  │
│                                                 │
│  ▼ ¿Pregunta 1?                                │
│     Respuesta 1 (se despliega al hacer clic)   │
│                                                 │
│  ▶ ¿Pregunta 2?                                │
│                                                 │
│  ▶ ¿Pregunta 3?                                │
│     ↑ preguntasFrecuentes (array)              │
└─────────────────────────────────────────────────┘
```

**Editas:**
```javascript
preguntasFrecuentes: [
    {
        pregunta: "¿Tu pregunta aquí?",  // ← La pregunta
        respuesta: "Tu respuesta aquí..."  // ← La respuesta
    },
    // ... más preguntas
]
```

---

## 📧 SECCIÓN CONTACTO

```
┌─────────────────────────────────────────────────┐
│              Contáctame                         │
│                                                 │
│  ┌─────────────────┐  ┌──────────────────┐    │
│  │  FORMULARIO     │  │ [📱 WhatsApp]    │    │
│  │  - Nombre       │  │                   │    │
│  │  - Teléfono     │  │ [📷 Instagram]   │    │
│  │  - Email        │  │                   │    │
│  │  - Interés ←────┼──│ [🎵 TikTok]      │    │
│  │  - Mensaje      │  │      ↑            │    │
│  │  [Enviar]       │  │  contacto.        │    │
│  └─────────────────┘  │  instagram/       │    │
│   ↑ opcionesFormulario│  tiktok           │    │
└─────────────────────────────────────────────────┘
```

**Editas:**
- `contacto.telefono` → Número de WhatsApp
- `contacto.instagram` → Usuario de Instagram
- `contacto.tiktok` → Usuario de TikTok
- `contacto.facebook` → Usuario de Facebook (opcional)
- `contacto.linkedin` → Perfil de LinkedIn (opcional)
- `opcionesFormulario` → Opciones del menú desplegable

---

## 🔗 FOOTER (Pie de página)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│     [📱]  [📷]  [🎵]  [👍]  [💼]              │
│      ↑     ↑     ↑     ↑     ↑                 │
│    WhatsApp Instagram TikTok FB LinkedIn       │
│           (contacto.redes sociales)             │
│                                                 │
│  © textos.añoActual Asesoría de Seguros        │
│    personal.empresa                             │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Editas:**
- `contacto.telefono` → Link de WhatsApp
- `contacto.instagram` → Link de Instagram  
- `contacto.tiktok` → Link de TikTok
- `contacto.facebook` → Link de Facebook
- `contacto.linkedin` → Link de LinkedIn
- `personal.empresa` → Nombre de tu empresa
- `textos.añoActual` → Año actual

---

## 🎨 COLORES (styles.css)

Si quieres cambiar los colores, edita al inicio de **styles.css**:

```css
:root {
    --primary-color: #00a0df;    ← Color azul principal
    --secondary-color: #0077b6;  ← Color azul secundario
    --accent-color: #48cae4;     ← Color de acento (hover)
    --dark-color: #023e8a;       ← Color azul oscuro
    
    --whatsapp: #25D366;         ← Verde de WhatsApp
    --instagram: #E4405F;        ← Rosa de Instagram
    --tiktok: #000000;           ← Negro de TikTok
    --facebook: #1877F2;         ← Azul de Facebook
    --linkedin: #0A66C2;         ← Azul de LinkedIn
}
```

**Dónde se usan:**
- `primary-color` → Botones principales, títulos, iconos
- `secondary-color` → Degradados, efectos
- `accent-color` → Hover (cuando pasas el mouse)
- `dark-color` → Footer, textos oscuros

---

## 📱 VISTA EN MÓVIL

La web se adapta automáticamente:

```
DESKTOP (PC)              MÓVIL
┌────┬────┬────┐         ┌──────────┐
│ □  │ □  │ □  │         │    □     │
└────┴────┴────┘         └──────────┘
   3 columnas       →    ┌──────────┐
                          │    □     │
                          └──────────┘
                          ┌──────────┐
                          │    □     │
                          └──────────┘
                           1 columna
```

---

## 🔍 MAPA DE CONFIG.JS → PÁGINA WEB

```
CONFIG.JS                    →    PÁGINA WEB
─────────────────────────────────────────────────────

personal {
  nombre                     →    Sección "Sobre Mí"
  titulo                     →    Debajo del nombre
  empresa                    →    Header (barra superior)
  fotoPerfil                 →    Foto en "Sobre Mí"
  fotoHero                   →    Imagen de cabecera
}

contacto {
  telefono                   →    Botones de WhatsApp
  instagram                  →    Botón Instagram + Footer
  tiktok                     →    Botón TikTok + Footer
  facebook                   →    Botón Facebook + Footer
  linkedin                   →    Botón LinkedIn + Footer
}

textos {
  heroTitulo                 →    Título principal (grande)
  heroSubtitulo              →    Subtítulo (mediano)
  heroDescripcion            →    Descripción (pequeño)
  sobreMiParrafo1-3          →    Párrafos "Sobre Mí"
  añoActual                  →    Copyright en footer
}

beneficiosSanitas[]          →    Tarjetas con íconos
testimonios[]                →    Tarjetas de comentarios
preguntasFrecuentes[]        →    Acordeón de FAQs
beneficiosAsesoramiento[]    →    Lista con checks
opcionesFormulario[]         →    Menú desplegable
```

---

## ✅ VERIFICACIÓN VISUAL

Cuando abras **index.html**, deberías ver:

1. ✓ Tu nombre en la barra superior
2. ✓ Tu imagen de cabecera
3. ✓ Tu título personalizado
4. ✓ Botón de WhatsApp (pruébalo - debe abrir conversación contigo)
5. ✓ Tarjetas de beneficios
6. ✓ Tu foto de perfil
7. ✓ Tu presentación personal (3 párrafos)
8. ✓ Lista de beneficios con checks
9. ✓ Testimonios de clientes
10. ✓ Preguntas frecuentes (click para expandir)
11. ✓ Formulario de contacto
12. ✓ Botones de redes sociales
13. ✓ Íconos en el footer

Si ves algo de **"Tu Nombre"**, **"tu_usuario"** o **"34XXXXXXXXX"**
→ Necesitas editarlo en **config.js**

---

## 🎯 RESUMEN RÁPIDO

### Para cambiar TEXTOS → Edita `config.js` sección `textos`
### Para cambiar FOTOS → Edita `config.js` sección `personal`
### Para cambiar CONTACTO → Edita `config.js` sección `contacto`
### Para cambiar CONTENIDO → Edita `config.js` arrays correspondientes
### Para cambiar COLORES → Edita `styles.css` sección `:root`

---

**¡Con esta guía visual sabes exactamente qué editar y dónde aparece!** 🎨✨
