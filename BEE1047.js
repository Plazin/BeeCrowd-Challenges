var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(" ").map(Number);
// 7 8 9 10

let horas = Math.abs(horaInicial - 24) - Math.abs(horaFinal - 24)
let minutos = Math.abs(minutoInicial - 60) - Math.abs(minutoFinal - 60)

if(horaInicial == horaFinal && minutoInicial == minutoFinal){
  console.log(`O JOGO DUROU 24 HORA(S)`)
}

if(horaInicial > horaFinal && minutoInicial > minutoFinal){
  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
} 

if(horaInicial < horaFinal && minutoInicial < minutoFinal){
  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

console.log(horas)
console.log(minutos)






/* Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .*/