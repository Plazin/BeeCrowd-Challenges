var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(" ").map(Number);

if(horaInicial == horaFinal && minutoInicial == minutoFinal){
  return console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`)
}

if(horaInicial == horaFinal && minutoInicial < minutoFinal){
  let horas = Math.abs(horaInicial - horaFinal)
  let minutos = Math.abs(minutoInicial - minutoFinal)
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

if(horaInicial == horaFinal && minutoInicial > minutoFinal){
  let horas = Math.abs(horaInicial - 24) + horaFinal - 1
  let minutos = Math.abs(minutoInicial - 60) + minutoFinal
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

if(horaInicial < horaFinal && minutoInicial == minutoFinal){
  let horas = Math.abs(horaInicial - horaFinal)
  let minutos = Math.abs(minutoInicial -  minutoFinal)
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

if(horaInicial > horaFinal && minutoInicial == minutoFinal){
  let horas = Math.abs(horaInicial - 24) + horaFinal
  let minutos = Math.abs(minutoInicial - 60) + minutoFinal
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

if(horaInicial > horaFinal && minutoInicial > minutoFinal){
  let horas = Math.abs(horaInicial - 24) + horaFinal - 1
  let minutos = Math.abs(minutoInicial - 60) + minutoFinal
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
} 

if(horaInicial < horaFinal && minutoInicial < minutoFinal){
  let horas = (Math.abs(horaInicial - 24) - Math.abs(horaFinal - 24));
  let minutos = (Math.abs(minutoInicial - 60) - Math.abs(minutoFinal - 60));
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

if(horaInicial > horaFinal && minutoInicial < minutoFinal){
  let horas = Math.abs(horaInicial - horaFinal - 24) ;
  let minutos = (Math.abs(minutoInicial - 60) - Math.abs(minutoFinal - 60));
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

if(horaInicial < horaFinal && minutoInicial > minutoFinal){
  let horas = (Math.abs(horaInicial - 24) - Math.abs(horaFinal - 24)) - 1;
  let minutos = (Math.abs(minutoInicial - 60) + minutoFinal)
  return console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

/* if(horas <= 1 || minutos <= 1 && horas != 0 || minutos != 0){
  let horas = (Math.abs(horaInicial - 24) - Math.abs(horaFinal - 24));
  let minutos = (Math.abs(minutoInicial - 60) - Math.abs(minutoFinal - 60)) + Math.abs(60);
  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
} */







/* Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .*/