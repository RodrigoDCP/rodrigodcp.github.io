// Spectral Shift: Psychiatric Containment Presentation Page Script

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-scroll');
                // Optional: add a slight delay for nested elements
                if (entry.target.classList.contains('features-grid')) {
                    const cards = entry.target.querySelectorAll('.feature-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible-scroll');
                        }, index * 150);
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.hidden-scroll');
    scrollElements.forEach(el => observer.observe(el));

    // --- Language System ---
    const langBtns = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('.i18n');
    const i18nGlitchElements = document.querySelectorAll('.i18n-glitch');

    function setLanguage(lang) {
        // Update standard elements
        i18nElements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) el.textContent = text;
        });

        // Update glitch elements (content + data-text attribute)
        i18nGlitchElements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.textContent = text;
                el.setAttribute('data-text', text);
            }
        });

        // Update active button state
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Save preference
        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Load preferred language
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    // --- Asset Protection ---
    const protectedAssets = document.querySelectorAll('img, video');

    protectedAssets.forEach(asset => {
        // Prevent right click
        asset.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        // Prevent dragging
        asset.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // --- Glitch Effect ---
    const glitchTexts = document.querySelectorAll('.i18n-glitch, .glitch-text');
    setInterval(() => {
        glitchTexts.forEach(text => {
            if (Math.random() > 0.98) {
                const x = Math.random() * 4 - 2;
                const y = Math.random() * 4 - 2;
                text.style.transform = `translate(${x}px, ${y}px)`;
                setTimeout(() => {
                    text.style.transform = 'translate(0, 0)';
                }, 40);
            }
        });
    }, 150);
});
