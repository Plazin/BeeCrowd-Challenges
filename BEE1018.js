var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let valorEntrada = lines[0];

let cem = Math.floor(valorEntrada / 100);
let cemResto = Math.floor(valorEntrada % 100);

let cinquenta = Math.floor(cemResto / 50); 
let cinquentaResto = Math.floor(cemResto % 50) 

let vinte = Math.floor(cinquentaResto / 20); 
let vinteResto = Math.floor(cinquentaResto % 20); 

let dez = Math.floor(vinteResto / 10);
let dezResto = Math.floor(vinteResto % 10); 

let cinco = Math.floor(dezResto / 5);
let cincoResto = Math.floor(dezResto % 5);

let dois = Math.floor(cincoResto / 2);
let doisResto = Math.floor(cincoResto % 2);

let um = Math.floor(doisResto / 1);
let umResto = Math.floor(doisResto % 1);

console.log(valorEntrada)
console.log(cem+ " nota(s) de R$ 100,00")
console.log(cinquenta+ " nota(s) de R$ 50,00")
console.log(vinte+ " nota(s) de R$ 20,00")
console.log(dez+ " nota(s) de R$ 10,00")
console.log(cinco+ " nota(s) de R$ 5,00")
console.log(dois+ " nota(s) de R$ 2,00")
console.log(um+ " nota(s) de R$ 1,00")

/*Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.*/