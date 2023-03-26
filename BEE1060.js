var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = lines[0].split(" ").map(Number)
let valor2 = lines[1].split(" ").map(Number)
let valor3 = lines[2].split(" ").map(Number)
let valor4 = lines[3].split(" ").map(Number)
let valor5 = lines[4].split(" ").map(Number)
let valor6 = lines[5].split(" ").map(Number)

console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)
console.log(valor5)
console.log(valor6)

/* if(resultado < 0){
  console.log(`${resultado} valores positivos`)
} */

/*Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.*/