# Guía de Personalización - Mi Portafolio

Esta guía detallada te ayudará a personalizar completamente tu portafolio para que refleje tu estilo y personalidad únicos.

## 🎨 Personalización Visual

### 1. Esquema de Colores

#### Paletas de Colores Recomendadas

**Opción 1: Azul Profesional**
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --gradient-primary: linear-gradient(135deg, #2563eb, #1e40af);
}
```

**Opción 2: Verde Tecnológico**
```css
:root {
    --primary-color: #059669;
    --secondary-color: #047857;
    --accent-color: #10b981;
    --gradient-primary: linear-gradient(135deg, #059669, #047857);
}
```

**Opción 3: Púrpura Creativo**
```css
:root {
    --primary-color: #7c3aed;
    --secondary-color: #6d28d9;
    --accent-color: #8b5cf6;
    --gradient-primary: linear-gradient(135deg, #7c3aed, #6d28d9);
}
```

**Opción 4: Naranja Dinámico**
```css
:root {
    --primary-color: #ea580c;
    --secondary-color: #c2410c;
    --accent-color: #f97316;
    --gradient-primary: linear-gradient(135deg, #ea580c, #c2410c);
}
```

#### Generadores de Paletas
- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Herramienta profesional
- [Paletton](https://paletton.com/) - Teoría del color
- [Material Design Colors](https://material.io/design/color/) - Colores de Material Design

### 2. Tipografía Personalizada

#### Fuentes Recomendadas

**Para Desarrolladores:**
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-code: 'JetBrains Mono', monospace;
}
```

**Para Diseñadores:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
```css
:root {
    --font-primary: 'Source Sans Pro', sans-serif;
    --font-headings: 'Playfair Display', serif;
}
```

**Para Creativos:**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
```css
:root {
    --font-primary: 'Open Sans', sans-serif;
    --font-headings: 'Montserrat', sans-serif;
}
```

### 3. Efectos Visuales Personalizados

#### Gradientes Creativos
```css
/* Gradiente Sunset */
--gradient-sunset: linear-gradient(135deg, #ff7e5f, #feb47b);

/* Gradiente Ocean */
--gradient-ocean: linear-gradient(135deg, #667eea, #764ba2);

/* Gradiente Forest */
--gradient-forest: linear-gradient(135deg, #11998e, #38ef7d);

/* Gradiente Royal */
--gradient-royal: linear-gradient(135deg, #667db6, #0082c8, #0082c8, #667db6);
```

#### Sombras Personalizadas
```css
:root {
    /* Sombras suaves */
    --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    /* Sombras coloridas */
    --shadow-colored: 0 10px 30px rgba(102, 126, 234, 0.3);
    
    /* Sombras dramáticas */
    --shadow-dramatic: 0 20px 60px rgba(0, 0, 0, 0.2);
}
```

## 🖼️ Personalización de Contenido

### 1. Sección Hero Personalizada

#### Variante 1: Enfoque Minimalista
```html
<section id="home" class="hero hero-minimal">
    <div class="hero-content">
        <h1>Tu Nombre</h1>
        <p class="hero-subtitle">Desarrollador Full Stack</p>
        <div class="hero-cta">
            <a href="#projects" class="btn btn-outline">Ver Trabajo</a>
        </div>
    </div>
</section>
```

#### Variante 2: Enfoque Creativo
```html
<section id="home" class="hero hero-creative">
    <div class="hero-content">
        <div class="hero-text">
            <span class="hero-greeting">¡Hola mundo!</span>
            <h1>Soy <span class="highlight">Tu Nombre</span></h1>
            <div class="hero-roles">
                <span class="role active">Frontend Developer</span>
                <span class="role">UI/UX Designer</span>
                <span class="role">Problem Solver</span>
            </div>
        </div>
        <div class="hero-visual">
            <!-- Animación o ilustración personalizada -->
        </div>
    </div>
</section>
```

### 2. Secciones Adicionales

#### Experiencia Laboral
```html
<section id="experience" class="experience">
    <div class="container">
        <h2 class="section-title">Experiencia</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2023 - Presente</div>
                <div class="timeline-content">
                    <h3>Senior Developer</h3>
                    <h4>Empresa XYZ</h4>
                    <p>Descripción de responsabilidades y logros.</p>
                </div>
            </div>
            <!-- Más elementos de timeline -->
        </div>
    </div>
</section>
```

#### Testimonios
```html
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">Testimonios</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"Excelente trabajo y muy profesional..."</p>
                </div>
                <div class="testimonial-author">
                    <img src="assets/images/testimonial1.jpg" alt="Cliente">
                    <div>
                        <h4>Nombre Cliente</h4>
                        <span>CEO, Empresa</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### Blog/Artículos
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Artículos Recientes</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <img src="assets/images/blog/article1.jpg" alt="Artículo">
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-date">15 Ene 2024</span>
                        <span class="blog-category">Tutorial</span>
                    </div>
                    <h3>Título del Artículo</h3>
                    <p>Breve descripción del artículo...</p>
                    <a href="#" class="blog-link">Leer más</a>
                </div>
            </article>
        </div>
    </div>
</section>
```

### 3. Personalización de Proyectos

#### Filtros de Proyectos
```html
<div class="project-filters">
    <button class="filter-btn active" data-filter="all">Todos</button>
    <button class="filter-btn" data-filter="web">Web</button>
    <button class="filter-btn" data-filter="mobile">Móvil</button>
    <button class="filter-btn" data-filter="design">Diseño</button>
</div>
```

```javascript
// JavaScript para filtros
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
```

#### Proyectos con Modal
```html
<div class="project-modal" id="project-modal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-body">
            <img src="" alt="" id="modal-image">
            <div class="modal-info">
                <h3 id="modal-title"></h3>
                <p id="modal-description"></p>
                <div class="modal-tech" id="modal-tech"></div>
                <div class="modal-links">
                    <a href="#" id="modal-demo" target="_blank">Ver Demo</a>
                    <a href="#" id="modal-github" target="_blank">Ver Código</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🎭 Estilos de Personalidad

### 1. Estilo Profesional/Corporativo

```css
/* Colores neutros y serios */
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #1e40af;
    --text-color: #374151;
    --bg-color: #f9fafb;
}

/* Tipografía formal */
body {
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
}

/* Espaciado generoso */
.section {
    padding: 80px 0;
}

/* Bordes limpios */
.card {
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}
```

### 2. Estilo Creativo/Artístico

```css
/* Colores vibrantes */
:root {
    --primary-color: #ec4899;
    --secondary-color: #8b5cf6;
    --accent-color: #f59e0b;
}

/* Formas orgánicas */
.hero {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.card {
    border-radius: 20px;
    transform: rotate(-2deg);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: rotate(0deg) scale(1.05);
}

/* Tipografía expresiva */
h1 {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    line-height: 1.1;
}
```

### 3. Estilo Tech/Desarrollador

```css
/* Colores tech */
:root {
    --primary-color: #00d9ff;
    --secondary-color: #0ea5e9;
    --bg-dark: #0f172a;
    --text-green: #22c55e;
}

/* Elementos de código */
.code-style {
    font-family: 'JetBrains Mono', monospace;
    background: #1e293b;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
}

/* Efectos matrix/cyber */
.matrix-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle, #00ff41 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
    animation: matrix 20s linear infinite;
}

@keyframes matrix {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}
```

### 4. Estilo Minimalista

```css
/* Paleta monocromática */
:root {
    --primary-color: #000000;
    --secondary-color: #404040;
    --text-color: #606060;
    --bg-color: #ffffff;
    --accent-color: #f5f5f5;
}

/* Espaciado limpio */
.minimal-section {
    padding: 120px 0;
}

/* Sin decoraciones */
.minimal-card {
    background: transparent;
    border: none;
    box-shadow: none;
}

/* Tipografía simple */
h1, h2, h3 {
    font-weight: 300;
    letter-spacing: -0.02em;
}

/* Líneas sutiles */
.section-divider {
    width: 100%;
    height: 1px;
    background: #e5e5e5;
    margin: 80px 0;
}
```

## 🌐 Personalización Internacional

### 1. Soporte Multiidioma

```html
<!-- Selector de idioma -->
<div class="language-selector">
    <button class="lang-btn active" data-lang="es">ES</button>
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="fr">FR</button>
</div>
```

```javascript
// Objeto con traducciones
const translations = {
    es: {
        'hero.title': 'Hola, soy',
        'hero.subtitle': 'Desarrollador Web Full Stack',
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí'
    },
    en: {
        'hero.title': 'Hi, I am',
        'hero.subtitle': 'Full Stack Web Developer',
        'nav.home': 'Home',
        'nav.about': 'About'
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
```

### 2. Formatos Regionales

```javascript
// Formatear fechas según la región
const formatDate = (date, locale = 'es-ES') => {
    return new Intl.DateTimeFormat(locale).format(date);
};

// Formatear números
const formatNumber = (number, locale = 'es-ES') => {
    return new Intl.NumberFormat(locale).format(number);
};
```

## 🔧 Personalización Técnica Avanzada

### 1. Sistema de Temas Dinámico

```javascript
class ThemeManager {
    constructor() {
        this.themes = {
            light: {
                '--bg-color': '#ffffff',
                '--text-color': '#333333',
                '--primary-color': '#667eea'
            },
            dark: {
                '--bg-color': '#1a1a1a',
                '--text-color': '#ffffff',
                '--primary-color': '#8b9dff'
            },
            auto: 'system-preference'
        };
        
        this.currentTheme = localStorage.getItem('theme') || 'auto';
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }
    
    applyTheme(themeName) {
        if (themeName === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            themeName = prefersDark ? 'dark' : 'light';
        }
        
        const theme = this.themes[themeName];
        const root = document.documentElement;
        
        Object.entries(theme).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
        
        localStorage.setItem('theme', this.currentTheme);
    }
}
```

### 2. Personalización de Animaciones

```javascript
class AnimationController {
    constructor() {
        this.preferences = {
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            duration: 300,
            easing: 'ease-out'
        };
    }
    
    animate(element, animation, options = {}) {
        if (this.preferences.reducedMotion) return;
        
        const config = {
            duration: options.duration || this.preferences.duration,
            easing: options.easing || this.preferences.easing,
            ...options
        };
        
        element.animate(animation, config);
    }
}
```

### 3. Personalización del Cursor

```css
/* Cursor personalizado por sección */
.hero {
    cursor: url('assets/images/cursor-creative.png'), auto;
}

.projects {
    cursor: url('assets/images/cursor-pointer.png'), pointer;
}

.contact {
    cursor: url('assets/images/cursor-text.png'), text;
}

/* Efectos de cursor con CSS */
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
}

.cursor-hover {
    transform: scale(2);
    background: var(--accent-color);
}
```

## 📱 Personalización Móvil

### 1. Navegación Móvil Personalizada

```css
/* Menú hamburguesa animado */
.hamburger-custom {
    position: relative;
    width: 30px;
    height: 20px;
    cursor: pointer;
}

.hamburger-custom span {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    transition: 0.3s;
}

.hamburger-custom span:nth-child(1) { top: 0; }
.hamburger-custom span:nth-child(2) { top: 9px; }
.hamburger-custom span:nth-child(3) { top: 18px; }

.hamburger-custom.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-custom.active span:nth-child(2) {
    opacity: 0;
}

.hamburger-custom.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}
```

### 2. Gestos Táctiles

```javascript
class TouchGestures {
    constructor(element) {
        this.element = element;
        this.startX = 0;
        this.startY = 0;
        this.init();
    }
    
    init() {
        this.element.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.element.addEventListener('touchmove', this.handleTouchMove.bind(this));
        this.element.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }
    
    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
    }
    
    handleTouchMove(e) {
        e.preventDefault(); // Prevenir scroll si es necesario
    }
    
    handleTouchEnd(e) {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = this.startX - endX;
        const diffY = this.startY - endY;
        
        // Detectar dirección del swipe
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 50) {
                this.onSwipeLeft();
            } else if (diffX < -50) {
                this.onSwipeRight();
            }
        }
    }
    
    onSwipeLeft() {
        // Acción para swipe izquierda
    }
    
    onSwipeRight() {
        // Acción para swipe derecha
    }
}
```

## 💡 Ideas de Personalización Creativa

### 1. Modo Nocturno/Diurno Automático

```javascript
// Cambiar tema según la hora del día
const autoTheme = () => {
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 18;
    
    document.body.classList.toggle('day-theme', isDayTime);
    document.body.classList.toggle('night-theme', !isDayTime);
};

