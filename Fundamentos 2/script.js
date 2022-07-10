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

// Arrow Function - um novo tipo de função adicionado no ES6;


const calcularIdade3 = nascimento => 2022 - nascimento;

let idade3 =  calcularIdade3(1987);
console.log(`Resultado da função(Arrow) ${idade3}`);

const calcAposentadoria = (nascimento, primeiroNome) => {
    const idade4 = 2022 - nascimento;
    const retirar = 65 - idade4;
    return `${primeiroNome} irá se aposentar em ${retirar} anos`
}

console.log(calcAposentadoria(1987, 'Victor'));

// Esse forma de escrever funções é mais rápida, porém tem implicações que ainda não sei, então não posso usar o tempo todo.

function cortarFrutas(fruta) {
    return fruta *4;
    
}

function juicer(apples, oranges) {
    const pedacosFruta1 = cortarFrutas(apples);
    const pedacosFruta2 = cortarFrutas(oranges);
    console.log(apples, oranges);
    const juice = `Suco com apples ${pedacosFruta1} e  oranges ${pedacosFruta2}`;
    return juice;
}

console.log(juicer(4,2));