# ⚡ SETUP CLIENTE NUEVO - ULTRA RÁPIDO

## 🎯 MÉTODO RECOMENDADO (5 MINUTOS)

### PASO 1: Prepara las fotos (1 min)

```
1. Recibe 2 fotos del cliente
2. Renómbralas como:
   - perfil.jpg  (su foto de perfil)
   - hero.jpg    (foto de cabecera)
3. Guárdalas en la carpeta "images/"
   (Si no existe la carpeta, créala)
```

### PASO 2: Copia la plantilla (10 seg)

```
1. Duplica: config-plantilla.js
2. Renómbralo como: config.js
3. Reemplaza el config.js actual
```

### PASO 3: Edita config.js (3 min)

```javascript
// Solo cambia estas líneas:

personal: {
    nombre: "María García López",      // ← NOMBRE CLIENTE
    titulo: "Asesora Seguros Sanitas", // ← SU TÍTULO
    empresa: "Seguros Sanitas",
    fotoPerfil: "images/perfil.jpg",   // ← Ya está correcto
    fotoHero: "images/hero.jpg",       // ← Ya está correcto
}

contacto: {
    telefono: "34612345678",    // ← SU WHATSAPP
    instagram: "maria_seguros", // ← SU USUARIO
    tiktok: "maria_seguros",    // ← SU USUARIO
}

textos: {
    heroTitulo: "María García - Experta en Seguros", // ← PERSONALIZAR
}
```

### PASO 4: Prueba (1 min)

```
1. Guarda config.js (Ctrl + S)
2. Abre index.html en Chrome
3. Verifica:
   ✓ Nombre correcto
   ✓ Fotos cargan
   ✓ Click WhatsApp → Abre chat del cliente
```

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
CV Nata/
│
├── images/               ← CREA ESTA CARPETA
│   ├── perfil.jpg       ← FOTO 1 DEL CLIENTE
│   └── hero.jpg         ← FOTO 2 DEL CLIENTE
│
├── config.js            ← EDITA ESTE ARCHIVO
├── config-plantilla.js  ← USA COMO BASE
├── index.html
└── styles.css
```

---

## ✏️ BÚSQUEDA Y REEMPLAZO RÁPIDO

Si usas editor de código con "Buscar y Reemplazar":

| BUSCAR                  | REEMPLAZAR POR     |
| ----------------------- | ------------------ |
| `[NOMBRE DEL CLIENTE]`  | María García López |
| `[TÍTULO PROFESIONAL]`  | Asesora de Seguros |
| `34[NÚMERO]`            | 34612345678        |
| `[usuario]` (Instagram) | maria_seguros      |
| `[usuario]` (TikTok)    | maria_seguros      |

Haz todos los reemplazos de una vez → Guarda → Listo

---

## 🎨 PERSONALIZACIÓN POR NIVEL

### ⚡ NIVEL EXPRESS (5 min)

```javascript
✓ nombre
✓ telefono
✓ fotoPerfil (images/perfil.jpg)
✓ fotoHero (images/hero.jpg)
✓ instagram
✓ heroTitulo
```

**YA FUNCIONA** ✅

---

### 🎨 NIVEL ESTÁNDAR (+10 min)

Además del express:

```javascript
✓ titulo (cargo del cliente)
✓ heroSubtitulo
✓ heroDescripcion
✓ tiktok / facebook / linkedin
```

**MÁS PROFESIONAL** ✅

---

### 💎 NIVEL PREMIUM (+20 min)

Además del estándar:

```javascript
✓ sobreMiParrafo1-3 (historia del cliente)
✓ testimonios (si tiene reales)
✓ preguntasFrecuentes (adaptadas)
```

**TOTALMENTE PERSONALIZADO** ✅

---

## 🚨 ERRORES COMUNES Y SOLUCIÓN

### ❌ "Las fotos no se ven"

**Causa:** Carpeta images/ no existe o fotos mal nombradas
**Solución:**

```
1. Verifica que existe: CV Nata/images/
2. Verifica nombres exactos: perfil.jpg y hero.jpg
3. Minúsculas, sin espacios
```

### ❌ "WhatsApp abre pero no es el cliente"

**Causa:** Número mal escrito en config.js
**Solución:**

```javascript
// Formato correcto:
telefono: "34612345678";

// Formato incorrecto:
telefono: "+34 612 345 678"; // ❌ Sin + ni espacios
telefono: "612345678"; // ❌ Falta código país
```

### ❌ "Instagram no funciona"

**Causa:** Usuario con @ o URL completa
**Solución:**

```javascript
// Correcto:
instagram: "maria_seguros";

