document.addEventListener('DOMContentLoaded', () => {
    // Actualizar el año en el footer automáticamente
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lógica para la barra de navegación al hacer scroll
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoText = document.getElementById('logo-text');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Estado con scroll (fondo blanco)
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('bg-white', 'shadow-md', 'py-2');

            // Cambiar color del logo a oscuro
            logoText.classList.remove('text-white', 'drop-shadow-md');
            logoText.classList.add('text-motul-dark');

            // Cambiar color de los enlaces a oscuro
            navLinks.forEach(link => {
                link.classList.remove('text-white', 'drop-shadow-md');
                link.classList.add('text-motul-dark');
            });

            // Cambiar icono de menú móvil a oscuro
            mobileBtn.classList.remove('text-white', 'drop-shadow-md');
            mobileBtn.classList.add('text-motul-dark');

        } else {
            // Estado original arriba (fondo transparente)
            navbar.classList.add('bg-transparent', 'py-4');
            navbar.classList.remove('bg-white', 'shadow-md', 'py-2');

            // Restaurar color del logo a blanco
            logoText.classList.add('text-white', 'drop-shadow-md');
            logoText.classList.remove('text-motul-dark');

            // Restaurar color de los enlaces a blanco
            navLinks.forEach(link => {
                link.classList.add('text-white', 'drop-shadow-md');
                link.classList.remove('text-motul-dark');
            });

            // Restaurar icono de menú móvil a blanco
            mobileBtn.classList.add('text-white', 'drop-shadow-md');
            mobileBtn.classList.remove('text-motul-dark');
        }
    });

    // Lógica para el menú móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Abrir/Cerrar menú
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer clic en un enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});
