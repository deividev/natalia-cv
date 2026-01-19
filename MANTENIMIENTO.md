# 🔧 GUÍA DE MANTENIMIENTO Y ACTUALIZACIÓN

Esta guía te ayuda a mantener tu web actualizada y optimizada después de publicarla.

---

## 📅 MANTENIMIENTO REGULAR

### Cada Mes

✅ **Actualizar testimonios**
- Añade nuevos comentarios de clientes satisfechos
- Pide permiso antes de usar nombres reales
- Mantén un mínimo de 3-6 testimonios

```javascript
// En config.js
testimonios: [
    {
        estrellas: 5,
        texto: "Nuevo testimonio aquí...",
        autor: "Cliente Nuevo"
    }
    // Añade al final del array
]
```

---

✅ **Revisar FAQs**
- ¿Recibes preguntas nuevas frecuentemente?
- Añádelas a la sección de preguntas frecuentes
- Actualiza respuestas si cambian condiciones

```javascript
// En config.js
preguntasFrecuentes: [
    // Añade nuevas preguntas al final
    {
        pregunta: "Nueva pregunta frecuente",
        respuesta: "Respuesta clara y útil"
    }
]
```

---

### Cada 3 Meses

✅ **Actualizar fotos**
- Renueva la foto de perfil si es necesario
- Cambia la imagen hero para dar frescura
- Asegúrate de que las fotos sean profesionales

---

✅ **Revisar enlaces**
- Verifica que todos los botones de WhatsApp funcionen
- Comprueba enlaces de redes sociales
- Asegúrate de que tu número de WhatsApp esté activo

---

✅ **Optimizar textos**
- Lee tu sección "Sobre Mí" - ¿sigue vigente?
- Actualiza logros o nuevos certificados
- Menciona nuevos números (clientes atendidos, años de experiencia)

---

### Cada 6 Meses

✅ **Revisar diseño y contenido**
- ¿El diseño sigue siendo actual?
- ¿Los colores representan tu marca?
- ¿El contenido sigue siendo relevante?

---

✅ **Actualizar el año**

```javascript
// En config.js
textos: {
    añoActual: "2027"  // Actualiza cada año
}
```

---

## 📈 MEJORAS INCREMENTALES

### Fase 1: Contenido Real (Primeros 3 meses)

1. **Reemplaza testimonios genéricos**
   - Recopila comentarios reales
   - Pide a clientes satisfechos que dejen opinión
   - Añádelos gradualmente

2. **Añade casos de éxito**
   - "Ayudé a más de X familias"
   - "Ahorré a mis clientes un promedio de X€"
   - Actualiza estos números regularmente

3. **Mejora tu presentación**
   - Añade certificaciones obtenidas
   - Menciona formaciones completadas
   - Destaca reconocimientos recibidos

---

### Fase 2: Optimización (3-6 meses)

1. **Analiza qué funciona**
   - ¿Recibes más contactos por WhatsApp o formulario?
   - ¿Qué preguntas te hacen más?
   - Ajusta el contenido según feedback

2. **Mejora las FAQs**
   - Añade preguntas que te hacen realmente
   - Elimina preguntas que nadie pregunta
   - Hazlas más específicas y útiles

3. **Optimiza para SEO** (si lo publicas en web)
   - Añade palabras clave relevantes
   - Mejora descripciones
   - Añade meta tags si sabes

---

### Fase 3: Expansión (6+ meses)

1. **Añade nuevo contenido**
   - Más beneficios específicos
   - Más opciones de contacto
   - Más información sobre servicios

2. **Considera añadir**
   - Blog (si quieres escribir artículos)
   - Calculadora de seguros
   - Comparador de planes
   - (Requieren programación adicional)

---

## 🔄 CÓMO ACTUALIZAR TU WEB

### Proceso paso a paso:

1. **Haz una copia de seguridad**
   ```
   - Copia config.js → config-backup-FECHA.js
   - Guarda en un lugar seguro
   ```

