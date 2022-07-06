/*let js = 'Supimpa';
console.log(50+50+8)

// Valores
// Valor essencialmente é uma informação, é a unidade mais fundamental que temos em programação.
// Ex: Nome de uma pessoa, idade, valor de um produto....

console.log ('Victor');


let pNome = "Victor";
let sNome = "Schiavo";

console.log (pNome);
console.log (sNome);

// Boas práticas para nomear variáveis:
// Começar sempre com minúsculas e colocar maiúsculas para identificar novas palavras.
// Primeira letra maíscula é deve ser evitado(ex: Pnome), váraveis assim são reservadas para outras situações.
// Tudo em maiúscula (ex: PI = 3.14) é reservado para constantes, valores que nunca mudam.
// Nomes descritivos, nomes que indicam claramente que tipo de informação a variável irá receber.


// ================ o que NÃO pode ser feito =========================
// Começar  com números

//  ================ o que PODE ser feito =========================
// Letras, números, underline e o simbolo $.


let pais =  'Brasil';
let continente = 'América do Sul';
let populacao = '210 Milhões';

console.log (pais);
console.log (continente);
console.log (populacao);
*/

// let senaiélegal = true;
// console.log ("O senai é legal?");
// console.log (senaiélegal)

// console.log(typeof senaiélegal);
// console.log(typeof false);
// console.log(typeof 171);
// console.log(typeof 'victor');
// console.log(typeof victor);

// senaiélegal = "Sim!!"
// console.log (typeof senaiélegal)


// let idade = 34;
// age = 36;

// const anoNascimento = 1987;
// anoNascimento = 1990;

// Const não pode ser declaradas sem valor, ao contrário de let, que pode ser vazia no momento da criação.

// Commo boa prática, é recomendável que se use const para declarar variáveis, e usar let APENAS quando você tem certeza que aquela variável será alterada.

// const ilha = false;
// const idioma = 'Português';
// const pais =  'Brasil';
// const continente = 'América do Sul';
// let populacao = '210 Milhões';

// console.log(ilha);
// console.log(populacao);
// console.log(pais);
// console.log(idioma);

// const anoAtual = 2022
// const idadeVictor = anoAtual - 1987;
// const idadeCapivara = anoAtual - 2018;
// console.log(idadeVictor, idadeCapivara);

// console.log(idadeVictor * 2, idadeCapivara /2, anoAtual ** 2);

// // ** significa Potencia, nesse exemplo seria 2022 * 2022 = 4.088.484!

// const primeiroNome =  'Victor';
// const sobreNome = 'Schiavo';

// console.log(primeiroNome + ' ' + sobreNome);

// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// console.log(x);
// x *= 2; // x = x * 2 = 50
// console.log(x);
// x++; // x = x + 1
// console.log(x);
// x--; // x = x -1
// console.log(x);

// //Lógicos

// console.log(idadeVictor > idadeCapivara);
// console.log(idadeVictor < idadeCapivara);

// // Sinais de >, <, >= e <=

// // if (idadeVictor >= 18) alert('Usuário é maior de idade');
// console.log(anoAtual - 1991 > anoAtual - 2018);

// Type Conversion: Algumas vezes será necessário converter Strings em números, para tal finalidade podemos usar o Type Conversion EXPLICITO:

const nascimento = Number('1991')
Number(nascimento)
console.log(nascimento + 18);

// Convter strings em numéro retorna NaN, de Not a Number:
console.log(Number('Tibúrcio') + 10)


// Type Coercion implicito: Na prática o JavaScript realiza a maioria dessas conversões de forma implicita, por exemplo:

const idade = 18;
console.log('Eu tenho ' + idade + ' anos de idade')
console.log(`Eu tenho ${idade} anos de idade`)
// O sinal de mais já faz a conversão de números para texto(Strings), de modo que não precisamos ficar usando funções de conversão
console.log('Eu tenho ' + String(idade) + ' anos de idade')

// O sinal de menos converte os Strings em Numbers. assim como o de divisão e multiplicação.

console.log('10' - '8' - '2')

// Valores Verdadeiros ou Falsos(Truty and Falsy)
// Existem 5 valores considerados Falsy: 0, "", undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Victor"))
console.log(Boolean(""))

const dinheiro = 100;

if (dinheiro) {
    console.log("Melhor você economizar!!");
} 
else 
{
    console.log("Virou mendigo, feelsbadman");
}

let altura = 0;
if(altura) {
    console.log("Altura foi definida");

} else
{
    console.log("Altura não foi definida");
}

// Operadores de igualdade:
// É importante não confundir o operador de definição de valor  = com os operedores de IGUALDADE.
// "="" não é a mesma coisa que "===""

let idade2 = 18;
if (idade2 === 18) console.log(`Você tem exatamente 18 anos de idade!`)

if (idade2 = 28) console.log(`Você tem exatamente 18 anos de idade!`)
// Note que aqui a condição entra como verdadeira, apesar da comparação "não ser verdadeira", isso aconteceu por causa do Type Coersion onde qualquer valor difernte dos Falsys são verdadeiros.

// const cor = prompt(`Qual é sua cor favorita?`)

// if (cor === 'Preto') {
//     console.log('Preto é a melhor cor!!')
// } else if (cor === 'Dourado') {
//     console.log('Dourado é um cor legal também...')
// }  else if (cor === 'Branco') {
//     console.log('Branco é Ok....')
// } 

// if (cor !== 'Preto')     console.log('Por quê não preto???')

// Lógica Booleana
// Conceito de lógica que busca resolver problemas complexos através de operadores lógicos como AND, OR, NOT...
// NÃO é especifico de JavaScript, usamos lógicas booleana em qualquer liguagem de programção e até mesmo em programas como o Excel ou Jogos de video game.

//Operadores lógicos
/* && = E
|| = OU
! = NÃO */

const ppd = true;
const visao = false;

console.log(ppd && visao);
console.log(ppd || visao);
console.log(!ppd);


let podeDirigir = (ppd && visao); 
if (podeDirigir) {
    console.log("Você está apto para dirigir.")
} else {
    console.log("Melhor deixar outra pessoa conduzir....")
}

const bebado = false;

podeDirigir = (ppd && !bebado);
if (podeDirigir) {
    console.log("Você está apto para dirigir.")
} else {
    console.log("Melhor deixar outra pessoa conduzir....")
}
