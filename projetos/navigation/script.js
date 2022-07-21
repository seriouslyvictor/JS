const burguer = document.querySelector('.burguer');
const navBar = document.querySelector('.navbar');
const burguerFechar = document.querySelector('.closeburguer')
const header = document.querySelector('header')

burguer.addEventListener('click', abrirMenu);
burguerFechar.addEventListener('click', abrirMenu)



function abrirMenu() {
    navBar.classList.toggle('nav-aberto')
    header.classList.toggle('nav-aberto')
}
