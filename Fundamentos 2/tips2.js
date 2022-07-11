'use strict'

function calcularGorjeta(valor) {
    if (valor >= 50 && valor <= 300) {
        const tip = valor * 0.15;
        return tip;
    } else {
        const tip = valor * 0.20;
        return tip;
    }
}

let tip = calcularGorjeta(350)
console.log(tip);

const contas = [125, 555, 44]
const gorjetas = [calcularGorjeta(contas[0]), calcularGorjeta(contas[1]), calcularGorjeta(contas[2])];
console.log(gorjetas);
const totais = [contas[0] + gorjetas[0], contas[1] + gorjetas[1], contas[2] + gorjetas[2]]
console.log(totais);