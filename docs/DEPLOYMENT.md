# Guía de Despliegue - Mi Portafolio

Esta guía completa te ayudará a desplegar tu portafolio en diferentes plataformas de hosting gratuitas y de pago.

## 🚀 Preparación para el Despliegue

### 1. Lista de Verificación Pre-Despliegue

**Contenido:**
- [ ] Información personal actualizada
- [ ] Proyectos con imágenes y enlaces
- [ ] CV actualizado en PDF
- [ ] Imágenes optimizadas (comprimidas)
- [ ] Enlaces de redes sociales funcionando
- [ ] Formulario de contacto configurado

**Técnico:**
- [ ] Todas las rutas son relativas
- [ ] No hay errores en la consola
- [ ] Pruebas en diferentes navegadores
- [ ] Responsive design verificado
- [ ] Meta tags y SEO configurados
- [ ] Favicon agregado
- [ ] Analytics configurado (opcional)

### 2. Optimización para Producción

#### Compresión de Imágenes
```bash
# Usando herramientas online:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
# - ImageOptim (para Mac)

# O usando CLI:
npm install -g imagemin-cli
imagemin assets/images/*.{jpg,png} --out-dir=assets/images/optimized
```

#### Minificación de CSS y JS
```bash
# CSS Minifier online: https://cssminifier.com/
# JS Minifier online: https://javascript-minifier.com/

# O usando herramientas CLI:
npm install -g clean-css-cli uglify-js

# Minificar CSS
cleancss -o css/style.min.css css/style.css

# Minificar JavaScript
uglifyjs js/main.js -o js/main.min.js
```

#### Configuración de archivos minificados
```html
<!-- En producción, usar archivos minificados -->
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

## 🌐 Plataformas de Despliegue Gratuitas

### 1. GitHub Pages

**Ventajas:**
- Totalmente gratuito
- Integración directa con GitHub
- HTTPS automático
- Dominio personalizado gratuito

**Desventajas:**
- Solo sitios estáticos
- Límite de 1GB de almacenamiento
- 100GB de ancho de banda mensual

#### Paso a paso:

1. **Crear repositorio en GitHub:**
```bash
# Clonar tu repositorio o crear uno nuevo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-portafolio.git
git push -u origin main
```

2. **Configurar GitHub Pages:**
- Ve a tu repositorio en GitHub
- Clic en "Settings"
- Scroll hasta "Pages"
- En "Source", selecciona "Deploy from a branch"
- Selecciona "main" branch y "/ (root)"
- Clic en "Save"

3. **Acceder a tu sitio:**
- URL: `https://tu-usuario.github.io/tu-portafolio`
- Puede tardar unos minutos en estar disponible

#### Dominio personalizado:
```bash
# Crear archivo CNAME en la raíz del proyecto
echo "tudominio.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Netlify

**Ventajas:**
- Deploy automático desde Git
- HTTPS automático
- CDN global
- Formularios sin backend
- Funciones serverless (básicas gratis)

**Desventajas:**
- Límite de 100GB de ancho de banda mensual
- Límite de 300 minutos de build

#### Método 1: Deploy desde Git

1. **Ir a [Netlify](https://netlify.com)**
2. **"New site from Git"**
3. **Conectar con GitHub/GitLab/Bitbucket**
4. **Seleccionar repositorio**
5. **Configurar build settings:**
   - Build command: (dejar vacío para sitios estáticos)
   - Publish directory: `./` o `/`
6. **Deploy site**

#### Método 2: Deploy manual (Drag & Drop)

1. **Preparar archivos:**
```bash
# Crear carpeta con todos los archivos
mkdir portafolio-deploy
cp -r * portafolio-deploy/
```

2. **Ir a Netlify**
3. **Arrastrar la carpeta al área de deploy**
4. **¡Listo!**

#### Configuración de formulario Netlify:
```html
<!-- Agregar a tu formulario -->
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Campo honeypot para spam -->
  <input type="hidden" name="bot-field" />
  
  <!-- Tus campos normales -->
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### 3. Vercel

