let imc;

document.querySelector('.primario').addEventListener('click', calcularImc);
document.querySelector('.secundario').addEventListener('click', limpar) 

function limpar() {
    document.querySelector('.imcresultado').textContent = ' ';
}

function calcularImc() {


    const peso = document.querySelector('.peso').value;
    const altura = document.querySelector('.altura').value;
    console.log(peso / altura **2);
    
    if (!altura) {
        document.querySelector('.imcresultado').textContent = 'Insira uma Altura'
        return
    }

    if (!peso) {
        document.querySelector('.imcresultado').textContent = 'Insira um peso'
        return
    }
    
    let imc = peso / (altura * altura);
    document.querySelector('.imcresultado').textContent = `O seu IMC é de ${Math.trunc(imc,2)}`;
}

