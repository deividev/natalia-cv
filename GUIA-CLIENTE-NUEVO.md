# 🚀 GUÍA PARA CLIENTE NUEVO (5 MINUTOS)

Esta guía te permite configurar la web para un nuevo cliente en **menos de 5 minutos**.

---

## ✅ CHECKLIST EXPRESS

### 1️⃣ PREPARACIÓN (1 minuto)

**Pide al cliente:**
- [ ] Su nombre completo
- [ ] Su número de WhatsApp
- [ ] Sus usuarios de redes sociales (Instagram, TikTok, etc.)
- [ ] 2 fotos profesionales:
  - Foto de perfil (cuadrada, mínimo 800x800px)
  - Foto para cabecera (horizontal, mínimo 1920x1080px)

---

### 2️⃣ IMÁGENES (2 opciones - elige la más fácil)

#### 🟢 OPCIÓN A - LOCAL (Recomendado - Más fácil)

1. **Crea carpeta `images`** en el proyecto
2. **Guarda las fotos** del cliente como:
   - `perfil.jpg` (su foto de perfil)
   - `hero.jpg` (foto de cabecera)
3. **En config.js** ya está todo listo para usar rutas locales

```javascript
fotoPerfil: "images/perfil.jpg",
fotoHero: "images/hero.jpg",
```

#### 🔵 OPCIÓN B - ONLINE (Si prefieren URLs)

