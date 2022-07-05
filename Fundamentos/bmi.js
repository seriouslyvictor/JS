let alturaTiburcio = 1.69;
let alturaPablo = 1.95;
let pesoTiburcio = 78;
let pesoPablo = 92;
console.log('Comparando o BMi com os primeiros dados...')
console.log('Tiburcio: ' + alturaTiburcio + 'm ' + pesoTiburcio + 'Kg ');
console.log('Pablo: ' + alturaPablo + 'm ' + pesoPablo + 'Kg ');


let bmiTiburcio = pesoTiburcio / alturaTiburcio ** 2
console.log(bmiTiburcio);
let bmiPablo = pesoPablo / alturaPablo ** 2;
console.log(bmiPablo);

let bmiTiburcioMaior = bmiTiburcio > bmiPablo;

console.log('Bmi do Tibúrcio é maior? ' +bmiTiburcioMaior);
console.log('Fim do teste com os primeiros dados')

console.log('Começando teste com os segundos dados');

alturaTiburcio = 1.88;
pesoTiburcio = 95;
alturaPablo = 1.76;
pesoPablo = 85; 

console.log('Tiburcio: ' + alturaTiburcio + 'm ' + pesoTiburcio + 'Kg ');
console.log('Pablo: ' + alturaPablo + 'm ' + pesoPablo + 'Kg ');

bmiPablo = pesoPablo / alturaPablo ** 2;
bmiTiburcio = pesoTiburcio / alturaTiburcio ** 2;

console.log(bmiTiburcio);
console.log(bmiPablo);

bmiTiburcioMaior = bmiTiburcio > bmiPablo;


console.log('Bmi do Tibúrcio é maior? ' +bmiTiburcioMaior);
console.log('Fim do teste com os segundos dados.');
