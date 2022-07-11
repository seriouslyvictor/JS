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

