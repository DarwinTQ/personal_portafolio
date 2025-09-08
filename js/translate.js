
// SISTEMA DE TRADUCCIÓN PARA EL PORTAFOLIO
// ============================================

function Translate() {
    // Inicialización
    this.init = function (attribute, lang) {
        this.attribute = attribute;
        this.lang = lang;
    }

    this.process = function () {
        // Traducir elementos
        var langObject = translations[this.lang];
        var allDom = document.getElementsByTagName("*");
        
        for (var i = 0; i < allDom.length; i++) {
            var elem = allDom[i];
            var key = elem.getAttribute(this.attribute);
            if (key != null) {
                // Manejo especial para el h1 con efecto de escritura
                if (elem.tagName === 'H1' && key === 'hero_hello') {
                    this.updateHeroTitle(elem, langObject[key]);
                } else {
                    elem.innerHTML = langObject[key];
                }
            }
            
            // Traducir placeholders
            var placeholderKey = elem.getAttribute('data-translate-placeholder');
            if (placeholderKey != null && langObject[placeholderKey]) {
                elem.setAttribute('placeholder', langObject[placeholderKey]);
            }
        }
    }
    
    this.updateHeroTitle = function(element, text) {
        // Extraer las partes del texto
        var parts = text.split('Darwin Turpo');
        var textParts = [
            { text: parts[0], isHighlight: false },
            { text: 'Darwin Turpo', isHighlight: true }
        ];
        
        // Si hay texto después del nombre, agregarlo
        if (parts[1]) {
            textParts.push({ text: parts[1], isHighlight: false });
        }
        
        // Reiniciar el efecto de escritura
        new OneTimeTypeWriter(element, textParts, { typeSpeed: 80 });
    }
}

// Objeto con todas las traducciones
var translations = {
    "en": {
        // Navegación
        "nav_home": "Home",
        "nav_about": "About Me",
        "nav_skills": "Skills",
        "nav_projects": "Projects",
        "nav_contact": "Contact",

        // Hero Section
        "hero_hello": "Hi there, I'm Darwin Turpo",
        "hero_title": "Full Stack Web Developer",
        "hero_description": "Creating incredible digital experiences with clean code and modern designs.",
        "hero_projects": "View Projects",
        "hero_contact": "Contact Me",

        // About Section
        "about_title": "About Me",
        "about_hello": "Hello! I'm Darwin, Full Stack developer",
        "about_description": "I am a Software Engineering with AI and Telecommunications Engineering student, passionate about continuous learning and exploring new technologies. My goal is to apply my knowledge to develop innovative and efficient solutions that solve complex problems. I really enjoy teamwork, convinced that collaboration is key to creating high-impact projects.",
        "about_cv": "<i class=\"fas fa-download\"></i> Download CV",

        // Skills Section
        "skills_title": "My Skills",
        "skills_frontend": "Frontend",
        "skills_backend": "Backend",
        "skills_tools": "Frameworks & Tools",

        // Projects Section
        "projects_title": "My Projects",
        "project1_title": "PeruBank",
        "project1_description": "Banking system developed in Java with Oracle SQL database for account and transaction management.",
        "project2_title": "EcoMarket",
        "project2_description": "Ecological store for selling natural and ecological products developed with modern web technologies.",
        "project3_title": "Web Scraper UNSA",
        "project3_description": "Scraper that extracts partial grades from UNSA students and automatically calculates their weighted average.",
        "project4_title": "Adidas Logistics System",
        "project4_description": "Product tracking system for users, developed with Laravel and MySQL for efficient logistics management.",

        // Contact Section
        "contact_title": "Contact",
        "contact_connect": "Let's Connect!",
        "contact_description": "Do you have a project in mind or want to collaborate? Don't hesitate to contact me.",
        "contact_email": "Email",
        "contact_phone": "Phone",
        "contact_location": "Location",
        "form_name": "Your name",
        "form_email": "Your email",
        "form_subject": "Subject",
        "form_message": "Your message",
        "form_send": "<i class=\"fas fa-paper-plane\"></i> Send Message",

        // Footer
        "footer_copyright": "© 2025 Darwin Turpo. All rights reserved.",
        "footer_home": "Home",
        "footer_about": "About Me",
        "footer_projects": "Projects",
        "footer_contact": "Contact"
    },
    "es": {
        // Navegación
        "nav_home": "Inicio",
        "nav_about": "Sobre Mí",
        "nav_skills": "Habilidades",
        "nav_projects": "Proyectos",
        "nav_contact": "Contacto",

        // Hero Section
        "hero_hello": "Hola, soy Darwin Turpo",
        "hero_title": "Desarrollador Web Full Stack",
        "hero_description": "Creando experiencias digitales increíbles con código limpio y diseños modernos.",
        "hero_projects": "Ver Proyectos",
        "hero_contact": "Contactarme",

        // About Section
        "about_title": "Sobre Mí",
        "about_hello": "¡Hola! Soy Darwin, desarrollador Full Stack",
        "about_description": "Soy estudiante de Ingeniería de Software con IA e Ingeniería de Telecomunicaciones, apasionado por el aprendizaje continuo y la exploración de nuevas tecnologías. Mi objetivo es aplicar mis conocimientos para desarrollar soluciones innovadoras y eficientes que resuelvan problemas complejos. Disfruto mucho del trabajo en equipo, convencido de que la colaboración es clave para crear proyectos de gran impacto.",
        "about_cv": "<i class=\"fas fa-download\"></i> Descargar CV",

        // Skills Section
        "skills_title": "Mis Habilidades",
        "skills_frontend": "Frontend",
        "skills_backend": "Backend",
        "skills_tools": "Frameworks & Tools",

        // Projects Section
        "projects_title": "Mis Proyectos",
        "project1_title": "PeruBank",
        "project1_description": "Sistema bancario desarrollado en Java con base de datos Oracle SQL para gestión de cuentas y transacciones.",
        "project2_title": "EcoMarket",
        "project2_description": "Tienda ecológica de venta de productos naturales y ecológicos desarrollada con tecnologías web modernas.",
        "project3_title": "Web Scraper UNSA",
        "project3_description": "Scraper que extrae notas parciales de estudiantes de la UNSA y calcula su promedio ponderado automáticamente.",
        "project4_title": "Sistema Logística Adidas",
        "project4_description": "Sistema de seguimiento de productos para usuarios, desarrollado con Laravel y MySQL para gestión logística eficiente.",

        // Contact Section
        "contact_title": "Contacto",
        "contact_connect": "¡Conectemos!",
        "contact_description": "¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.",
        "contact_email": "Email",
        "contact_phone": "Teléfono",
        "contact_location": "Ubicación",
        "form_name": "Tu nombre",
        "form_email": "Tu email",
        "form_subject": "Asunto",
        "form_message": "Tu mensaje",
        "form_send": "<i class=\"fas fa-paper-plane\"></i> Enviar Mensaje",

        // Footer
        "footer_copyright": "© 2025 Darwin Turpo. Todos los derechos reservados."
    }
};

