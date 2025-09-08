// ============================================
// ANIMACIONES AVANZADAS Y EFECTOS VISUALES
// ============================================

// ============================================
// CONFIGURACIÓN DE ANIMACIONES
// ============================================

const animationConfig = {
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 100,
    staggerDelay: 200
};

// ============================================
// ANIMACIONES DE TEXTO
// ============================================

class TypeWriter {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.wordIndex = 0;
        this.letterIndex = 0;
        this.currentWord = '';
        this.isDeleting = false;
        
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.pauseTime = options.pauseTime || 2000;
        
        this.type();
    }
    
    type() {
        const currentFullWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.currentWord = currentFullWord.substring(0, this.letterIndex - 1);
            this.letterIndex--;
        } else {
            this.currentWord = currentFullWord.substring(0, this.letterIndex + 1);
            this.letterIndex++;
        }
        
        this.element.innerHTML = `<span class="typing-text">${this.currentWord}</span><span class="cursor">|</span>`;
        
        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        if (!this.isDeleting && this.currentWord === currentFullWord) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentWord === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
            
            if (this.wordIndex >= this.words.length) {
                this.wordIndex = 0;
            }
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// EFECTO DE ESCRITURA UNA SOLA VEZ
// ============================================

class OneTimeTypeWriter {
    constructor(element, textParts, options = {}) {
        this.element = element;
        this.textParts = textParts; // Array de partes del texto
        this.currentPartIndex = 0;
        this.letterIndex = 0;
        this.typeSpeed = options.typeSpeed || 100;
        this.showCursor = options.showCursor !== false;
        
        // Limpiar el contenido inicial
        this.element.innerHTML = '';
        this.type();
    }
    
    type() {
        if (this.currentPartIndex < this.textParts.length) {
            const currentPart = this.textParts[this.currentPartIndex];
            
            if (this.letterIndex < currentPart.text.length) {
                const currentChar = currentPart.text[this.letterIndex];
                
                // Construir el HTML actual
                let html = '';
                
                // Agregar partes ya completadas
                for (let i = 0; i < this.currentPartIndex; i++) {
                    const part = this.textParts[i];
                    if (part.isHighlight) {
                        html += `<span class="highlight">${part.text}</span>`;
                    } else {
                        html += part.text;
                    }
                }
                
                // Agregar parte actual en progreso
                const currentText = currentPart.text.substring(0, this.letterIndex + 1);
                if (currentPart.isHighlight) {
                    html += `<span class="highlight">${currentText}</span>`;
                } else {
                    html += currentText;
                }
                
                // Agregar cursor
                if (this.showCursor) {
                    html += '<span class="cursor">|</span>';
                }
                
                this.element.innerHTML = html;
                this.letterIndex++;
                setTimeout(() => this.type(), this.typeSpeed);
            } else {
                // Parte actual completa, pasar a la siguiente
                this.currentPartIndex++;
                this.letterIndex = 0;
                setTimeout(() => this.type(), this.typeSpeed);
            }
        } else {
            // Todo el texto escrito, solo mostrar cursor parpadeando
            let finalHtml = '';
            this.textParts.forEach(part => {
                if (part.isHighlight) {
                    finalHtml += `<span class="highlight">${part.text}</span>`;
                } else {
                    finalHtml += part.text;
                }
            });
            
            if (this.showCursor) {
                finalHtml += '<span class="cursor blinking">|</span>';
            }
            
            this.element.innerHTML = finalHtml;
        }
    }
}

// Inicializar efecto de escritura
document.addEventListener('DOMContentLoaded', () => {
    // Efecto de escritura cíclico para el subtítulo
    const heroSubtitle = document.querySelector('.hero-content h2');
    if (heroSubtitle) {
        const titles = [
            'Desarrollador Web Full Stack',
            'Creador de Experiencias Digitales',
            'Especialista en Frontend',
            'Solucionador de Problemas'
        ];
        new TypeWriter(heroSubtitle, titles);
    }
    
    // Efecto de escritura una sola vez para el título principal
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const textParts = [
            { text: 'Hola, soy ', isHighlight: false },
            { text: 'Darwin Turpo', isHighlight: true }
        ];
        
        new OneTimeTypeWriter(heroTitle, textParts, { typeSpeed: 80 });
    }
});

// ============================================
// PARTÍCULAS ANIMADAS EN EL HERO - DESACTIVADO
// ============================================

/*
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        this.container.appendChild(this.canvas);
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
    }
    
    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }
    
    init() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Actualizar posición
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Interacción con el mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx -= (dx / distance) * force * 0.01;
                particle.vy -= (dy / distance) * force * 0.01;
            }
            
            // Rebote en los bordes
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Dibujar partícula
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
            
            // Conectar partículas cercanas
            for (let j = index + 1; j < this.particles.length; j++) {
                const other = this.particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 120)})`;
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar sistema de partículas - DESACTIVADO
document.addEventListener('DOMContentLoaded', () => {
    // const heroSection = document.querySelector('.hero');
    // if (heroSection) {
    //     heroSection.style.position = 'relative';
    //     new ParticleSystem(heroSection);
    // }
});
*/

