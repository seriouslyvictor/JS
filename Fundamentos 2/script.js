'use strict'

// Functions

function logger() {
    console.log('Meu nome é Professor Tibúrcio')
}

// Chamar, executar ou invocar a função:

logger();
logger();
logger();


function juicer(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Suco com apples ${apples} e  oranges ${oranges}`;
    return juice;
}


const suco = juicer(5,2);
console.log(suco);

// Declaração de função x Expressão.
// O exemplo abaixo é uma função de Declaração, pode ser invocada antes de ter sido declarada, por assim dizer

function calcularIdade(nascimento) {
    return 2022 - nascimento;
}

let idade = calcularIdade(1987);
console.log(idade);

// Abaixo temos uma função do tipo Expressão, que não pode ser invocada antes de ter sido declarada.

const calcularIdade2 = function (nascimento) {
    return 2022 - nascimento;
}

const idade2 = calcularIdade2(1987);

console.log(`Resultado da função(Declaração) ${idade}`);
console.log(`Resultado da função(Expressão) ${idade2}`);

// Arrow Function - um novo tipo de função adicionar no ES6;


const calcularIdade3 = nascimento => 2022 - nascimento;

let idade3 =  calcularIdade3(1987);
console.log(`Resultado da função(Arrow) ${idade3}`);

