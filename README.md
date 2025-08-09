# Mi Portafolio Personal

Un portafolio web moderno y responsivo desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones Suaves**: Efectos visuales atractivos y profesionales
- **Modo Oscuro/Claro**: Tema adaptable según preferencias del usuario
- **Optimizado para SEO**: Estructura semántica y metadatos apropiados
- **Rendimiento**: Carga rápida y código optimizado
- **Accesibilidad**: Cumple con estándares WCAG

## 📁 Estructura del Proyecto

```
Personal-portafolio/
│
├── index.html              # Página principal
├── README.md               # Documentación del proyecto
│
├── css/
│   ├── style.css          # Estilos principales
│   └── responsive.css     # Estilos responsivos
│
├── js/
│   ├── main.js           # Funcionalidad principal
│   └── animations.js     # Animaciones y efectos
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg   # Foto de perfil
│   │   ├── favicon.ico   # Icono del sitio
│   │   └── projects/     # Imágenes de proyectos
│   │       ├── project1.jpg
│   │       ├── project2.jpg
│   │       └── project3.jpg
│   │
│   └── documents/
│       └── cv.pdf        # Curriculum vitae
│
└── docs/
    ├── SETUP.md          # Guía de configuración
    ├── CUSTOMIZATION.md  # Guía de personalización
    └── DEPLOYMENT.md     # Guía de despliegue
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Poppins)

## 📱 Secciones del Portafolio

1. **Hero/Inicio**: Presentación personal con animación de texto
2. **Sobre Mí**: Información personal y profesional
3. **Habilidades**: Tecnologías y competencias con barras de progreso
4. **Proyectos**: Galería de trabajos realizados
5. **Contacto**: Formulario de contacto y redes sociales

## 🎨 Características de Diseño

### Colores
- **Primario**: `#667eea` (Azul)
- **Secundario**: `#764ba2` (Púrpura)
- **Acento**: `#f093fb` (Rosa)
- **Texto**: `#333333` (Gris oscuro)

### Tipografía
- **Fuente principal**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Efectos Visuales
- Gradientes CSS
- Animaciones CSS3
- Efectos de hover
- Transiciones suaves
- Parallax sutil

## 🚀 Instalación y Uso

1. **Clonar o descargar** el repositorio
2. **Abrir** `index.html` en tu navegador web
3. **Personalizar** el contenido según tus necesidades

### Desarrollo Local

```bash
# Si tienes Python instalado
python -m http.server 3000

# Si tienes Node.js con http-server
npx http-server -p 3000

# Si usas Live Server en VS Code
# Hacer clic derecho en index.html > "Open with Live Server"
```

## ✏️ Personalización

### Información Personal
Edita el archivo `index.html` para cambiar:
- Nombre y título profesional
- Información de contacto
- Descripción personal
- Enlaces a redes sociales

### Proyectos
Actualiza la sección de proyectos con:
- Imágenes de tus proyectos (coloca en `assets/images/projects/`)
- Títulos y descripciones
- Enlaces a repositorios y demos
- Tecnologías utilizadas

### Habilidades
Modifica las barras de progreso:
- Cambia los porcentajes en `data-skill`
- Agrega o quita tecnologías
- Actualiza los iconos de Font Awesome

### Colores y Estilos
Personaliza en `css/style.css`:
- Variables CSS en `:root`
- Gradientes y colores
- Tipografía y espaciado

## 📞 Formulario de Contacto

El formulario incluye:
- Validación HTML5
- Notificaciones de estado
- Animaciones de envío

**Nota**: Necesitarás configurar un backend para procesar los envíos. Opciones recomendadas:
- Formspree
- Netlify Forms
- EmailJS
- PHP mail()

## 🌐 Despliegue

### GitHub Pages
1. Subir código a GitHub
2. Ir a Settings > Pages
3. Seleccionar fuente: main branch
4. Tu sitio estará en: `https://usuario.github.io/repositorio`

### Netlify
1. Conectar repositorio de GitHub
2. Build settings: `./` (directorio actual)
3. Deploy automático en cada push

### Vercel
1. Importar proyecto desde GitHub
2. Deploy automático
3. Dominio personalizado disponible

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- **Dispositivos**: Desktop, Tablet, Móvil
- **Resoluciones**: 320px - 1920px+

## ⚡ Optimizaciones

- **Imágenes**: Comprimir y usar formatos modernos (WebP)
- **CSS**: Minificar para producción
- **JavaScript**: Minificar y usar bundlers si es necesario
- **Fuentes**: Preload de fuentes críticas
- **Lazy Loading**: Implementado para imágenes

## 🔧 Personalización Avanzada

### Agregar nuevas secciones
1. Crear HTML en `index.html`
2. Agregar estilos en `css/style.css`
3. Incluir funcionalidad en `js/main.js`
4. Actualizar navegación

### Integrar CMS
- Headless CMS (Strapi, Contentful)
- Markdown para contenido
- API REST para datos dinámicos

### Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales y comerciales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas:
1. Fork del proyecto
2. Crear rama para feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear Pull Request

## 📧 Soporte

Si tienes preguntas o necesitas ayuda:
- Abrir un issue en GitHub
- Contactar por email
- Revisar la documentación en `/docs`

## 🏆 Inspiración y Créditos

- Diseño inspirado en portfolios modernos
- Iconos: Font Awesome
- Fuentes: Google Fonts
- Gradientes: WebGradients
- Animaciones: Animate.css concepts

---

⭐ **¡No olvides dar una estrella si te gusta el proyecto!**

🚀 **¡Hecho con ❤️ para desarrolladores!**
