var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let dados = lines[0].split(" ");

let a = (Number(dados[0]));
let b = (Number(dados[1]));
let c = (Number(dados[2]));

let maiorAB = (a + b + Math.abs(a-b)) / 2;
let maiorDeTodos = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maiorDeTodos +" eh o maior");

/*Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".*/