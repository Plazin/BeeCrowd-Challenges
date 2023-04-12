var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let entrada = lines;
let numerosPares = [];
let somaPositivos;

for(let i = 0; i < entrada.length -1; i++){
  if(entrada[i] % 2 === 0){
    numerosPares.push(entrada[i])
    somaPositivos = numerosPares.reduce((a, b) => a + b);
  }
}

console.log(`${numerosPares.length} valores pares`)

/*Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.*/