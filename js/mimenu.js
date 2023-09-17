document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const submenu = document.querySelector('.submenu');
    const subMenuList = submenu.querySelector('.sub-menu');

    // Agrega un manejador de clic al botón de menú
    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic llegue al documento
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Agrega un manejador de clic al documento para cerrar el menú
    document.addEventListener('click', function (event) {
        if (dropdownMenu.style.display === 'block' &&
            event.target !== menuToggle &&
            !menuToggle.contains(event.target) &&
            !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Agrega un manejador de clic al elemento de submenú "Acceso Comercializadores"
    submenu.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic llegue al documento
        if (subMenuList.style.display === 'block') {
            subMenuList.style.display = 'none';
        } else {
            subMenuList.style.display = 'block';
        }
    });
});
