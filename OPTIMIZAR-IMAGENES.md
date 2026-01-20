# 🚀 Guía de Optimización de Imágenes

## 📸 CRÍTICO: Para Performance 90-100 en Lighthouse

### 🎯 PASO 1: Convertir a WebP (Mejor formato)

**Herramienta Online Recomendada: Squoosh**

- URL: https://squoosh.app/
- Paso a paso:
  1. Arrastra tu imagen
  2. En el panel derecho selecciona: **WebP**
  3. Ajusta calidad a **80-85%**
  4. Ajusta tamaño:
     - Perfil: **400 × 400px**
     - Hero: **1200 × 800px**
  5. Descarga como `perfil.webp`

### 📐 Tamaños OBLIGATORIOS

**Foto Perfil:**

- Formato: WebP
- Dimensiones: 400px × 400px
- Peso máximo: 30KB
- Calidad: 80-85%

**Foto Hero (si usas local):**

- Formato: WebP
- Dimensiones: 1200px × 800px máximo
- Peso máximo: 100KB
- Calidad: 75-80%

### ✅ CHECKLIST de Optimización

1. [ ] Convertir imagen a WebP en Squoosh
2. [ ] Redimensionar al tamaño exacto
3. [ ] Verificar que pesa < 30KB (perfil) o < 100KB (hero)
4. [ ] Renombrar archivo: `perfil.webp`
5. [ ] Reemplazar en carpeta `/images`
6. [ ] Actualizar config.js con la nueva extensión

### 🔧 Actualizar config.js

```javascript
fotoPerfil: "images/perfil.webp",  // Cambia de .jpeg a .webp
```

### 💡 Si WebP no funciona en tu navegador

Usa JPEG optimizado:

1. En Squoosh selecciona: **MozJPEG**
2. Calidad: **75-80%**
3. Mismo proceso de redimensión
4. Peso: < 50KB perfil, < 150KB hero

### 📊 Comparación de Formatos

| Formato | Tamaño típico | Calidad   | Recomendado |
| ------- | ------------- | --------- | ----------- |
| WebP    | 20-30KB       | Excelente | ✅ SÍ       |
| JPEG    | 40-60KB       | Buena     | ⚠️ OK       |
| PNG     | 100-200KB     | Excelente | ❌ NO       |

### 🚀 Resultado Esperado

Después de optimizar:

- **Desktop Performance**: 95-100
- **Mobile Performance**: 90-95
- **Carga**: < 1 segundo

---

**IMPORTANTE:** WebP es el formato más ligero y mejor soportado.
Si tu imagen sigue pesando mucho, reduce más la calidad o el tamaño.
