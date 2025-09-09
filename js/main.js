// ============================================
// VARIABLES GLOBALES
// ============================================
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');

// ============================================
// NAVEGACIÓN Y MENÚ MÓVIL
// ============================================

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Si es un enlace de navegación interna
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScrollTo(target);
        }
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll suave para todos los enlaces con clase smooth-scroll
document.addEventListener('click', (e) => {
    if (e.target.closest('.smooth-scroll')) {
        e.preventDefault();
        const link = e.target.closest('.smooth-scroll');
        const target = link.getAttribute('href');
        
        if (target.startsWith('#')) {
            smoothScrollTo(target);
        }
    }
});

// Navegación suave y scroll activo
window.addEventListener('scroll', () => {
    updateActiveNav();
    updateNavbarBackground();
});

function updateActiveNav() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function updateNavbarBackground() {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
}

// ============================================
// ANIMACIONES DE SCROLL
// ============================================

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            
            // Animación especial para barras de habilidades
            if (entry.target.classList.contains('skill-category')) {
                animateSkillBars(entry.target);
            }
        }
    });
}, observerOptions);

// Observar elementos para animaciones (excluyendo project-card para mantenerlas estáticas)
document.querySelectorAll('.about, .skill-category, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
});

// ============================================
// ANIMACIONES DE HABILIDADES
// ============================================

function animateSkillBars(skillCategory) {
    const progressBars = skillCategory.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        setTimeout(() => {
            bar.style.width = skillLevel + '%';
        }, 300);
    });
}

// ============================================
// EFECTOS DE PARALLAX DESHABILITADOS
// ============================================

// Parallax deshabilitado para mantener todos los elementos estáticos
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroSection = document.querySelector('.hero');
//     
//     if (heroSection) {
//         const parallaxSpeed = scrolled * 0.5;
//         heroSection.style.transform = `translateY(${parallaxSpeed}px)`;
//     }
// });

// ============================================
// EFECTOS HOVER MEJORADOS - TARJETAS ESTÁTICAS
// ============================================

// Project cards se mantienen completamente estáticas
// Todos los efectos de movimiento han sido removidos para mantener las imágenes estáticas

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Mostrar estado de carga
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        try {
            // Simular envío de formulario (reemplazar con tu lógica de backend)
            await simulateFormSubmission(formData);
            
            // Mostrar mensaje de éxito
            showNotification('¡Mensaje enviado correctamente!', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Mostrar mensaje de error
            showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
        } finally {
            // Restaurar botón
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}

// Simulación de envío de formulario
function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular éxito/error aleatorio para demostración
            Math.random() > 0.1 ? resolve() : reject();
        }, 2000);
    });
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Cerrar notificación al hacer click
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto cerrar después de 5 segundos
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

// Smooth scroll mejorado para navegadores antiguos
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        // Todas las secciones se muestran completas desde su inicio
        let offsetTop;
        if (target === '#home') {
            offsetTop = 0; // Inicio de la página para home
        } else {
            offsetTop = element.offsetTop; // Inicio exacto de cada sección
        }
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Debounce function para optimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce al scroll
const debouncedScroll = debounce(() => {
    updateActiveNav();
    updateNavbarBackground();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// LAZY LOADING PARA IMÁGENES
// ============================================

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

// ============================================
// TEMA OSCURO/CLARO
// ============================================

function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    
    // Obtener tema guardado del localStorage o usar 'light' por defecto
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Aplicar tema inicial
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);
    
    // Event listener para el botón de cambio de tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Aplicar nuevo tema
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
        
        // Animación suave
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'dark') {
        iconElement.className = 'fas fa-sun';
        iconElement.parentElement.title = 'Cambiar a tema claro';
    } else {
        iconElement.className = 'fas fa-moon';
        iconElement.parentElement.title = 'Cambiar a tema oscuro';
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tema
    initializeTheme();
    
    // Animación inicial del hero
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('animate-fade-in-left');
        document.querySelector('.hero-image').classList.add('animate-fade-in-right');
    }, 500);
    
    // Precargar imágenes críticas
    const criticalImages = [
        'assets/images/profile.jpg',
        'assets/images/projects/project1.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    console.log('🚀 Portafolio cargado correctamente');
});

// ============================================
// MANEJO DE ERRORES GLOBAL
// ============================================

window.addEventListener('error', (e) => {
    console.error('Error en el portafolio:', e.error);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
                console.log(`📊 ${entry.name}: ${entry.duration}ms`);
            }
        }
    });
    
    observer.observe({ entryTypes: ['measure'] });
}
