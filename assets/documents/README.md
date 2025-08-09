# Documentos del Portafolio

Esta carpeta debe contener los documentos importantes de tu portafolio profesional.

## 📄 Archivos Requeridos

### CV/Currículum Vitae
- **Archivo:** `cv.pdf`
- **Formato:** PDF (recomendado)
- **Tamaño máximo:** 2MB
- **Descripción:** Tu currículum actualizado para descarga

### Carta de Presentación (Opcional)
- **Archivo:** `cover-letter.pdf`
- **Formato:** PDF
- **Tamaño máximo:** 1MB
- **Descripción:** Carta de presentación general

### Portafolio Extendido (Opcional)
- **Archivo:** `portfolio-extended.pdf`
- **Formato:** PDF
- **Tamaño máximo:** 5MB
- **Descripción:** Portafolio más detallado con casos de estudio

## 📝 Consejos para el CV

### Estructura Recomendada:
1. **Información Personal**
   - Nombre completo
   - Email profesional
   - Teléfono
   - LinkedIn
   - GitHub
   - Sitio web/portafolio

2. **Resumen Profesional**
   - 2-3 líneas que resuman tu experiencia
   - Enfoque en tecnologías clave
   - Años de experiencia

3. **Experiencia Laboral**
   - Empresa, cargo, fechas
   - Logros específicos con métricas
   - Tecnologías utilizadas
   - Orden cronológico inverso

4. **Proyectos Destacados**
   - Nombre del proyecto
   - Descripción breve
   - Tecnologías utilizadas
   - Enlaces a demo/código

5. **Habilidades Técnicas**
   - Frontend: HTML, CSS, JavaScript, React, etc.
   - Backend: Node.js, Python, PHP, etc.
   - Bases de datos: MySQL, MongoDB, etc.
   - Herramientas: Git, Docker, AWS, etc.

6. **Educación**
   - Título, institución, fechas
   - Certificaciones relevantes
   - Cursos online importantes

7. **Idiomas**
   - Español (nativo)
   - Inglés (intermedio/avanzado)
   - Otros idiomas

### Formato y Diseño:
- **Fuente:** Arial, Calibri, o similar (legible)
- **Tamaño:** 10-12pt para texto, 14-16pt para títulos
- **Márgenes:** 2cm en todos los lados
- **Longitud:** 1-2 páginas máximo
- **Colores:** Máximo 2 colores, preferiblemente neutros
- **Secciones:** Claramente diferenciadas

## 🛠️ Herramientas para Crear CV

### Gratuitas:
- **Canva:** Templates profesionales
- **Google Docs:** Simple y efectivo
- **LibreOffice:** Suite gratuita
- **LaTeX:** Para CVs técnicos muy profesionales

### De Pago:
- **Adobe InDesign:** Diseño profesional
- **Microsoft Word:** Plantillas incluidas
- **Figma:** Diseño personalizado

### Específicas para Desarrolladores:
- **JSON Resume:** CV en formato JSON
- **HackMyResume:** Generador desde JSON
- **Resume.io:** Templates para tech

## 📊 Optimización para ATS

### Palabras Clave Importantes:
```
Desarrollador Web
Frontend Developer
Backend Developer
Full Stack Developer
JavaScript
React
Node.js
HTML5
CSS3
Responsive Design
Git
Agile
Scrum
RESTful APIs
MongoDB
MySQL
```

### Consejos ATS:
- Usa nombres estándar para secciones
- Evita tablas y columnas complejas
- Usa fuentes estándar
- No incluyas imágenes decorativas
- Guarda en formato PDF

## 🌐 Versiones Internacionales

### CV en Inglés:
- **Archivo:** `cv-en.pdf`
- Traducir completamente al inglés
- Adaptar formato a estándares internacionales
- Usar terminología técnica en inglés

### Consideraciones por País:
- **Estados Unidos:** Resume (1 página)
- **Europa:** CV (2 páginas)
- **Reino Unido:** CV (2 páginas)
- **Canadá:** Resume (1-2 páginas)

## 🔗 Integración con el Portafolio

### En el HTML:
```html
<a href="assets/documents/cv.pdf" 
   class="btn btn-primary" 
   download="Tu-Nombre-CV.pdf">
    <i class="fas fa-download"></i> 
    Descargar CV
</a>
```

### Con JavaScript (tracking):
```javascript
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
        // Tracking de descargas
        gtag('event', 'file_download', {
            file_name: link.download,
            file_extension: 'pdf'
        });
    });
});
```

## 📈 Analytics para Documentos

### Google Analytics Events:
```javascript
// Trackear descargas de CV
function trackDownload(fileName) {
    gtag('event', 'download', {
        'event_category': 'CV',
        'event_label': fileName,
        'value': 1
    });
}
```

### Métricas a Monitorear:
- Número de descargas
- Fuente del tráfico
- Dispositivo utilizado
- Ubicación geográfica

## 🔒 Consideraciones de Privacidad

### Información Sensible:
- **No incluir:** Dirección completa, edad, estado civil
- **Incluir:** Email profesional, LinkedIn, ciudad (general)
- **Opcional:** Foto (depende del país/industria)

### Versiones Públicas vs Privadas:
- **Versión pública:** Sin datos personales sensibles
- **Versión privada:** Con información completa para aplicaciones

## 🔄 Mantenimiento y Actualizaciones

### Frecuencia de Actualización:
- **Después de cada proyecto importante**
- **Cambios de trabajo**
- **Nuevas certificaciones**
- **Revisión trimestral general**

### Control de Versiones:
```
cv-v1.0-2024-01.pdf
cv-v1.1-2024-03.pdf
cv-v2.0-2024-06.pdf
```

## 📋 Checklist para CV

### Contenido:
- [ ] Información de contacto actualizada
- [ ] Resumen profesional atractivo
- [ ] Experiencia laboral con logros específicos
- [ ] Proyectos más relevantes
- [ ] Habilidades técnicas organizadas
- [ ] Educación y certificaciones
- [ ] Ortografía y gramática perfectas

### Formato:
- [ ] Diseño limpio y profesional
- [ ] Fácil de leer y escanear
- [ ] Máximo 2 páginas
- [ ] Formato PDF
- [ ] Optimizado para ATS
- [ ] Consistencia en fuentes y espaciado

### Técnico:
- [ ] Archivo menor a 2MB
- [ ] Nombre descriptivo del archivo
- [ ] Enlaces funcionando (si los hay)
- [ ] Compatible con lectores de PDF
- [ ] Texto seleccionable (no imagen)

---

**Recuerda:** Tu CV es tu primera impresión profesional. Dedica tiempo a hacerlo perfecto y manténlo siempre actualizado con tus últimos logros y proyectos.
