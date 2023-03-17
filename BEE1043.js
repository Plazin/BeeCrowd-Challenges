var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines[0].split(" ").map(Number);

let perimetroTriangulo = A + B + C;
let trapezioArea = (A + B) / 2 * C;

if(Math.abs(A - C) < B && (B < A + C)){
  console.log("Perimetro = " + perimetroTriangulo.toFixed(1))
} else {
  console.log("Area = " + trapezioArea.toFixed(1))
};

/* Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

Perimetro = XX.X

Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.*/