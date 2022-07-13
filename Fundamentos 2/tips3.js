const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []
const arr = []

let calcularGorjeta = function (valor) {
    if (valor >= 50 && valor <= 300) {
        const tip = valor*0.15;
        return tip;
    } else { tip = valor*0.20;
    return tip;
    }
}

let calcularMedia = function (arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
        console.log(soma);
    }
    const media = soma / arr.length;
    return media;
}


for (let i = 0; i < contas.length; i++) {
    tips.push(calcularGorjeta(contas[i]))
    total.push(tips[i]+contas[i])
    console.log(`O total da sua conta é ${total[i]}`);
}

console.log(tips);
console.log(total);
console.log(calcularMedia(total));
