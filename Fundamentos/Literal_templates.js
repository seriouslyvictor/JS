const primeiroNome =  'Victor';
const profissao = 'Professor';
const nascimento = 1987;
const idade = 2022 - 1987;


const descricao = 'Eu sou ' + primeiroNome + ' um ' + profissao + ' com ' + idade + ' anos de idade!'
console.log(descricao);

// Template Strings permitem escrever sequencias longas de texto com muito mais facilidade sem precisa concatenar várias variáveis.
// Observe o exemplo abaixo que reescreve todo a variável acima usando Template Strings,

const descLiteral = `Eu sou ${primeiroNome} um ${profissao} com ${idade} anos de idade!`
console.log(descLiteral);


// Outra Funcionalidade de Template Strings é criar texto em várias linhas:

console.log(`Texto com 
várias quebras 
de linha`)

// Anteriormente, seria necessário algo assim para criar o mesmo efeito:

console.log('Texto com \n\
várias quebras \n\
de linha');