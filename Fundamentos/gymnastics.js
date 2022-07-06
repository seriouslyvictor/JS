// Variavéis
const time1 = 'Koala';
const time2 = `Dolphins`

let time1J1 = 100;
let time1J2 = 100;
let time1J3 = 100;

let time2J1 = 100;
let time2J2 = 100;
let time2J3 =  100;

// Critérios: Comparar a pontuação média de cada time e determinar quem é o vencedor, incluir uma condição para o empate. O resultado deve ser impresso no console.

let avgTime1 = Math.round((time1J1 + time1J2 + time1J3) / 3)
let avgTime2 = Math.round((time2J1 + time2J2 + time2J3) / 3)
console.log(avgTime1, avgTime2);

if (avgTime1 > avgTime2) {
    console.log(`O time ${time1} venceu com ${avgTime1} pontos`)
} else if (avgTime1 === avgTime2) {
    console.log(`Os times ${time1} e ${time2} empataram com ${avgTime1} pontos`)
} else {
    console.log(`O time ${time2} venceu com ${avgTime2} pontos`)
}
if (avgTime1 <= 100 && avgTime2 <= 100) {
    console.log(`Nenhum time alcançou a pontuação minima de 100 pontos para vencer`)
} else if(avgTime1 > avgTime2) {
    console.log(`O time ${time1} venceu com ${avgTime1} pontos`)
} else if (avgTime1 === avgTime2) {
    console.log(`Os times ${time1} e ${time2} empataram com ${avgTime1} pontos`)
} else {
    console.log(`O time ${time2} venceu com ${avgTime2} pontos`)
}