// ============================================
// ANIMACIONES DE SCROLL AVANZADAS
// ============================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-animate]');
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -10% 0px'
            }
        );
        
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.dataset.animate;
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    this.animateElement(entry.target, animation);
                }, delay);
                
                this.observer.unobserve(entry.target);
            }
        });
    }
    
    animateElement(element, animation) {
        element.style.transition = `all ${animationConfig.duration}ms ${animationConfig.easing}`;
        element.classList.add(`animate-${animation}`);
        
        // Agregar clase para indicar que la animación ha terminado
        setTimeout(() => {
            element.classList.add('animation-complete');
        }, animationConfig.duration);
    }
}

// ============================================
// EFECTOS VISUALES INTERACTIVOS
// ============================================

class InteractiveEffects {
    constructor() {
        this.setupCardTiltEffect();
        this.setupButtonRippleEffect();
        this.setupImageParallax();
        this.setupSkillBarAnimations();
    }
    
    setupCardTiltEffect() {
        const cards = document.querySelectorAll('.project-card, .skill-category');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease';
            });
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(10px)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.3s ease';
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }
    
    setupButtonRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Agregar keyframes para la animación ripple
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    setupImageParallax() {
        const images = document.querySelectorAll('.project-image img');
        
        window.addEventListener('scroll', () => {
            images.forEach(img => {
                const rect = img.getBoundingClientRect();
                const speed = 0.5;
                const yPos = -(rect.top * speed);
                img.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    setupSkillBarAnimations() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const skillLevel = progressBar.dataset.skill;
                    
                    // Animación con contador
                    let currentProgress = 0;
                    const increment = skillLevel / 50;
                    
                    const animation = setInterval(() => {
                        currentProgress += increment;
                        progressBar.style.width = Math.min(currentProgress, skillLevel) + '%';
                        
                        if (currentProgress >= skillLevel) {
                            clearInterval(animation);
                        }
                    }, 20);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
}

// ============================================
// ANIMACIONES DE CARGA
// ============================================

class LoadingAnimations {
    constructor() {
        this.createLoader();
        this.setupPageTransitions();
    }
    
    createLoader() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">
                    <span>Mi Portafolio</span>
                </div>
                <div class="loader-progress">
                    <div class="loader-bar"></div>
                </div>
                <p class="loader-text">Cargando...</p>
            </div>
        `;
        
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        `;
        
        document.body.appendChild(loader);
        
        // Simular carga y ocultar loader
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            
            setTimeout(() => {
                loader.remove();
                this.triggerEntryAnimations();
            }, 500);
        }, 2000);
    }
    
    triggerEntryAnimations() {
        // Solo mantener elementos estáticos sin animaciones de entrada
        // Exceptuando el título que tiene efecto de escritura
        const heroElements = document.querySelectorAll('.hero-content > *:not(h2)');
        
        heroElements.forEach((element) => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    setupPageTransitions() {
        // Solo aplicar estilos iniciales a elementos que no sean el título h2
        const heroElements = document.querySelectorAll('.hero-content > *:not(h2)');
        heroElements.forEach(element => {
            element.style.cssText = `
                opacity: 1;
                transform: translateY(0);
            `;
        });
    }
}

// ============================================
// EFECTOS DE CURSOR PERSONALIZADO
// ============================================

class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.follower = document.createElement('div');
        this.init();
    }
    
    init() {
        this.cursor.className = 'custom-cursor';
        this.follower.className = 'cursor-follower';
        
        const styles = `
            .custom-cursor {
                position: fixed;
                width: 8px;
                height: 8px;
                background: #667eea;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
            }
            .cursor-follower {
                position: fixed;
                width: 40px;
                height: 40px;
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                transition: all 0.3s ease;
            }
            .cursor-hover .custom-cursor {
                transform: scale(1.5);
                background: #764ba2;
            }
            .cursor-hover .cursor-follower {
                transform: scale(1.5);
                border-color: rgba(118, 75, 162, 0.5);
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.follower);
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.cursor.style.left = mouseX + 'px';
            this.cursor.style.top = mouseY + 'px';
        });
        
        // Animación suave para el follower
        const updateFollower = () => {
            const speed = 0.1;
            followerX += (mouseX - followerX) * speed;
            followerY += (mouseY - followerY) * speed;
            
            this.follower.style.left = followerX - 20 + 'px';
            this.follower.style.top = followerY - 20 + 'px';
            
            requestAnimationFrame(updateFollower);
        };
        updateFollower();
        
        // Efectos hover
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }
}

// ============================================
// INICIALIZACIÓN DE TODAS LAS ANIMACIONES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el dispositivo soporta hover (no touch)
    if (window.matchMedia('(hover: hover)').matches) {
        new CustomCursor();
    }
    
    new ScrollAnimations();
    new InteractiveEffects();
    new LoadingAnimations();
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log(`🚀 Página cargada en: ${navigation.loadEventEnd - navigation.loadEventStart}ms`);
            }, 0);
        });
    }
});

// ============================================
// EXPORT PARA MÓDULOS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TypeWriter,
        ParticleSystem,
        ScrollAnimations,
        InteractiveEffects,
        LoadingAnimations,
        CustomCursor
    };
}
