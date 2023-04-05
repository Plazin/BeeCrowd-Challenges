var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let entrada = lines;

for(i = 0; i < entrada.length; i++){
  
  if(entrada[i] % 2 === 0){
    console.log(`${i} valor(es) par(es)`)
  } else if(entrada[i] % 2 !== 0){
    console.log(`${i} valor(es) ímpar(es)`)
  } else if(entrada[i] > 0){
    console.log(`${i} valor(es) positivo(s)`)
  } else if(entrada[i] < 0){
    console.log(`${i} valor(es) negativo(s)`)
  }
}

/*Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.*/