// Incorrecto:
instagram: "@maria_seguros"; // ❌ Sin @
instagram: "instagram.com/maria..."; // ❌ Solo usuario
```

---

## ✅ CHECKLIST PRE-ENTREGA

Antes de decir "está listo":

- [ ] Fotos del cliente en images/
- [ ] Nombre correcto visible
- [ ] WhatsApp probado (click → abre chat)
- [ ] Instagram probado (click → abre perfil)
- [ ] TikTok probado (si lo usa)
- [ ] No aparece texto "[NOMBRE]" o "[usuario]"
- [ ] Probado en móvil
- [ ] Cliente ha visto y aprobado

---

## 💼 FLUJO PROFESIONAL

### PARA 1 CLIENTE:

```
1. Crea carpeta: images/
2. Guarda fotos: perfil.jpg, hero.jpg
3. Edita config.js (3 min)
4. Prueba
5. Entrega
```

### PARA MÚLTIPLES CLIENTES:

```
proyecto/
├── cliente1/
│   ├── images/
│   ├── config.js
│   └── index.html
│
├── cliente2/
│   ├── images/
│   ├── config.js
│   └── index.html
│
└── plantilla/ (copia de seguridad)
```

O usar estructura:

```
proyecto/
├── images/           (cambias fotos por cliente)
├── config.js         (cambias por cliente)
├── configs-backup/
│   ├── config-maria.js
│   ├── config-juan.js
│   └── config-ana.js
└── index.html
```

---

## 🎁 SCRIPTS ÚTILES

### Script Mental de Verificación

Busca estos textos en config.js antes de entregar:

- ❌ `[NOMBRE` → Reemplaza con nombre real
- ❌ `[TÍTULO` → Reemplaza con título real
- ❌ `[usuario]` → Reemplaza con usuario real
- ❌ `[NÚMERO]` → Reemplaza con número real

Si encuentras alguno, falta personalizarlo.

---

## 📞 PLANTILLA EMAIL PARA CLIENTE

```
Hola [Nombre],

Necesito los siguientes datos para tu web de seguros:

📝 DATOS:
• Nombre completo: _______________
• WhatsApp: +34 ___ ___ ___
• Instagram: @_______________
• TikTok: @_______________ (si usas)

📸 FOTOS (adjunta 2):
• 1 foto tuya de perfil (cuadrada)
• 1 foto para fondo de cabecera (horizontal)

✏️ TEXTOS (opcional ahora):
• ¿Cómo quieres que diga tu título principal?
  Ejemplo: "María García - Tu Experta en Seguros"

Con esto tendrás tu web lista en 24h.

Saludos,
[Tu nombre]
```

---

## ⚙️ AUTOMATIZACIÓN (AVANZADO)

Si manejas muchos clientes, considera:

### 1. Script de creación automática

```bash
# crear-cliente.sh
mkdir "cliente-$1"
cp -r plantilla/* "cliente-$1/"
echo "Cliente $1 creado. Edita config.js"
```

### 2. Lista de verificación automática

```javascript
// verificar.js
// Lee config.js y busca texto placeholder
// Alerta si encuentra "[" sin cerrar
```

### 3. Generador de screenshots

Usa herramientas como Playwright para capturar screenshots automáticos de la web de cada cliente.

---

## 🎓 NIVEL EXPERTO

### Multi-cliente con Git

```bash
# Rama por cliente
git checkout -b cliente-maria
# Edita config.js
git commit -m "Config María García"

git checkout -b cliente-juan
# Edita config.js
git commit -m "Config Juan López"

# Cambiar entre clientes:
git checkout cliente-maria  # Ver web de María
git checkout cliente-juan   # Ver web de Juan
```

---

## 📊 TIEMPOS REALES

| Tarea                    | Tiempo Real                    |
| ------------------------ | ------------------------------ |
| Recibir datos            | 5-60 min (depende del cliente) |
| Preparar fotos           | 2 min                          |
| Editar config.js         | 3 min                          |
| Verificar                | 1 min                          |
| **TOTAL MÍNIMO**         | **6 min**                      |
| Personalización completa | +15 min                        |
| Publicación              | +10 min                        |
| **TOTAL COMPLETO**       | **31 min**                     |

---

## 🚀 RESUMEN DE 1 LÍNEA

**Crea `images/`, guarda fotos, edita `config.js` (3 líneas), guarda, abre `index.html` → ¡Listo!**

---

## 💡 CONSEJO FINAL

**La primera vez te tomará 10-15 minutos.**
**Después de hacer 2-3 clientes, lo harás en 5 minutos.**

La clave es:

1. Pedir siempre el mismo formato de fotos
2. Usar nombres estándar (perfil.jpg, hero.jpg)
3. Tener config-plantilla.js listo
4. Usar búsqueda y reemplazo masivo

---

**¡En menos de 5 minutos tendrás la web del cliente funcionando!** ⚡

_Última actualización: Enero 2026_
