# 🚀 GUÍA RÁPIDA DE INICIO - 5 MINUTOS

## Paso 1: Abre el archivo config.js

Este es el ÚNICO archivo que necesitas editar para personalizar tu web.

## Paso 2: Cambia tu información personal

Busca esta sección y modifica:

```javascript
personal: {
    nombre: "María García",              // ← Escribe tu nombre aquí
    titulo: "Asesora de Seguros",        // ← Tu título profesional
    empresa: "Seguros Sanitas",          // ← Nombre de tu empresa
    fotoPerfil: "TU_FOTO_AQUI",         // ← Ruta de tu foto
    fotoHero: "TU_FOTO_HERO_AQUI"       // ← Foto de cabecera
}
```

## Paso 3: Actualiza tu WhatsApp y redes sociales

```javascript
contacto: {
    telefono: "34612345678",    // ← Tu WhatsApp (IMPORTANTE)
    instagram: "tu_usuario",    // ← Tu usuario de Instagram
    tiktok: "tu_usuario",       // ← Tu usuario de TikTok
    facebook: "",               // ← Opcional
    linkedin: ""                // ← Opcional
}
```

### ⚠️ IMPORTANTE: Formato del teléfono
- Usa el formato internacional
- España: **34** + tu número (sin espacios)
- Ejemplo: Si tu móvil es 612 345 678, escribe: **34612345678**

## Paso 4: Personaliza tus textos

```javascript
textos: {
    heroTitulo: "Escribe aquí tu título principal",
    heroSubtitulo: "Tu subtítulo",
    heroDescripcion: "Describe qué ofreces...",
    
    sobreMiParrafo1: "Cuéntales quién eres...",
    sobreMiParrafo2: "Tu experiencia...",
    sobreMiParrafo3: "Por qué confiar en ti...",
}
```

## Paso 5: Guarda y prueba

1. **Guarda** el archivo config.js (Ctrl + S o Cmd + S)
2. **Abre** index.html en tu navegador
3. **Verifica** que todo se vea correctamente
4. **Prueba** hacer clic en el botón de WhatsApp

## ✅ Checklist de Verificación

Antes de publicar, asegúrate de:

- [ ] Cambié mi nombre y título
- [ ] Actualicé mi número de WhatsApp
- [ ] Puse mis usuarios de redes sociales
- [ ] Cambié todos los textos predeterminados
- [ ] Subí mis propias fotos (o elegí fotos profesionales)
- [ ] Probé el botón de WhatsApp (¿abre una conversación contigo?)
- [ ] Revisé la web en el móvil
- [ ] Todos los enlaces funcionan correctamente

## 🎯 Siguiente Nivel (Opcional)

Una vez que tengas lo básico:

1. **Personaliza testimonios**: Añade comentarios reales de clientes
2. **Ajusta las FAQs**: Responde las preguntas que te hacen frecuentemente
3. **Modifica beneficios**: Adapta los servicios a tu oferta específica
4. **Cambia colores**: Edita styles.css para usar tus colores de marca

## 📱 ¿Cómo Subir Mis Fotos?

### Opción A: Fotos locales
1. Crea una carpeta "images" donde están tus archivos
2. Guarda tus fotos ahí (ejemplo: "perfil.jpg")
3. En config.js escribe: `fotoPerfil: "images/perfil.jpg"`

### Opción B: Fotos en Internet
1. Sube tu foto a imgur.com o imgbb.com
2. Copia el enlace directo de la imagen
3. Pégalo en config.js

## ❓ Problemas Comunes

**"No veo mis cambios"**
→ Refresca la página con Ctrl + F5

**"El WhatsApp no funciona"**
→ Verifica que el número esté en formato: 34XXXXXXXXX

**"Las imágenes no cargan"**
→ Revisa que la URL sea correcta y la imagen sea pública

**"Algo se rompió"**
→ Revisa que no falten comillas (") o comas (,) en config.js

## 🆘 ¿Necesitas Ayuda?

1. Lee el README.md completo
2. Revisa ejemplos-config.js para inspirarte
3. Verifica la sintaxis de tu código JavaScript

---

## 💡 CONSEJO PRO

Empieza con los cambios mínimos:
1. Nombre
2. WhatsApp
3. Textos principales

Luego ve añadiendo más personalización poco a poco.

---

**¡Ya estás listo! En 5 minutos tendrás tu landing page personalizada funcionando.** 🎉
