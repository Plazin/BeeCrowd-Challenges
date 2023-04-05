var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = Number(lines[0]);
let arrImpar = [];

for(let i = entrada; i <= arrImpar.length + 6; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
};

/*Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.*/