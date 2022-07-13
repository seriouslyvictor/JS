const pessoa1 = {
    primeiroNome: "Mark",
    sobrenome: "Hamilton",
    altura: 1.69,
    peso: 78,
    calcIMC: function() {
        this.imc = this.peso / this.altura**2;
        return this.imc;
    }


}

const pessoa2 = {
    primeiroNome: "John",
    sobrenome: "Miller",
    altura: 1.95,
    peso: 92,
    calcIMC: function() {
        this.imc = this.peso / this.altura**2;
        return this.imc;
    }


}

pessoa1.calcIMC() > pessoa2.calcIMC() ? console.log(`${pessoa1.primeiroNome} tem um IMC (${pessoa1.calcIMC()}) maior do que ${pessoa2.primeiroNome} (${pessoa2.calcIMC()})`) : console.log(`${pessoa2.primeiroNome} tem um IMC (${pessoa2.calcIMC()}) maior do que ${pessoa1.primeiroNome} (${pessoa1.calcIMC()})`);