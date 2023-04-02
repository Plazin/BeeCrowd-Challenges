var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);;

let entrada = lines[0];

let valor1 = lines[0];
let valor2 = lines[1];
let valor3 = lines[2];
let valor4 = lines[3];
let valor5 = lines[4];
let valor6 = lines[5];

let arr = [valor1, valor2, valor3, valor4, valor5, valor6]
let resultado = [];
let media = resultado / resultado.length

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
console.log(`${media.toFixed(1)}`)

/* Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados. */