// Inicializar iconos de Lucide de manera robusta
const initIcons = () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    // Si aún no carga, reintentar en 100ms
    setTimeout(initIcons, 100);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Ejecutar inicialización de iconos
  initIcons();

  // Lógica del menú móvil
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (btn && menu) {
    const mobileLinks = menu.querySelectorAll('a');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }

  // Cambiar fondo del Navbar al hacer scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-xl', 'bg-chicago-dark/95');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('shadow-xl', 'bg-chicago-dark/95');
        navbar.classList.add('bg-transparent');
      }
    });
  }

  // Intersection Observer para las animaciones de fade-in
  const sections = document.querySelectorAll('.fade-in-section');
  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }
});
