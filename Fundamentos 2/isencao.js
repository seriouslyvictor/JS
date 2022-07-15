//

const nomeCompleto = 'Asdrubals'
const idade = 24;
const rm = 2500;
const escolaPublica =  false

function isentao(idade, rm, escola) {
    if (idade > 24 || rm > 2500 || escola != true)  {
        return "Indeferido"
    }else  {
        return "Isento";
    }
}

console.log(isentao(idade, rm, escolaPublica))


