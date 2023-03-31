var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let valor1 = lines[0];
let valor2 = lines[1];
let valor3 = lines[2];
let valor4 = lines[3];
let valor5 = lines[4];
let valor6 = lines[5];

let arr = [valor1, valor2, valor3, valor4, valor5, valor6]
let resultado = [];

console.log(arr)

if(valor1 > 0){
  resultado.push(valor1)
} 
 if(valor2 > 0){
  resultado.push(valor2)
} 
 if(valor3 > 0){
  resultado.push(valor3)
} 
 if(valor4 > 0){
  resultado.push(valor4)
} 
 if(valor5 > 0){
  resultado.push(valor5)
} 
 if(valor6 > 0){
  resultado.push(valor6)
}
console.log(`${resultado.length} valores positivos`)


/*Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.*/