setInterval(autoTheme, 60000); // Verificar cada minuto
```

### 2. Efectos Estacionales

```javascript
// Agregar efectos según la época del año
const addSeasonalEffects = () => {
    const month = new Date().getMonth();
    
    switch (month) {
        case 11: case 0: case 1: // Invierno
            document.body.classList.add('winter-theme');
            addSnowEffect();
            break;
        case 2: case 3: case 4: // Primavera
            document.body.classList.add('spring-theme');
            addPetalEffect();
            break;
        case 5: case 6: case 7: // Verano
            document.body.classList.add('summer-theme');
            break;
        case 8: case 9: case 10: // Otoño
            document.body.classList.add('autumn-theme');
            addLeavesEffect();
            break;
    }
};
```

### 3. Personalización Según Hora

```css
/* Colores según la hora */
.morning-theme {
    --primary-color: #fbbf24;
    --secondary-color: #f59e0b;
}

.afternoon-theme {
    --primary-color: #06b6d4;
    --secondary-color: #0891b2;
}

.evening-theme {
    --primary-color: #8b5cf6;
    --secondary-color: #7c3aed;
}

.night-theme {
    --primary-color: #1e293b;
    --secondary-color: #0f172a;
}
```

## ✨ Elementos Únicos

### 1. Signature/Firma Digital

```html
<div class="digital-signature">
    <svg viewBox="0 0 200 100">
        <path d="M10,50 Q50,10 100,50 T190,50" 
              stroke="var(--primary-color)" 
              stroke-width="2" 
              fill="none">
            <animate attributeName="stroke-dasharray" 
                     values="0,300;300,0" 
                     dur="3s" 
                     repeatCount="indefinite"/>
        </path>
    </svg>
    <span class="signature-text">Tu Nombre</span>
