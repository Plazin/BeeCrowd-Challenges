var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = lines[0].split(" ").map(Number);

const [A, B, C] = entrada.sort((a,b) => b - a); // 5 7 2

if(A >= B + C){
  console.log("NAO FORMA TRIANGULO")
  return
}
if((A ** 2) > (B ** 2) + (C ** 2)){
  console.log("TRIANGULO OBTUSANGULO")
}
if((A ** 2) == (B ** 2) + (C ** 2)){
  console.log("TRIANGULO RETANGULO")
}
if((A ** 2) < (B ** 2 + C ** 2)){
  console.log("TRIANGULO ACUTANGULO")
} 
if(A == B && B == C){
  console.log("TRIANGULO EQUILATERO")
} else if(A == B || B == C || A == C){
  console.log("TRIANGULO ISOSCELES")
}

/* Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.*/