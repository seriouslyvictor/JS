let h1 = document.querySelector(".principal")
console.log(h1)
let textoH1 = document.querySelector(".principal").textContent

h1.addEventListener('click', mudarTexto)

function mudarTexto () {
    textoH1 = 'Sim!!'
}