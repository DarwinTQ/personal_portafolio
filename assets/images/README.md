# Imágenes Placeholder

Esta carpeta debe contener las siguientes imágenes para que tu portafolio funcione correctamente:

## 📸 Imágenes Requeridas

### Imagen de Perfil
- **Archivo:** `profile.jpg`
- **Tamaño recomendado:** 400x400px
- **Formato:** JPG, PNG o WebP
- **Peso máximo:** 200KB
- **Descripción:** Tu foto profesional para el Hero section

### Proyectos
- **Archivos:** `project1.jpg`, `project2.jpg`, `project3.jpg`
- **Tamaño recomendado:** 600x400px
- **Formato:** JPG, PNG o WebP
- **Peso máximo:** 300KB cada una
- **Descripción:** Capturas de pantalla o mockups de tus proyectos

### Favicon
- **Archivo:** `favicon.ico`
- **Tamaño:** 16x16px, 32x32px, 48x48px
- **Formato:** ICO
- **Descripción:** Icono que aparece en la pestaña del navegador

## 🛠️ Herramientas Recomendadas

### Para Optimizar Imágenes:
- [TinyPNG](https://tinypng.com/) - Compresión online
- [Squoosh](https://squoosh.app/) - Editor de Google
- [ImageOptim](https://imageoptim.com/mac) - Para Mac
- [RIOT](https://riot-optimizer.com/) - Para Windows

### Para Crear Favicons:
- [Favicon.io](https://favicon.io/) - Generador gratuito
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Completo

### Para Crear Mockups:
- [Figma](https://figma.com) - Diseño gratuito
- [Canva](https://canva.com) - Templates listos
- [Photopea](https://photopea.com) - Photoshop online gratis

## 📐 Especificaciones Técnicas

### Imagen de Perfil
```css
/* La imagen se mostrará como círculo */
border-radius: 50%;
width: 300px;
height: 300px;
object-fit: cover;
```

### Imágenes de Proyectos
```css
/* Las imágenes se adaptan al contenedor */
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 12px;
```

## 🎨 Consejos de Diseño

### Para la Foto de Perfil:
- Usa buena iluminación
- Fondo profesional o neutro
- Sonríe naturalmente
- Viste de manera profesional
- La imagen debe estar centrada en tu rostro

### Para Capturas de Proyectos:
- Usa mockups realistas
- Muestra la interfaz principal
- Incluye elementos visuales atractivos
- Asegúrate de que el texto sea legible
- Usa fondos consistentes

## 📱 Imágenes Responsivas

### Diferentes Tamaños (Opcional)
Para mejor rendimiento, puedes crear versiones en diferentes tamaños:

```
profile-small.jpg (200x200)    - Para móviles
profile-medium.jpg (300x300)   - Para tablets
profile-large.jpg (400x400)    - Para desktop

project1-small.jpg (300x200)   - Para móviles
project1-medium.jpg (450x300)  - Para tablets
project1-large.jpg (600x400)   - Para desktop
```

### Implementación en HTML:
```html
<img src="assets/images/profile.jpg" 
     srcset="assets/images/profile-small.jpg 200w,
             assets/images/profile-medium.jpg 300w,
             assets/images/profile-large.jpg 400w"
     sizes="(max-width: 768px) 200px,
            (max-width: 1024px) 300px,
            400px"
     alt="Foto de perfil">
```

## 🌐 Formatos Modernos

### WebP (Recomendado)
```html
<picture>
  <source srcset="assets/images/profile.webp" type="image/webp">
  <img src="assets/images/profile.jpg" alt="Foto de perfil">
</picture>
```

### AVIF (Futuro)
```html
<picture>
  <source srcset="assets/images/profile.avif" type="image/avif">
  <source srcset="assets/images/profile.webp" type="image/webp">
  <img src="assets/images/profile.jpg" alt="Foto de perfil">
</picture>
```

## 🔍 SEO para Imágenes

### Atributos Alt Descriptivos:
```html
<!-- ❌ No específico -->
<img src="project1.jpg" alt="proyecto">

<!-- ✅ Descriptivo -->
<img src="project1.jpg" alt="Aplicación web de e-commerce desarrollada con React y Node.js">
```

### Nombres de Archivo SEO:
```
❌ IMG_1234.jpg
❌ proyecto.jpg
❌ foto.jpg

✅ portafolio-desarrollador-web-foto-perfil.jpg
✅ proyecto-ecommerce-react-nodejs.jpg
✅ aplicacion-movil-flutter-ios-android.jpg
```

## 📊 Métricas de Rendimiento

### Core Web Vitals - LCP (Largest Contentful Paint)
- Las imágenes grandes pueden afectar el LCP
- Optimiza especialmente la imagen de perfil del Hero
- Target: < 2.5 segundos

### Tamaño Total Recomendado:
- Foto de perfil: < 200KB
- Cada proyecto: < 300KB
- Total de imágenes: < 2MB

## 🚀 Implementación Lazy Loading

### HTML Nativo:
```html
<img src="assets/images/project1.jpg" 
     alt="Proyecto 1" 
     loading="lazy">
```

### JavaScript Avanzado:
```javascript
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));
```

## 📝 Lista de Verificación

### Antes de Subir las Imágenes:
- [ ] Imágenes optimizadas y comprimidas
- [ ] Nombres de archivo descriptivos
- [ ] Formatos web (JPG/PNG/WebP)
- [ ] Tamaños apropiados para cada uso
- [ ] Backup de las imágenes originales

### Después de Subir:
- [ ] Todas las imágenes cargan correctamente
- [ ] No hay errores 404 en las imágenes
- [ ] Responsive design funciona bien
- [ ] Tiempo de carga < 3 segundos
- [ ] Atributos alt son descriptivos

---

**Nota:** Las imágenes placeholder actuales son solo para demostración. Reemplázalas con tus propias imágenes profesionales para personalizar completamente tu portafolio.
