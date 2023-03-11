var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0])
let B = lines[1]

let X = Number(A) + Number(B)

console.log("X =" , X)