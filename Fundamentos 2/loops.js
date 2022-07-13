// Pegando peso.


// For continua executando enquanto a condição for verdadeira.
for (let rep = 1; rep <=10; rep++) {
    console.log(`Puxando o peso, repetição ${rep}`)
}

// Loopando pelo Array

const victorArray = [
    "Victor",
    'Schiavo',
    2022-1987,
    'professor',
    ['Tibúrcio', "Edão", "Cley"]
]

victorArray.push('Osasco')

for (let i = 0; i < victorArray.length; i++) {
    console.log(victorArray[i]);
    const types = typeof(victorArray[i])
    console.log(types);
}


const nascimento = [1991, 2017, 2002, 1980];
const idade = []

for (let i = 0; i < nascimento.length; i++) {
    idade.push(2022 - nascimento[i]);

}
console.log(idade);

// Continue e Break, controlando os loops

console.log(`====================APENAS STRINGS=====================`);
for (let i = 0; i < victorArray.length; i++) {
    if (typeof victorArray[i] != 'string') {
        continue
    } console.log(typeof victorArray[i]);

}

console.log(`====================QUEBRA COM NUMEROS=====================`);
for (let i = 0; i < victorArray.length; i++) {
    if (typeof victorArray[i] === 'number') {
        break
    } console.log(victorArray[i], typeof victorArray[i]);

}


// Loopando para trás e loops dentro de loops.

for (let i = victorArray.length-1; i >= 0; i--) {
    console.log(i, victorArray[i]);
}

const exercico = ['Supino', 'Agachamento', 'Levantamento Terra']
let reps = 10;

for (let e = 0; e < exercico.length; e++) {
    console.log(`!!! Começando o exercico ${exercico[e]} !!!`);
    for (let i = 0; i <= reps; i++) {
        console.log(`Repetição ${i}`);
    }
    
}

// Loop do tipo While

// Usando o exemplo dos exercicios

reps = 0;

while (reps <= 10) {
    console.log(`Realizando a rep ${reps}`);
    reps++
}

let dice = Math.trunc(Math.random()*6) +1;
console.log(dice);

while (dice !== 6) {
    console.log(`Rolando o dado...`);
    dice = Math.trunc(Math.random()*6) +1;
    dice === 6 ? console.log("Você tirou 6!!") : console.log(`Você tirou ${dice}.`)
}