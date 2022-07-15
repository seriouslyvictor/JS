function calcularMedia(x, y, z) {
    return  (x + y + z) / 3;
}

const mediat1 = calcularMedia(100, 102, 100)
const mediat2 = calcularMedia(108, 120, 100)
const mediat3 = calcularMedia(108, 120, 100)


console.log(mediat1, mediat2, mediat3);

if (mediat1 > mediat2 && mediat1 > mediat3) {
    console.log("T1 venceu");
} else if (mediat2 > mediat1 && mediat2 > mediat3) {
    console.log("T2 venceu");
} else if (mediat3 > mediat1 && mediat3 > mediat2) {
    console.log("t3 venceu");
} else {
    console.log("Não foi possível determinar um vencedor");
}