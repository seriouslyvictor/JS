const pontos = document.querySelectorAll('.ponto');
const imagens = document.querySelectorAll('.itemslider');
const navArrowR = document.querySelector('.right');
const navArrowL = document.querySelector('.left');

let slideAtual = 0;

console.log(imagens);
navArrowR.addEventListener('click', proximo);
navArrowL.addEventListener('click', anterior);


function proximo() {
    slideAtual++;
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove('visivel')    
        pontos[i].classList.remove('cheio')   
    }
    
    if(slideAtual <= imagens.length - 1) {
    imagens[slideAtual].classList.toggle('visivel');
    pontos[slideAtual].classList.toggle('cheio')
    } else {
    slideAtual = 0
    imagens[slideAtual].classList.toggle('visivel');
    pontos[slideAtual].classList.toggle('cheio');}
    
    console.log(slideAtual);
}

function anterior() {
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove('visivel')    
        pontos[i].classList.remove('cheio')   
    }
    if (slideAtual === 0) {
        imagens[imagens.length-1].classList.toggle('visivel')
        pontos[pontos.length -1].classList.toggle('cheio');
        slideAtual = imagens.length-1;
    }  else {
        slideAtual--;
        imagens[slideAtual].classList.toggle('visivel')
        pontos[slideAtual].classList.toggle('cheio');
    }
    console.log(slideAtual);
}