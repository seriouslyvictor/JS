const burguer = document.querySelector('.burguer');
const navBar = document.querySelector('.navbar');
const burguerFechar = document.querySelector('.fa-xmark')
const header = document.querySelector('header')

burguer.addEventListener('click', abrirMenu);
burguerFechar.addEventListener('click', abrirMenu)



function abrirMenu() {
    header.classList.toggle('nav-aberto');
    navBar.classList.toggle('nav-aberto');
    navBar.classList.toggle('tilt')
};