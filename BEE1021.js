var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let valorEntrada = (lines[0]);

const dictNotas = [100, 50, 20, 10, 5, 2];
const dictMoedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
console.log("NOTAS:");
for(let i = 0; i < dictNotas.length; i++){
    let a = Math.floor(valorEntrada / dictNotas[i]);
    console.log(`${a} nota(s) de R$ ${dictNotas[i].toFixed(2)}`);

    valorEntrada = (valorEntrada % dictNotas[i]).toFixed(2);
};
console.log("MOEDAS:");
for(let j = 0; j < dictMoedas.length; j++){
    let b = Math.floor(valorEntrada / dictMoedas[j]);
    console.log(`${b} moeda(s) de R$ ${dictMoedas[j].toFixed(2)}`);

    valorEntrada = (valorEntrada % dictMoedas[j]).toFixed(2);
}

/* dictNotas.map((item ,index)=>{
  console.log(item, index)
}); */

/* let valorEntrada = parseFloat((lines[0]));

let cem = Math.floor(valorEntrada / 100);
let cemResto = (valorEntrada % 100);

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

let umMoeda = Math.floor(doisResto / 1);
let umResto = Math.floor(doisResto % 1);

let cinquentaMoeda = Math.floor(umResto / 1/2);
let cinquentaMoedaResto = Math.floor(umResto % 1/2);

let vinteCincoMoeda = Math.floor(cinquentaMoedaResto / 1/4);
let vinteCincoMoedaResto = Math.floor(cinquentaMoedaResto % 1/4);

let dezMoeda = Math.floor(vinteCincoMoedaResto / 1/10);
let dezMoedaResto = Math.floor(vinteCincoMoedaResto % 1/10);

let cincoMoeda = Math.floor(dezMoedaResto / 1/50);
let cincoMoedaResto = Math.floor(dezMoedaResto % 1/50);

let umCentavoMoeda = Math.floor(cincoMoedaResto / 1/100);

console.log("NOTAS:");
console.log(cem+ " nota(s) de R$ 100.00");
console.log(cinquenta+ " nota(s) de R$ 50.00");
console.log(vinte+ " nota(s) de R$ 20.00");
console.log(dez+ " nota(s) de R$ 10.00");
console.log(cinco+ " nota(s) de R$ 5.00");
console.log(dois+ " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(umMoeda+ " moeda(s) de R$ 1.00");
console.log(cinquentaMoeda+ " moeda(s) de R$ 0.50");
console.log(vinteCincoMoeda+ " moeda(s) de R$ 0.25");
console.log(dezMoeda+ " moeda(s) de R$ 0.10");
console.log(cincoMoeda+ " moeda(s) de R$ 0.05");
console.log(umCentavoMoeda+ " moeda(s) de R$ 0.01");

console.log(valorEntrada);
console.log(cemResto);
console.log(cinquentaResto); */

/*Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.*/