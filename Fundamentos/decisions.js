const idade = 15;
const permissao = idade >= 18;
console.log(permissao)

if (permissao) {
    console.log('Pode Dirigir! 🚗');
} else {
    const restante = 18 - idade
    console.log(`Não pode digirir ainda! 🐱‍👤🐱‍👤
Espere mais ${restante} anos para começar.`);
    
}

/* If serve para tomar decisões no código, para sair da execução linear padrão do código.
Com IF há sempre uma comparação boleana(verdadeiro ou falso) e com base no resultado um block de código é executado ou ignorado. o ELSE é opcional.
*/
