const dados = require('./modulos/pessoas')

function Conta(titular, numero, tipo, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
}

let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
    listaContas.push(new Conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo) );
}
console.log(listaContas);