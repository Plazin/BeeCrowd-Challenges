var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let a = lines[0];
console.log(a)

let maiorAB = Math.max[Number(lines[0])];

//let maiorAB = (Number(a)+Number(b)+Number(abs) * (Number(a) - Number(b))) / 2

console.log(maiorAB +" "+ "eh o maior")
console.log(a)


/*Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".*/