var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let dados = lines[0].split(" ");

let A = Number(dados[0])
let B = Number(dados[1])
let C = Number(dados[2])

let π = 3.14159;
let raio = Number(dados[2]);

let trianguloArea = A * C / 2;
let circuloArea = π * (raio ** 2);
let trapezioArea = (A + B) * C / 2;
let quadradoArea = B * B;
let retanguloArea = A * B;

console.log("TRIANGULO: " + trianguloArea.toFixed(3));
console.log("CIRCULO: " + circuloArea.toFixed(3));
console.log("TRAPEZIO: " + trapezioArea.toFixed(3));
console.log("QUADRADO: " + quadradoArea.toFixed(3));
console.log("RETANGULO: " + retanguloArea.toFixed(3));

/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000
*/