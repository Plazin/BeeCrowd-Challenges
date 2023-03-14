var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let idadeDias = Number(lines[0]);
let anoTotal = 365;
let mesTotal = 30;

let ano = Math.floor(idadeDias / anoTotal);
let anoResto = Math.floor(idadeDias % anoTotal);

let mes = Math.floor(anoResto / mesTotal);
let mesResto = Math.floor(anoResto % mesTotal);

let dias = Math.floor(mesResto);

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");

//400 - 365 = 35;
//35 - 30 = 5;
//5 dias;

/*Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.*/