2. **Edita config.js**
   - Abre el archivo
   - Haz tus cambios
   - Guarda (Ctrl + S)

3. **Prueba localmente**
   - Abre index.html en navegador
   - Verifica que todo se ve bien
   - Prueba todos los enlaces

4. **Actualiza online**
   - Si usas GitHub Pages: sube el nuevo config.js
   - Si usas Netlify/Vercel: reemplaza el archivo
   - Verifica la web online

---

## 📝 REGISTRO DE CAMBIOS

Lleva un registro de tus actualizaciones:

```
FECHA       | CAMBIOS REALIZADOS
------------|------------------------------------------
19/01/2026  | Lanzamiento inicial
15/02/2026  | Añadidos 2 nuevos testimonios
01/03/2026  | Actualizada foto de perfil
10/04/2026  | Añadidas 3 nuevas FAQs
```

Puedes crear un archivo `CHANGELOG.txt` en tu carpeta.

---

## ⚠️ ERRORES COMUNES AL ACTUALIZAR

### Error: "La página no se actualiza"

**Solución:**
- Borra caché del navegador (Ctrl + F5)
- Espera unos minutos si actualizaste online
- Verifica que guardaste config.js

---

### Error: "Algo se rompió después de editar"

**Solución:**
- Revisa que no falten comas (,)
- Verifica que todas las comillas estén cerradas
- Compara con tu backup
- Revisa la consola del navegador (F12)

---

### Error: "Las imágenes nuevas no cargan"

**Solución:**
- Verifica la URL o ruta
- Asegúrate de que la imagen sea pública
- Comprueba el nombre del archivo (mayúsculas/minúsculas)

---

## 🎯 CHECKLIST DE ACTUALIZACIÓN

Cada vez que actualices:

- [ ] Hice backup de config.js
- [ ] Edité los cambios necesarios
- [ ] Guardé el archivo
- [ ] Probé en navegador local
- [ ] Verifiqué que todo funciona
- [ ] Actualicé online
- [ ] Comprobé la versión online
- [ ] Registré los cambios

---

## 💡 IDEAS DE CONTENIDO NUEVO

### Testimonios creativos
```javascript
{
    estrellas: 5,
    texto: "En 2 días ya tenía mi seguro activado...",
    autor: "Pedro M., Madrid"
}
// Añade ciudad o profesión para más credibilidad
```

---

### FAQs más específicas
```javascript
{
    pregunta: "¿Cuánto tarda en responder a un WhatsApp?",
    respuesta: "Respondo en menos de 2 horas en horario laboral..."
}
// Sé específico con tiempos y condiciones
```

---

### Beneficios diferenciadores
```javascript
{
    icono: "fa-gift",
    titulo: "Primer Mes Gratis",
    descripcion: "Promociones especiales para nuevos clientes"
}
// Destaca ofertas o ventajas únicas
```

---

## 📊 MÉTRICAS A SEGUIR

Aunque esta web es estática, puedes llevar registro manual:

| Métrica | Cómo medirla |
|---------|--------------|
| Contactos WhatsApp | Cuenta mensajes nuevos |
| Conversión | De contactos a clientes |
| Preguntas frecuentes | ¿Cuáles te hacen más? |
| Redes sociales | ¿De dónde vienen? |

Usa esto para mejorar el contenido de tu web.

---

## 🔐 SEGURIDAD Y BACKUPS

### Backup automático (recomendado)

Cada vez que hagas cambios importantes:

```
config-backup-2026-01-19.js
config-backup-2026-02-15.js
config-backup-2026-03-10.js
```

Mantén los últimos 3-5 backups.

---

### ¿Qué respaldar?

- ✅ config.js (principal)
- ✅ Carpeta images/ (si la creaste)
- 🟡 index.html (si lo modificaste - no recomendado)
- 🟡 styles.css (si cambiaste colores)

---

## 🚀 OPTIMIZACIÓN CONTINUA

### Velocidad de carga

