var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let entrada = lines;
let numerosPositivos = [];
let somaPositivos;

for(let i = 0; i <= entrada.length; i++){
  if(entrada[i] > 0){
    numerosPositivos.push(entrada[i])
    somaPositivos = numerosPositivos.reduce((a, b) => a + b);
  }
}

console.log(`${numerosPositivos.length} valores positivos`)
console.log((somaPositivos / numerosPositivos.length).toFixed(1))

/* `${entrada[i].length} números positivos`
console.log(`${numerosPositivos.length} numeros positivos`) */

/* Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados. */