# Guía de Configuración - Mi Portafolio

Esta guía te ayudará a configurar y personalizar tu portafolio paso a paso.

## 🚀 Configuración Inicial

### 1. Preparar el Entorno

**Opción A: Editor de Código (Recomendado)**
```bash
# Con VS Code y Live Server
1. Instalar VS Code
2. Instalar extensión "Live Server"
3. Abrir carpeta del proyecto
4. Clic derecho en index.html > "Open with Live Server"
```

**Opción B: Servidor Local**
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server -p 8000

# Con PHP
php -S localhost:8000
```

### 2. Estructura de Archivos

Asegúrate de tener esta estructura:
```
Personal-portafolio/
├── index.html
├── css/
├── js/
├── assets/
│   ├── images/
│   └── documents/
└── docs/
```

## ⚙️ Configuración Personalizada

### 1. Información Personal

**En `index.html` - Sección Hero:**
```html
<h1>Hola, soy <span class="highlight">TU NOMBRE AQUÍ</span></h1>
<h2>TU TÍTULO PROFESIONAL</h2>
<p>TU DESCRIPCIÓN BREVE</p>
```

**En `index.html` - Sección About:**
```html
<div class="info-item">
    <i class="fas fa-envelope"></i>
    <span>Email: tu.email@ejemplo.com</span>
</div>
<div class="info-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Ubicación: Tu Ciudad, País</span>
</div>
```

### 2. Configurar Meta Tags

**SEO Básico:**
```html
<title>Tu Nombre - Desarrollador Web</title>
<meta name="description" content="Tu descripción profesional">
<meta name="keywords" content="desarrollador, web, frontend, backend">
<meta name="author" content="Tu Nombre">

<!-- Open Graph -->
<meta property="og:title" content="Tu Nombre - Portfolio">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="assets/images/og-image.jpg">
<meta property="og:url" content="https://tudominio.com">
```

### 3. Personalizar Colores

**En `css/style.css` - Variables CSS:**
```css
:root {
    /* Cambia estos colores por los tuyos */
    --primary-color: #667eea;      /* Color principal */
    --secondary-color: #764ba2;    /* Color secundario */
    --accent-color: #f093fb;       /* Color de acento */
    --text-color: #333333;         /* Color del texto */
    
    /* Gradientes personalizados */
    --gradient-primary: linear-gradient(135deg, TU_COLOR_1, TU_COLOR_2);
}
```

### 4. Configurar Fuentes

**Cambiar tipografía:**
```css
/* En el <head> del HTML */
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;500;600;700&display=swap" rel="stylesheet">

/* En CSS */
:root {
    --font-primary: 'TU_FUENTE', sans-serif;
}
```

## 📸 Configuración de Imágenes

### 1. Imagen de Perfil

**Requisitos:**
- Formato: JPG, PNG o WebP
- Tamaño recomendado: 400x400px
- Peso máximo: 200KB

**Ubicación:** `assets/images/profile.jpg`

### 2. Imágenes de Proyectos

**Requisitos:**
- Formato: JPG, PNG o WebP
- Tamaño recomendado: 600x400px
- Peso máximo: 300KB cada una

**Ubicación:** `assets/images/projects/`
- `project1.jpg`
- `project2.jpg`
- `project3.jpg`

### 3. Favicon

**Crear favicon:**
1. Usar herramientas como [Favicon.io](https://favicon.io/)
2. Generar todos los tamaños
3. Colocar en `assets/images/`
4. Actualizar HTML:

```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
```

## 🛠️ Configuración de Habilidades

### 1. Agregar/Quitar Habilidades

**En `index.html` - Sección Skills:**
```html
<div class="skill-item">
    <i class="fab fa-html5"></i>         <!-- Icono -->
    <span>HTML5</span>                   <!-- Nombre -->
    <div class="skill-bar">
        <div class="skill-progress" data-skill="90"></div>  <!-- Porcentaje -->
    </div>
</div>
```

### 2. Iconos de Tecnologías

**Font Awesome Icons:**
- HTML: `fab fa-html5`
- CSS: `fab fa-css3-alt`
- JavaScript: `fab fa-js`
- React: `fab fa-react`
- Node.js: `fab fa-node-js`
- Python: `fab fa-python`
- Git: `fab fa-git-alt`

### 3. Categorías Personalizadas

```html
<div class="skill-category">
    <h3>Tu Categoría</h3>
    <div class="skill-items">
        <!-- Tus habilidades aquí -->
    </div>
</div>
```

## 📂 Configuración de Proyectos

### 1. Estructura de Proyecto

```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/projects/tu-proyecto.jpg" alt="Tu Proyecto">
        <div class="project-overlay">
            <div class="project-links">
                <a href="URL_DEMO" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="URL_GITHUB" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve del proyecto</p>
        <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">JavaScript</span>
        </div>
    </div>
