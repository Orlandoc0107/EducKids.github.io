//Funcion para Mostrar o ocultar el Nav

function mostrarMenu() {
    let botonMenu = document.querySelector('#boton-menu');
    let nav = document.querySelector('nav');
    nav.style.left = nav.style.left === '-450px' ? '0' : '-450px';
    localStorage.setItem('menuOpen', nav.style.left === '0' ? 'true' : 'false');
}