1. **Sube fotos** a [imgur.com](https://imgur.com) o [imgbb.com](https://imgbb.com)
2. **Copia la URL** directa de cada imagen
3. **Pega en config.js**

```javascript
fotoPerfil: "https://i.imgur.com/XXXXXX.jpg",
fotoHero: "https://i.imgur.com/YYYYYY.jpg",
```

---

### 3️⃣ CONFIG.JS (2 minutos)

Abre **`config.js`** y cambia SOLO estas secciones:

#### A) Datos Personales (líneas 7-30)
```javascript
personal: {
    nombre: "María García López",        // ← NOMBRE DEL CLIENTE
    titulo: "Asesora Seguros Sanitas",  // ← SU TÍTULO
    empresa: "Seguros Sanitas",          // ← EMPRESA
    fotoPerfil: "images/perfil.jpg",     // ← RUTA DE SU FOTO
    fotoHero: "images/hero.jpg",         // ← RUTA HERO
}
```

#### B) Contacto (líneas 32-42)
```javascript
contacto: {
    telefono: "34612345678",      // ← WHATSAPP (sin espacios)
    instagram: "maria_seguros",   // ← USUARIO (sin @)
    tiktok: "mariaseguros",       // ← USUARIO (sin @)
    facebook: "",                 // ← Opcional
    linkedin: "",                 // ← Opcional
}
```

#### C) Textos Hero (líneas 44-50)
```javascript
textos: {
    heroTitulo: "María García - Tu Experta en Seguros",
    heroSubtitulo: "Más de 10 años ayudando familias",
    heroDescripcion: "Asesoramiento personalizado...",
    // ... resto igual por ahora
}
```

---

### 4️⃣ VERIFICACIÓN (1 minuto)

1. **Guarda** config.js (Ctrl + S)
2. **Abre** index.html en navegador
3. **Verifica:**
   - [ ] ¿Aparece el nombre correcto?
   - [ ] ¿Las fotos cargan bien?
   - [ ] ¿El botón WhatsApp abre chat con el cliente?
   - [ ] ¿Los iconos de redes llevan a sus perfiles?

---

## 🎯 CONFIGURACIÓN MÍNIMA vs COMPLETA

### ⚡ MÍNIMA (5 min - para arrancar rápido)

Solo cambia:
- `personal.nombre`
- `personal.telefono`
- `personal.fotoPerfil`
- `personal.fotoHero`
- `contacto.telefono`
- `contacto.instagram`
- `textos.heroTitulo`

**✅ Ya funciona para el cliente**

---

### 🎨 COMPLETA (30 min - para entregar profesional)

Además de lo mínimo:
- Todos los textos en `textos`
- Testimonios personalizados
- FAQs adaptadas
- Beneficios específicos

**✅ Web totalmente personalizada**

---

## 📋 PLANTILLA DE DATOS DEL CLIENTE

Copia esto y envíaselo al cliente para que te dé la info:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DATOS PARA TU WEB DE SEGUROS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 CONTACTO:
─────────────
• Nombre completo: _______________________
• Título profesional: _______________________
• WhatsApp: +34 ___ ___ ___
• Instagram: @_______________________
• TikTok: @_______________________
• Facebook (opcional): _______________________
• LinkedIn (opcional): _______________________

📸 IMÁGENES:
─────────────
Por favor envía 2 fotos profesionales:
• Foto de perfil (cuadrada, calidad alta)
• Foto para cabecera (horizontal, calidad alta)

✏️ TEXTOS:
─────────────
• Título principal: _______________________
• Subtítulo: _______________________
• Descripción corta (2-3 líneas):
  _______________________________________
  _______________________________________

📝 SOBRE TI (opcional ahora, podemos añadir después):
──────────────────────────────────────────────────
• ¿Quién eres? (1 párrafo):
  _______________________________________
• Tu experiencia (1 párrafo):
  _______________________________________
• Por qué confiar en ti (1 párrafo):
  _______________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔄 PROCESO COMPLETO PARA NUEVO CLIENTE

### PASO 1: Recibe datos (usar plantilla arriba)
### PASO 2: Prepara imágenes
   - Opción A: Guarda en carpeta `images/`
   - Opción B: Sube a Imgur y copia URLs
### PASO 3: Abre config.js
### PASO 4: Cambia datos básicos (personal + contacto)
### PASO 5: Guarda y prueba en navegador
### PASO 6: Verifica botones WhatsApp y redes
### PASO 7: Si todo OK → Personaliza textos completos
### PASO 8: Verifica con CHECKLIST.md
### PASO 9: Publica

**Tiempo total: 5-30 minutos según nivel de personalización**

---

## 💡 TRUCOS PARA IR MÁS RÁPIDO

### 1. Usa plantillas predefinidas
Guarda configuraciones de clientes anteriores como referencia:
```
config-cliente1.js
config-cliente2.js
config-plantilla-basica.js
```

### 2. Script de reemplazo rápido
Crea un documento con los campos a buscar:
```
BUSCAR: "Tu Nombre"          → REEMPLAZAR: "María García"
BUSCAR: "34XXXXXXXXX"        → REEMPLAZAR: "34612345678"
BUSCAR: "tu_usuario"         → REEMPLAZAR: "maria_seguros"
```

### 3. Fotos estandarizadas
Pide siempre el mismo formato:
- Perfil: 800x800px, JPG, < 200KB
- Hero: 1920x1080px, JPG, < 500KB

Así puedes usar siempre `images/perfil.jpg` y `images/hero.jpg`

---

## 🎨 PERSONALIZACIÓN POR NIVELES

### NIVEL 1 - EXPRESS (5 min)
```javascript
✏️ Cambia SOLO:
- nombre
- telefono  
- fotoPerfil
- fotoHero
- instagram
- heroTitulo
```
**Resultado:** Web funcional básica

---

### NIVEL 2 - ESTÁNDAR (15 min)
```javascript
✏️ Añade:
- Todos los textos principales
- Redes sociales completas
- Ajusta heroDescripcion
```
**Resultado:** Web personalizada presentable

---

### NIVEL 3 - PREMIUM (30-60 min)
```javascript
✏️ Añade:
- Sección "Sobre Mí" completa
- Testimonios reales/personalizados
- FAQs adaptadas al cliente
- Beneficios específicos
```
**Resultado:** Web única y profesional

---

## ⚠️ ERRORES COMUNES (Y CÓMO EVITARLOS)

### ❌ Error: "WhatsApp abre pero no es el número del cliente"
**Solución:** Verifica `contacto.telefono` - debe ser formato: `34612345678`

### ❌ Error: "Las fotos no cargan"
**Solución:** 
- Si usas local: verifica que la carpeta `images/` existe
- Si usas URL: verifica que la imagen sea pública

### ❌ Error: "Instagram/TikTok llevan a perfil equivocado"
**Solución:** Revisa `contacto.instagram` y `contacto.tiktok` - solo usuario, sin @

### ❌ Error: "Aparece texto de ejemplo"
**Solución:** Busca en config.js y cambia todos los "Tu Nombre", "tu_usuario", etc.

---

## 📝 CHECKLIST PRE-ENTREGA

Antes de enviar/publicar la web del cliente:

- [ ] Nombre correcto en todas partes
- [ ] WhatsApp probado (abre chat con el cliente)
- [ ] Instagram probado (va a su perfil)
- [ ] TikTok probado (va a su perfil)
- [ ] Fotos cargan correctamente
- [ ] No hay texto de ejemplo visible
- [ ] Footer muestra año correcto
- [ ] Probado en móvil
- [ ] Probado en desktop
- [ ] Cliente ha revisado y aprobado

---

## 🎁 BONUS: AUTOMATIZACIÓN

### Script de verificación rápida (mental)

Cuando termines config.js, busca en el archivo:
- ❌ "Tu Nombre" → debe estar cambiado
- ❌ "tu_usuario" → debe estar cambiado
- ❌ "34XXXXXXXXX" → debe estar cambiado
- ❌ "unsplash.com" → (opcional) mejor usar fotos reales

Si encuentras alguno de estos, aún falta personalizarlo.

---

## 📊 TIEMPOS ESTIMADOS POR TAREA

| Tarea | Tiempo |
|-------|--------|
| Recibir datos del cliente | 5 min |
| Preparar imágenes | 3 min |
| Editar config.js (básico) | 5 min |
| Verificar funcionamiento | 2 min |
| Personalización completa | +20 min |
| Verificación final | 5 min |
| Publicación | 10 min |
| **TOTAL EXPRESS** | **15 min** |
| **TOTAL COMPLETO** | **50 min** |

---

## 🚀 FLUJO VISUAL

```
Cliente nuevo
     ↓
Enviar plantilla datos → [5 min]
     ↓
Recibir info + fotos → [Wait]
     ↓
Preparar imágenes → [3 min]
     ↓
Editar config.js → [5 min]
     ↓
Prueba local → [2 min]
     ↓
¿Todo OK?
     ↓ NO → Revisar y corregir
     ↓ SÍ
Personalización completa → [+20 min] (opcional)
     ↓
Verificación final → [5 min]
     ↓
Publicar → [10 min]
     ↓
¡Entregado! 🎉
```

---

## 💼 CONSEJOS PROFESIONALES

1. **Pide las fotos primero** - Es lo que más demora
2. **Ten plantillas de texto** - Para clientes sin ideas
3. **Prueba SIEMPRE el WhatsApp** - Es el botón más importante
4. **Haz backup del config.js** - Por si el cliente pide cambios
5. **Documenta lo que cambiaste** - Para futuras actualizaciones

---

## 📱 GESTIÓN DE MÚLTIPLES CLIENTES

### Estructura recomendada:

```
CV Nata/
│
├── index.html
├── styles.css
├── config.js (← activo)
│
└── configs-clientes/
    ├── config-maria-garcia.js
    ├── config-juan-lopez.js
    ├── config-ana-martinez.js
    └── config-plantilla.js
```

Para cambiar de cliente:
1. Copia `config-nuevo-cliente.js`
2. Pégalo y renombra como `config.js`
3. Listo, web del nuevo cliente activa

---

## ✅ ENTREGA AL CLIENTE

Incluye:
1. ✅ Carpeta completa del proyecto
2. ✅ Guía rápida (INICIO-RAPIDO.md)
3. ✅ Credenciales si publicaste (Netlify, etc.)
4. ✅ Instrucciones de cómo actualizar su info

**Archivo para el cliente:**
Crea `LEEME-CLIENTE.txt`:
```
Tu web está lista en: [URL]

Para actualizar tu información:
1. Abre el archivo config.js
2. Busca tu nombre, teléfono, etc.
3. Cambia lo que necesites
4. Guarda y sube el archivo

Si necesitas ayuda, contáctame.
```

---

## 🎉 RESUMEN ULTRA-RÁPIDO

```javascript
// 1. CREA CARPETA images/ Y GUARDA FOTOS
// 2. ABRE config.js
// 3. CAMBIA:

personal: {
    nombre: "NOMBRE CLIENTE",
    fotoPerfil: "images/perfil.jpg",
    fotoHero: "images/hero.jpg",
}

contacto: {
    telefono: "34XXXXXXXXX",
    instagram: "usuario",
}

// 4. GUARDA
// 5. ABRE index.html
// 6. ¡LISTO!
```

---

**¿Menos de 5 minutos y ya tienes la web del cliente funcionando!** ⚡

---

**Última actualización: Enero 2026**
