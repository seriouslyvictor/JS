'use strict'
// Criação de um Array com vários valores relacionados a minha pessoa.

const victorArray = [
    "Victor",
    'Schiavo',
    2022-1987,
    'professor',
    ['Tibúrcio', "Edão", "Cley"]
]


// Criação de um Objeto
// Objetos permitem a criação de uma chave para resgatar os valores, como se fossem variavéis, dessa forma é mais útil para conjunto de dados que não são ordenados.

const victor = {
    primeiroNome: "Victor",
    sobreNome: "Schiavo",
    nascimento: 1987,
    profissao: 'Professor',
    amigos: ['Tibúrcio', "Edão", "Cley"],
    ppd: false,

    calcularIdade: function () {
        this.idade = 2022 - this.nascimento;
        return this.idade;
    },

    resumo: function() {
        return `${this.primeiroNome} é um ${this.profissao} com ${this.calcularIdade()} anos de idade, ele ${this.ppd ? "possui" : "não possui"} uma PPD.`
    }
}
console.log(victor);
// Resgatando valores de um objeto.

console.log(victor.idade);
console.log(victor['sobrenome']);


const chave = 'Nome'
console.log(victor['primeiro' + chave])
console.log(victor['sobre' + chave])


// const interesse = prompt('O que você quer sabe sobre o Victor? (Nome, Sobrenome, idade)')

// victor[interesse] ? console.log(victor[interesse]) : console.log(`Categoria inválida`);

victor.local = "Brasil";
victor["instagram"] =  "@seriouslyvictor";
console.log(victor);

console.log(`${victor.primeiroNome} tem ${victor.amigos.length} amigos, e o seu melhor amigo é o ${victor.amigos[0]}.`);

console.log(victor.calcularIdade());
console.log(victor);

// Challenge

// Victor é um professor com  34 anos de idade, e ele possui uma PPD.

console.log(victor.resumo());
