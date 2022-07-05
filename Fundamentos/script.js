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

const anoAtual = 2022
const idadeVictor = anoAtual - 1987;
const idadeCapivara = anoAtual - 2018;
console.log(idadeVictor, idadeCapivara);

console.log(idadeVictor * 2, idadeCapivara /2, anoAtual ** 2);

// ** significa Potencia, nesse exemplo seria 2022 * 2022 = 4.088.484!

const primeiroNome =  'Victor';
const sobreNome = 'Schiavo';

console.log(primeiroNome + ' ' + sobreNome);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
console.log(x);
x *= 2; // x = x * 2 = 50
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x -1
console.log(x);

//Lógicos

console.log(idadeVictor > idadeCapivara);
console.log(idadeVictor < idadeCapivara);

// Sinais de >, <, >= e <=

// if (idadeVictor >= 18) alert('Usuário é maior de idade');
console.log(anoAtual - 1991 > anoAtual - 2018);



