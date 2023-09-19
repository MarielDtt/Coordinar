document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const submenu = document.querySelector('.submenu');
    const subMenuList = submenu.querySelector('.sub-menu');
    const subMenuItems = subMenuList.querySelectorAll('li');
    const quienesSomos = document.querySelector('.quienes-somos');
    const subMenuListQuienesSomos = quienesSomos.querySelector('.sub-menu');
    const sucursales = document.querySelector('.sucursales');
    const subMenuListSucursales = sucursales.querySelector('.sub-menu');
    let subMenuTimeout;

    // Función para abrir el submenú
    function openSubMenu(subMenuList) {
        subMenuList.style.display = 'block';
    }

    // Función para cerrar el submenú
    function closeSubMenu(subMenuList) {
        subMenuList.style.display = 'none';
    }

    // Función para cerrar el submenú después de un retraso
    function closeSubMenuWithDelay(subMenuList) {
        subMenuTimeout = setTimeout(function () {
            closeSubMenu(subMenuList);
        }, 800); // Cambia 800 a la cantidad de milisegundos que desees de retraso (en este caso, 0.8 segundos)
    }

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
        openSubMenu(subMenuList);
    });

    // Agrega un manejador de ratón para cerrar el submenú cuando el ratón se mueve fuera de él
    submenu.addEventListener('mouseleave', function () {
        closeSubMenuWithDelay(subMenuList);
    });

    // Cancela el temporizador si el ratón vuelve a entrar en el submenú antes de que se cierre
    submenu.addEventListener('mouseenter', function () {
        clearTimeout(subMenuTimeout);
    });

    // Agrega un manejador de clic a "Quienes Somos" para abrir y cerrar el submenú
    quienesSomos.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic llegue al documento
        if (subMenuListQuienesSomos.style.display === 'block') {
            closeSubMenu(subMenuListQuienesSomos);
        } else {
            openSubMenu(subMenuListQuienesSomos);
        }
    });

    // Agrega un manejador de ratón para cerrar el submenú "Quienes Somos" cuando el ratón se mueve fuera de él
    quienesSomos.addEventListener('mouseleave', function () {
        closeSubMenuWithDelay(subMenuListQuienesSomos);
    });

    // Cancela el temporizador si el ratón vuelve a entrar en el submenú "Quienes Somos" antes de que se cierre
    subMenuListQuienesSomos.addEventListener('mouseenter', function () {
        clearTimeout(subMenuTimeout);
    });

    // Agrega un manejador de clic al elemento de submenú "Sucursales"
    sucursales.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic llegue al documento
        openSubMenu(subMenuListSucursales);
    });

    // Agrega un manejador de ratón para cerrar el submenú "Sucursales" cuando el ratón se mueve fuera de él
    sucursales.addEventListener('mouseleave', function () {
        closeSubMenuWithDelay(subMenuListSucursales);
    });

    // Cancela el temporizador si el ratón vuelve a entrar en el submenú "Sucursales" antes de que se cierre
    subMenuListSucursales.addEventListener('mouseenter', function () {
        clearTimeout(subMenuTimeout);
    });
});