</div>
```

### 2. Easter Eggs

```javascript
// Konami Code
let konamiCode = '';
const konami = '38384040373937396665';

document.addEventListener('keydown', (e) => {
    konamiCode += e.keyCode;
    if (konamiCode.length > 20) {
        konamiCode = konamiCode.substr(-20);
    }
    if (konamiCode === konami) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.classList.add('matrix-mode');
    // Efecto especial por 10 segundos
    setTimeout(() => {
        document.body.classList.remove('matrix-mode');
    }, 10000);
}
```

### 3. Contador de Visitantes Único

```javascript
// Sistema de estadísticas simples
class VisitorStats {
    constructor() {
        this.storageKey = 'portfolio-stats';
        this.stats = this.loadStats();
        this.updateStats();
        this.displayStats();
    }
    
    loadStats() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {
            visits: 0,
            lastVisit: null,
            totalTime: 0
        };
    }
    
    updateStats() {
        this.stats.visits++;
        this.stats.lastVisit = new Date().toISOString();
        this.saveStats();
    }
    
    saveStats() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.stats));
    }
    
    displayStats() {
        // Mostrar estadísticas en algún lugar discreto
        const statsElement = document.querySelector('.visitor-stats');
        if (statsElement) {
            statsElement.textContent = `Visita #${this.stats.visits}`;
        }
    }
}
```

---

Con todas estas opciones de personalización, podrás crear un portafolio verdaderamente único que refleje tu personalidad y estilo profesional. ¡Experimenta y diviértete creando! 🎨✨
