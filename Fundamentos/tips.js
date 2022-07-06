let conta = 1000;
const gorjeta = conta >= 50 && conta <=300 ? conta * 0.15 : conta * 0.20; 

console.log(conta)
console.log(gorjeta);

console.log(`A conta foi R$${conta} e a gorjeta ficou em R$${gorjeta}. O valor total é de R$${conta + gorjeta}`);