/* Criando as primeiras Variáveis */

const pais = 'Brasil';
const continente = 'América do Sul';
let populacao = 210000000;

console.log(pais, continente, populacao)

/* Declarações de Variaveis e tipos de dados */

const ilha = false;
const idioma = 'Português';

console.log(ilha, populacao, pais, idioma)

/*Operadores Matemáticos */

populacao = populacao / 2;
console.log(populacao);

populacao++;
console.log(populacao);

/* Operadores Booleanos */

populacao = 210000000
console.log (populacao > 6000000);
console.log (populacao >= 33000000);

let descricao =  pais + ' está no continente ' + continente + ' e sua população de ' + populacao + ' de pessoas fala ' + idioma

console.log(descricao);

/* Template Strings */

descricao = `${pais} está no continente ${continente} e a sua população é de ${populacao} pessoas, o idioma oficial é o ${idioma}`;