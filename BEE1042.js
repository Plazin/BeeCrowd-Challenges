var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let ordemCrescente = lines[0].split(" ").map(Number);
let ordemLida = lines[0].split(" ").map(Number);

ordemCrescente.sort((a,b) => {
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
});

console.log(`${ordemCrescente[0]}\n${ordemCrescente[1]}\n${ordemCrescente[2]}\n`);

console.log(`${ordemLida[0]}\n${ordemLida[1]}\n${ordemLida[2]}`);


/* Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.*/