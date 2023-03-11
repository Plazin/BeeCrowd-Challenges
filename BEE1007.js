var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);
let D = Number(lines[3]);

let dif = ((A * B) - (C * D));

console.log("DIFERENCA = " + dif)



/*Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.*/

