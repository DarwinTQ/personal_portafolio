// ============================================
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
                elem.innerHTML = langObject[key];
            }
            
            // Traducir placeholders
            var placeholderKey = elem.getAttribute('data-translate-placeholder');
            if (placeholderKey != null && langObject[placeholderKey]) {
                elem.setAttribute('placeholder', langObject[placeholderKey]);
            }
        }
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
        "hero_hello": "Hi, I'm <span class=\"highlight\">Darwin Turpo</span>",
        "hero_title": "Full Stack Web Developer",
        "hero_description": "Creating incredible digital experiences with clean code and modern designs.",
        "hero_projects": "View Projects",
        "hero_contact": "Contact Me",

        // About Section
        "about_title": "About Me",
        "about_hello": "Hello! I'm Darwin, Full Stack developer",
        "about_description": "Specialized in web development with solid experience in Java, Python, PHP and Laravel. I'm passionate about creating robust and scalable technological solutions, combining modern frontend with efficient backends. Expert in Oracle SQL databases and version control with Git.",
        "about_cv": "<i class=\"fas fa-download\"></i> Download CV",

        // Skills Section
        "skills_title": "My Skills",
        "skills_frontend": "Frontend",
        "skills_backend": "Backend",
        "skills_tools": "Frameworks & Tools",

        // Projects Section
        "projects_title": "My Projects",
        "project1_title": "Project 1",
        "project1_description": "Project description and technologies used.",
        "project2_title": "Project 2",
        "project2_description": "Project description and technologies used.",
        "project3_title": "Project 3",
        "project3_description": "Project description and technologies used.",

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
        "hero_hello": "Hola, soy <span class=\"highlight\">Darwin Turpo</span>",
        "hero_title": "Desarrollador Web Full Stack",
        "hero_description": "Creando experiencias digitales increíbles con código limpio y diseños modernos.",
        "hero_projects": "Ver Proyectos",
        "hero_contact": "Contactarme",

        // About Section
        "about_title": "Sobre Mí",
        "about_hello": "¡Hola! Soy Darwin, desarrollador Full Stack",
        "about_description": "Especializado en desarrollo web con sólida experiencia en Java, Python, PHP y Laravel. Me apasiona crear soluciones tecnológicas robustas y escalables, combinando frontend moderno con backends eficientes. Experto en bases de datos Oracle SQL y control de versiones con Git.",
        "about_cv": "<i class=\"fas fa-download\"></i> Descargar CV",

        // Skills Section
        "skills_title": "Mis Habilidades",
        "skills_frontend": "Frontend",
        "skills_backend": "Backend",
        "skills_tools": "Frameworks & Tools",

        // Projects Section
        "projects_title": "Mis Proyectos",
        "project1_title": "Proyecto 1",
        "project1_description": "Descripción del proyecto y tecnologías utilizadas.",
        "project2_title": "Proyecto 2",
        "project2_description": "Descripción del proyecto y tecnologías utilizadas.",
        "project3_title": "Proyecto 3",
        "project3_description": "Descripción del proyecto y tecnologías utilizadas.",

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
