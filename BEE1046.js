var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [horaInicio, horaFinal] = lines[0].split(" ").map(Number);

if(horaInicio == horaFinal){
  console.log(`O JOGO DUROU 24 HORA(S)`)
}

if(horaInicio > horaFinal){
  let horas = Math.abs(horaInicio - 24) + horaFinal
  console.log(`O JOGO DUROU ${horas} HORA(S)`)
} 

if(horaInicio < horaFinal){
  let horas = Math.abs(horaInicio - 24) - Math.abs(horaFinal - 24)
  console.log(`O JOGO DUROU ${horas} HORA(S)`)
}


/* Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.*/