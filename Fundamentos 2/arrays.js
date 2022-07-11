'use strict'

// Data-Structures - Arrays


const amigos = ['Netão', 'Edão', 'Camboja'];
console.log(amigos);

const anos = new Array(1991, 1984, 2008, 2020);
console.log(anos);

// Escolhendo elementos especificos do Array

console.log(amigos[2]);
console.log(amigos.length);
console.log(amigos[amigos.length -1])

amigos[2] = `Cris`;
console.log(amigos[2]);

const pessoa = new Array('Victor', 'Schiavo', 2022 - 1987, "Osasco", 'São Paulo')
console.log(pessoa);

function calculaIdade(nascimento) {
    return 2022 - nascimento;
}

const idades = [calculaIdade(anos[0]), calculaIdade(anos[1]), calculaIdade(anos[2]), calculaIdade(anos[anos.length - 1])]
console.log(idades);


// Adicionando elementos ao Array
amigos.push(`Tibúrcio`)
console.log(amigos);
// Adiciona elementos no fim do array


amigos.unshift('Curupira')
console.log(amigos);
// Adiciona elementos no começo do array

// Removendo elementos do Array
amigos.pop(); //remove o último elemento.
const popped = amigos.pop();
console.log(popped);
console.log(amigos);

amigos.shift(); //Remove o primeiro elemento do array,
const shifted = amigos.shift();
console.log(shifted);
console.log(amigos);

console.log(amigos.indexOf('Edão'))
console.log(amigos.indexOf('Curupira'))


console.log(amigos.includes('Edão'))
console.log(amigos.includes('Curupira'))