// ============================================
// INICIALIZACIÓN DEL SISTEMA DE TRADUCCIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Crear instancia del traductor
    var translator = new Translate();
    
    // Configurar idioma por defecto
    var defaultLang = 'es'; // Español por defecto
    translator.init('data-translate', defaultLang);
    
    // Guardar idioma actual
    var currentLang = defaultLang;
    
    // Actualizar botones de idioma
    function updateLanguageButtons(lang) {
        var enBtn = document.getElementById('enTranslator');
        var esBtn = document.getElementById('esTranslator');
        
        // Remover clase active de ambos botones
        enBtn.classList.remove('active');
        esBtn.classList.remove('active');
        
        if (lang === 'en') {
            enBtn.classList.add('active');
            enBtn.style.color = '';
            esBtn.style.color = '';
        } else {
            esBtn.classList.add('active');
            enBtn.style.color = '';
            esBtn.style.color = '';
        }
    }
    
    // Event listeners para los botones de idioma
    document.getElementById('enTranslator').addEventListener('click', function() {
        if (currentLang !== 'en') {
            translator.init('data-translate', 'en');
            translator.process();
            currentLang = 'en';
            updateLanguageButtons('en');
            
            // Guardar preferencia en localStorage
            localStorage.setItem('preferred-language', 'en');
        }
    });
    
    document.getElementById('esTranslator').addEventListener('click', function() {
        if (currentLang !== 'es') {
            translator.init('data-translate', 'es');
            translator.process();
            currentLang = 'es';
            updateLanguageButtons('es');
            
            // Guardar preferencia en localStorage
            localStorage.setItem('preferred-language', 'es');
        }
    });
    
    // Cargar idioma guardado
    var savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== defaultLang) {
        translator.init('data-translate', savedLang);
        translator.process();
        currentLang = savedLang;
        updateLanguageButtons(savedLang);
    } else {
        updateLanguageButtons(defaultLang);
        // Inicializar el efecto de escritura para el idioma por defecto
        translator.process();
    }
});

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Función para detectar idioma del navegador
function getBrowserLanguage() {
    var lang = navigator.language || navigator.userLanguage;
    return lang.substring(0, 2); // Obtener solo los primeros 2 caracteres (ej: 'es', 'en')
}

// Función para cambiar idioma programáticamente
function changeLanguage(lang) {
    if (translations[lang]) {
        var translator = new Translate();
        translator.init('data-translate', lang);
        translator.process();
        
        // Actualizar botones
        var event = new CustomEvent('languageChanged', { detail: { language: lang } });
        document.dispatchEvent(event);
    }
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Translate, translations, changeLanguage };
}