</div>
```

### 2. Tecnologías Usadas

**Etiquetas predefinidas:**
- Frontend: HTML, CSS, JavaScript, React, Vue, Angular
- Backend: Node.js, Python, PHP, Java, C#
- Bases de datos: MongoDB, MySQL, PostgreSQL
- Herramientas: Git, Docker, AWS, Firebase

## 📧 Configuración del Formulario de Contacto

### 1. Servicios de Formulario

**Opción A: Formspree (Recomendado)**
```html
<form action="https://formspree.io/f/TU_ID" method="POST">
    <!-- Tus campos del formulario -->
</form>
```

**Opción B: EmailJS**
```javascript
// Incluir EmailJS SDK
emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', '#contact-form', 'TU_USER_ID')
```

**Opción C: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
    <!-- Tus campos del formulario -->
</form>
```

### 2. Validación Personalizada

```javascript
// En js/main.js - Personalizar validación
const validateForm = (formData) => {
    // Tu lógica de validación personalizada
};
```

## 🔗 Configuración de Redes Sociales

**En `index.html` - Enlaces sociales:**
```html
<div class="social-links">
    <a href="https://linkedin.com/in/tu-perfil" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/tu-usuario" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://twitter.com/tu-usuario" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/tu-usuario" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

## 📱 Configuración Responsiva

### 1. Breakpoints Personalizados

**En `css/responsive.css`:**
```css
/* Tus breakpoints personalizados */
@media (max-width: 1200px) { /* Desktop pequeño */ }
@media (max-width: 992px)  { /* Tablet landscape */ }
@media (max-width: 768px)  { /* Tablet portrait */ }
@media (max-width: 576px)  { /* Móvil grande */ }
@media (max-width: 480px)  { /* Móvil pequeño */ }
```

### 2. Configuración de Imágenes Responsivas

```html
<img src="imagen-small.jpg" 
     srcset="imagen-small.jpg 480w, 
             imagen-medium.jpg 768w, 
             imagen-large.jpg 1200w"
     sizes="(max-width: 480px) 100vw, 
            (max-width: 768px) 50vw, 
            33vw"
     alt="Descripción">
```

## 🎨 Configuración de Animaciones

### 1. Desactivar Animaciones

**Para usuarios que prefieren menos movimiento:**
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### 2. Configurar Velocidad de Animaciones

**En `js/animations.js`:**
```javascript
const animationConfig = {
    duration: 800,        // Duración en ms
    easing: 'ease-out',   // Tipo de easing
    delay: 100           // Delay entre elementos
};
```

## 🔧 Configuración Avanzada

### 1. Google Analytics

```html
<!-- En el <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_GA_MEASUREMENT_ID');
</script>
```

### 2. Configuración de PWA

```html
<!-- Manifest -->
<link rel="manifest" href="manifest.json">

<!-- Service Worker -->
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
</script>
```

### 3. Configuración de CDN

**Para mejor rendimiento:**
```html
<!-- Imágenes desde CDN -->
<img src="https://cdn.tudominio.com/images/profile.jpg" alt="Perfil">

<!-- CSS desde CDN -->
<link rel="stylesheet" href="https://cdn.tudominio.com/css/style.css">
```

## ✅ Lista de Verificación

- [ ] Personalizar información personal
- [ ] Cambiar colores y fuentes
- [ ] Subir imagen de perfil
- [ ] Agregar proyectos con imágenes
- [ ] Configurar habilidades
- [ ] Actualizar enlaces sociales
- [ ] Configurar formulario de contacto
- [ ] Optimizar imágenes
- [ ] Probar en diferentes dispositivos
- [ ] Configurar analytics (opcional)
- [ ] Probar formulario de contacto
- [ ] Verificar meta tags y SEO

## 🚨 Problemas Comunes

**1. Las imágenes no cargan:**
- Verificar rutas de archivos
- Comprobar nombres de archivos (case-sensitive)
- Asegurar que las imágenes existen

**2. El formulario no envía:**
- Configurar servicio de formulario
- Verificar conexión a internet
- Revisar consola del navegador

**3. Animaciones no funcionan:**
- Verificar si JavaScript está habilitado
- Comprobar errores en consola
- Probar en navegador diferente

**4. Diseño roto en móvil:**
- Verificar meta viewport
- Revisar CSS responsivo
- Probar en DevTools

## 📞 Obtener Ayuda

Si necesitas ayuda adicional:
1. Revisar documentación completa
2. Buscar en issues del repositorio
3. Crear nuevo issue con detalles del problema
4. Contactar por email o redes sociales

---

¡Con esta configuración tendrás un portafolio completamente personalizado y profesional! 🚀
