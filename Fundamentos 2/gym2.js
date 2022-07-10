'use strict'

const time1 = `Capibaras`;
const time2 = `Lhamas`;

const calcularMedia = (g1, g2, g3) =>  (g1 + g2 + g3) / 3;

let mediaTime1 =  calcularMedia(44, 23, 71);
let mediaTime2 =  calcularMedia(65, 54, 49);

console.log(mediaTime1, mediaTime2);

checarVencedor(mediaTime1, mediaTime2);

function checarVencedor(mediaTime1, mediaTime2) {
    if (mediaTime1 < mediaTime2*2 && mediaTime2 < mediaTime1*2) {
        console.log(`Nenhuma dos times atingiu a pontuação mínima para vencer! 🚫`)
        return -1;
    } else if (mediaTime1 > mediaTime2) {
        console.log(`O ${time1} venceu com ${mediaTime1} pontos`);
        return 1;
    } else {
        console.log(`O ${time2} venceu com ${mediaTime2} pontos`);
        return 2;
    } 

}

mediaTime1 =  calcularMedia(85, 54, 82);
mediaTime2 =  calcularMedia(23, 34 ,49);
console.log(mediaTime1, mediaTime2);
checarVencedor(mediaTime1, mediaTime2);

