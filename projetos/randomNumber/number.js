'use strict'

let numeroSecreto = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0
console.log(numeroSecreto)
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const ajuda = document.querySelector('.howto');
const fechar = document.querySelector('.fechar-modal')

function verificarAcerto() {
    let numero = Number(document.querySelector('.tentativa').value)
 
    console.log(numero);
     if (!numero ) {
        document.querySelector('.status').textContent = `Insira um número 😒`
    } else if (score <= 0) {
        document.querySelector('.status').textContent = `Game Over.`
        document.querySelector('body').style.backgroundImage = 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)';
    }
    else if (numero > numeroSecreto) {
        score--;
        document.querySelector('.pontuacao').textContent = `Pontuação: ${score}`
        document.querySelector('.status').textContent = `Um pouco menos... `
        
    } else if (numero < numeroSecreto) {
        score--;
        document.querySelector('.pontuacao').textContent = `Pontuação: ${score}`
        document.querySelector('.status').textContent = `Um pouco mais... `
    } else {
        document.querySelector('.status').textContent = `Acertou!!! 👌👌👌 `
        highScore = score
        document.querySelector('.recorde').textContent = `Recorde: ${highScore}`
        document.querySelector('body').style.backgroundImage = 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)';
    }
}

function resetaJogo() {
    document.querySelector('body').style = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);'
    score = 20;
    numeroSecreto = Math.trunc(Math.random()*20)+1;
    document.querySelector('.status').textContent =  `Tente a sorte 😁`
    document.querySelector('.pontuacao').textContent = `Pontuação: ${score}`
    document.querySelector('.tentativa').value = '';
    console.log(numeroSecreto)

}

function abrirModal() {
    modal.classList.toggle('escondido');
    overlay.classList.toggle('escondido');
}

document.querySelector('.checar').addEventListener('click', verificarAcerto)
fechar.addEventListener('click', abrirModal)
overlay.addEventListener('click', abrirModal)
document.querySelector('.howto').addEventListener('click', abrirModal)
document.querySelector('.reset').addEventListener('click', resetaJogo)
document.addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key === 'Escape') {
        abrirModal();
    }
})