1. **Optimiza imágenes**
   - Usa herramientas: TinyPNG, Squoosh
   - Tamaño recomendado:
     - Foto perfil: 800x800px, < 200KB
     - Hero image: 1920x1080px, < 500KB

2. **Usa WebP** (formato moderno)
   - Convierte tus JPG/PNG a WebP
   - Menor tamaño, misma calidad

---

### Experiencia móvil

1. **Prueba regularmente en móvil**
   - ¿Los botones son fáciles de tocar?
   - ¿Las imágenes se ven bien?
   - ¿El texto es legible?

2. **Solicita feedback**
   - Pide a amigos que prueben
   - Pregunta a clientes por su experiencia

---

## 📱 ACTUALIZACIONES DE REDES SOCIALES

Si cambias de usuario o añades redes:

```javascript
// Añadir Facebook
contacto: {
    telefono: "34612345678",
    instagram: "tu_usuario",
    tiktok: "tu_usuario",
    facebook: "tu.usuario.nuevo",  // ← Añade aquí
    linkedin: ""
}
```

Guarda, prueba, actualiza online.

---

## ✅ CALENDARIO DE MANTENIMIENTO

### Semanal
- [ ] Responder contactos de WhatsApp

### Mensual
- [ ] Revisar y responder mensajes
- [ ] Añadir nuevo testimonio (si tienes)
- [ ] Revisar enlaces de redes sociales

### Trimestral
- [ ] Actualizar fotografías
- [ ] Revisar y optimizar textos
- [ ] Añadir nuevas FAQs
- [ ] Verificar funcionalidad completa

### Semestral
- [ ] Evaluación completa del diseño
- [ ] Actualizar estadísticas de éxito
- [ ] Considerar mejoras mayores

### Anual
- [ ] Actualizar año en footer
- [ ] Revisión completa de contenido
- [ ] Backup completo del proyecto
- [ ] Renovar testimonios más antiguos

---

## 🎓 RECURSOS ÚTILES

### Para optimizar imágenes:
- TinyPNG.com
- Squoosh.app
- Compressor.io

### Para encontrar iconos:
- FontAwesome.com (ya incluido)
- Iconos gratuitos: flaticon.com

### Para aprender más:
- W3Schools.com (HTML/CSS básico)
- MDN Web Docs (referencia completa)

---

## 💬 BUENAS PRÁCTICAS

1. **Sé auténtico**
   - Usa tus propias palabras
   - No copies textos de otros
   - Sé honesto en testimonios

2. **Mantén profesionalismo**
   - Revisa ortografía
   - Usa lenguaje apropiado
   - Actualiza información obsoleta

3. **Responde rápido**
   - Los contactos de WhatsApp esperan respuesta rápida
   - Configura respuestas automáticas si es necesario

4. **Actualiza regularmente**
   - Web desactualizada = mala imagen
   - Contenido fresco = más profesional

---

## 📧 PLANTILLA DE ACTUALIZACIÓN

Copia esto cada vez que actualices:

```
ACTUALIZACIÓN: [FECHA]
─────────────────────────────

CAMBIOS REALIZADOS:
□ [Describir cambio 1]
□ [Describir cambio 2]
□ [Describir cambio 3]

ARCHIVOS MODIFICADOS:
□ config.js
□ Otro: ___________

BACKUP CREADO: □ Sí  □ No
Nombre: config-backup-[FECHA].js

PROBADO LOCALMENTE: □ Sí  □ No
ACTUALIZADO ONLINE: □ Sí  □ No
VERIFICADO ONLINE: □ Sí  □ No

NOTAS:
_________________________________
_________________________________
```

---

## 🎉 CONCLUSIÓN

Mantener tu web actualizada es fácil:
1. Backup antes de cambiar
2. Edita config.js
3. Prueba localmente
4. Actualiza online
5. Verifica que funciona

**¡Una web bien mantenida genera más confianza y conversiones!** ✨

---

**Última actualización de esta guía: Enero 2026**
