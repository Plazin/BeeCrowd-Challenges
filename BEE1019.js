var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let entry = Number(lines[0]);

let horas = Math.floor(entry / 3600);

let horasResto = Math.floor(entry % 3600);

let minutos = Math.floor(horasResto / 60);

let segundos = Math.floor(horasResto % 60);

console.log(horas + ":" + minutos + ":" + segundos);

//console.log(minutosResto)

/*Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.*/