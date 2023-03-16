var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let entrada = lines[0];

switch(true){
  case entrada >= 0 && entrada <= 25:
    console.log("Intervalo [0,25]")
    break;
  case entrada > 25 && entrada <= 50:
    console.log("Intervalo (25,50]")
    break;
  case entrada > 50 && entrada <= 75:
    console.log("Intervalo (50,75]")
    break;
  case entrada > 75 && entrada <= 100:
    console.log("Intervalo (75,100]")
    break;
  default:
    console.log("Fora de intervalo")
    break;
}

console.log(entrada);

/*Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

[0,25]  indica valores entre 0 e 25.0000
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000
(50,75] indica valores maiores que 50 Ex: 50.00001 até o valor 75.0000000
(75,100] indica valores maiores que 75 Ex: 75.00001 até o valor 100.0000000


Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.*/