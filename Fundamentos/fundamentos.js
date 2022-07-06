let h1 = document.querySelector('.js');
console.log(h1);
// let textoH1 = document.querySelector(".js").textContent()

h1.addEventListener('click', mudarTexto)

function mudarTexto () {
    h1.textContent = 'Sim!!'
}