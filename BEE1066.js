var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let valorPar = [],
    valorImpar = [],
    valorPos = [],
    valorNeg = []

for(i = 0; i < lines.length - 1; i++){// O exercicio apenas é aprovado com o -1 no lines.length, não me pergunte o porquê.
  if(lines[i] % 2 === 0){
    valorPar.push(lines[i])
  }
  if(lines[i] % 2 !== 0){
    valorImpar.push(lines[i])
  }
  if(lines[i] > 0){
    valorPos.push(lines[i])
  }
  if(lines[i] < 0){
    valorNeg.push(lines[i])
  }
}
console.log(`${valorPar.length} valor(es) par(es)`)
console.log(`${valorImpar.length} valor(es) impar(es)`)
console.log(`${valorPos.length} valor(es) positivo(s)`)
console.log(`${valorNeg.length} valor(es) negativo(s)`)

/*Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.*/