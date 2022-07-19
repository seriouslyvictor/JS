'use strict'

const modal = document.querySelector('.modal');
const btnmodal = document.querySelectorAll('.btnmodal');
const overlay = document.querySelector('.overlay');
const btnfechar = document.querySelector('.fechar-modal');

function abrirModal() {
    modal.classList.remove('escondido')
    overlay.classList.remove('escondido')
}


function fecharModal() {
    modal.classList.add('escondido')
    overlay.classList.add('escondido')
}


for (let i = 0; i < btnmodal.length; i++) {
    btnmodal[i].addEventListener('click', abrirModal)
}

btnfechar.addEventListener('click', fecharModal)
overlay.addEventListener('click', fecharModal)


document.addEventListener('keydown', function(e){
    console.log(e)
    if (e.key === "Escape") {
        fecharModal()} 
})