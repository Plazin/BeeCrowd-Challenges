var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = Number(lines[0]);

if(entrada >= 0 && entrada <= 400){
  let porcentagem = 0.15;
  let reajuste = entrada * porcentagem;
  let novoSalario = Number(entrada + reajuste);

  console.log("Novo salario: "+ novoSalario.toFixed(2))
  console.log("Reajuste ganho: "+ reajuste.toFixed(2))
  console.log(`Em percentual: 15 %`)
} else if(entrada > 400 && entrada <= 800){
  let porcentagem = 0.12;
  let reajuste = entrada * porcentagem;
  let novoSalario = Number(entrada + reajuste);

  console.log("Novo salario: "+ novoSalario.toFixed(2))
  console.log("Reajuste ganho: "+ reajuste.toFixed(2))
  console.log(`Em percentual: 12 %`)
} else if(entrada > 800 && entrada <= 1200){
  let porcentagem = 0.10;
  let reajuste = entrada * porcentagem;
  let novoSalario = Number(entrada + reajuste);

  console.log("Novo salario: "+ novoSalario.toFixed(2))
  console.log("Reajuste ganho: "+ reajuste.toFixed(2))
  console.log(`Em percentual: 10 %`)
} else if(entrada > 1200 && entrada <= 2000){
  let porcentagem = 0.07;
  let reajuste = entrada * porcentagem;
  let novoSalario = Number(entrada + reajuste);

  console.log("Novo salario: "+ novoSalario.toFixed(2))
  console.log("Reajuste ganho: "+ reajuste.toFixed(2))
  console.log(`Em percentual: 7 %`)
} else if(entrada > 2000){
  let porcentagem = 0.04;
  let reajuste = entrada * porcentagem;
  let novoSalario = Number(entrada + reajuste);
  
  console.log("Novo salario: "+ novoSalario.toFixed(2))
  console.log("Reajuste ganho: "+ reajuste.toFixed(2))
  console.log(`Em percentual: 4 %`)
}

/*A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo. */







/* Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .*/