**Ventajas:**
- Deploy súper rápido
- CDN global
- Integración perfecta con Next.js/React
- Analytics incluido
- Dominio personalizado gratuito

**Desventajas:**
- Orientado más a aplicaciones React/Next.js
- Límites en funciones serverless

#### Deploy con Vercel:

1. **Instalar Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy desde terminal:**
```bash
cd tu-portafolio
vercel

# Seguir instrucciones:
# - Conectar con GitHub
# - Confirmar configuración
# - ¡Deploy automático!
```

3. **O desde web:**
- Ir a [vercel.com](https://vercel.com)
- "Import Git Repository"
- Seleccionar repo
- Deploy

### 4. Firebase Hosting

**Ventajas:**
- CDN global ultra rápido
- HTTPS automático
- Integración con otros servicios Firebase
- CLI poderoso

**Desventajas:**
- Configuración más técnica
- Límites de almacenamiento y transferencia

#### Setup Firebase:

1. **Instalar Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Inicializar proyecto:**
```bash
cd tu-portafolio
firebase login
firebase init hosting

# Configuración:
# - Usar directorio actual como public
# - Configurar como SPA: No
# - No sobrescribir index.html
```

3. **Deploy:**
```bash
firebase deploy
```

4. **Tu sitio estará en:** `https://tu-proyecto.firebaseapp.com`

### 5. Surge.sh

**Ventajas:**
- Super simple
- Deploy en segundos
- Dominio personalizado gratuito

**Desventajas:**
- Menos features que otras plataformas
- No integración con Git

#### Deploy con Surge:

```bash
# Instalar surge
npm install -g surge

# Deploy
cd tu-portafolio
surge

# Seguir instrucciones:
# - Email y password
# - Confirmar path
# - Elegir dominio
```

## 💰 Plataformas de Pago (Recomendadas para proyectos profesionales)

### 1. Hostinger

**Precio:** ~$1-3/mes
**Características:**
- cPanel incluido
- SSL gratuito
- CDN incluido
- Soporte 24/7

### 2. DigitalOcean

**Precio:** $5/mes (droplet básico)
**Características:**
- Control total del servidor
- Escalabilidad
- App Platform para deploys fáciles

### 3. AWS S3 + CloudFront

**Precio:** ~$1-5/mes (dependiendo del tráfico)
**Características:**
- Infraestructura profesional
- CDN ultra rápido
- Escalabilidad ilimitada

## 🔧 Configuraciones Avanzadas

### 1. Archivo .htaccess (para Apache)

```apache
# .htaccess para optimizaciones
RewriteEngine On

# Redirigir HTTP a HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Comprimir archivos
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Seguridad headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
```

### 2. Service Worker para PWA

```javascript
// sw.js - Service Worker básico
const CACHE_NAME = 'portafolio-v1';
const urlsToCache = [
    '/',
    '/css/style.css',
    '/js/main.js',
    '/assets/images/profile.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
```

```html
<!-- Registrar Service Worker -->
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
</script>
```

### 3. Manifest.json para PWA

```json
{
    "name": "Mi Portafolio",
    "short_name": "Portafolio",
    "description": "Portafolio profesional de [Tu Nombre]",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#667eea",
    "icons": [
        {
            "src": "assets/images/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "assets/images/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

## 📊 Configuración de Analytics

### 1. Google Analytics 4

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Simple Analytics (alternativa privada)

```html
<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
```

## 🛡️ Seguridad y SEO

### 1. Meta Tags Completos

```html
<!-- Meta tags básicos -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tu Nombre - Desarrollador Web Full Stack</title>
<meta name="description" content="Portafolio profesional de [Tu Nombre], desarrollador web especializado en [tecnologías]">
<meta name="keywords" content="desarrollador web, frontend, backend, react, node.js">
<meta name="author" content="Tu Nombre">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tudominio.com/">
<meta property="og:title" content="Tu Nombre - Desarrollador Web">
<meta property="og:description" content="Portafolio profesional">
<meta property="og:image" content="https://tudominio.com/assets/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://tudominio.com/">
<meta property="twitter:title" content="Tu Nombre - Desarrollador Web">
<meta property="twitter:description" content="Portafolio profesional">
<meta property="twitter:image" content="https://tudominio.com/assets/images/og-image.jpg">

<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
```

### 2. Robots.txt

```txt
# robots.txt
User-agent: *
Allow: /

Sitemap: https://tudominio.com/sitemap.xml
```

### 3. Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://tudominio.com/</loc>
      <lastmod>2024-01-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```

## 🔄 CI/CD y Deploy Automático

### 1. GitHub Actions para deploy automático

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. Script de deploy automático

```bash
#!/bin/bash
# deploy.sh

echo "🚀 Iniciando deploy..."

# Optimizar imágenes
echo "📸 Optimizando imágenes..."
imagemin assets/images/*.{jpg,png} --out-dir=assets/images/

# Minificar CSS
echo "🎨 Minificando CSS..."
cleancss -o css/style.min.css css/style.css

# Minificar JS
echo "⚡ Minificando JavaScript..."
uglifyjs js/main.js -o js/main.min.js

# Commit y push
echo "📤 Subiendo cambios..."
git add .
git commit -m "Deploy: $(date)"
git push origin main

echo "✅ Deploy completado!"
```

## 📈 Monitoreo Post-Deploy

### 1. Herramientas de Monitoreo

**Rendimiento:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse (DevTools)

**Uptime:**
- UptimeRobot (gratuito)
- Pingdom
- StatusCake

**SEO:**
- Google Search Console
- Bing Webmaster Tools
- SEMrush (básico gratuito)

### 2. Métricas a Monitorear

- **Core Web Vitals:**
  - Largest Contentful Paint (LCP)
  - First Input Delay (FID)
  - Cumulative Layout Shift (CLS)

- **Tiempo de carga**
- **Disponibilidad (uptime)**
- **Tráfico y conversiones**
- **Errores 404**

## 🐛 Troubleshooting Común

### 1. Problemas de rutas

```javascript
// Verificar rutas relativas vs absolutas
// ❌ Incorrecto:
<img src="/assets/images/profile.jpg">

// ✅ Correcto para GitHub Pages:
<img src="./assets/images/profile.jpg">
// o
<img src="assets/images/profile.jpg">
```

### 2. HTTPS Mixed Content

```javascript
// ❌ Evitar HTTP en sitios HTTPS
<script src="http://example.com/script.js"></script>

// ✅ Usar HTTPS o protocol-relative URLs
<script src="https://example.com/script.js"></script>
<script src="//example.com/script.js"></script>
```

### 3. Cache Issues

```html
<!-- Forzar recarga de assets con versioning -->
<link rel="stylesheet" href="css/style.css?v=1.2.3">
<script src="js/main.js?v=1.2.3"></script>
```

## 📋 Checklist Final Post-Deploy

- [ ] Sitio carga correctamente
- [ ] Todas las imágenes se muestran
- [ ] Enlaces internos funcionan
- [ ] Enlaces externos abren en nueva pestaña
- [ ] Formulario de contacto funciona
- [ ] Responsive design OK en móvil
- [ ] Velocidad de carga < 3 segundos
- [ ] No hay errores en consola
- [ ] Meta tags correctos
- [ ] Analytics funcionando
- [ ] SSL/HTTPS activado
- [ ] Dominio personalizado (si aplica)
- [ ] Sitemap y robots.txt configurados

## 🎯 Siguientes Pasos

1. **Dominio personalizado:** Considera comprar un dominio profesional
2. **Email profesional:** Configura email con tu dominio
3. **CDN:** Implementa un CDN para mejor rendimiento global
4. **Backup:** Configura respaldos automáticos
5. **Monitoreo:** Establece alertas de uptime y rendimiento
6. **Actualizaciones:** Mantén el contenido actualizado regularmente

---

¡Felicidades! 🎉 Tu portafolio ya está en línea y accesible para todo el mundo. Recuerda mantenerlo actualizado con tus nuevos proyectos y logros profesionales.
