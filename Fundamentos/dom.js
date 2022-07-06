let h1 = document.querySelector('.js');
let textoH1 = document.querySelector('.js').textContent;

console.log(h1)
console.log(textoH1)

h1.addEventListener('click', mudarTexto);
function mudarTexto () {
h1.textContent = 'Sim!!!'
}
