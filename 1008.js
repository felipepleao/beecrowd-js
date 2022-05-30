/* 1008 - Salário

Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário.
A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada,
respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário,
também deve haver um espaço em branco após o $.

*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/* Informações sobre numero de um funcionario, horas trabalhadas e valor hora*/
var NrFuncionario = lines.shift();
var HrTrabalhadas = lines.shift();
var ValorHora = lines.shift();

/*Cálculo de salário*/
var salario = HrTrabalhadas * ValorHora;

/*Imprimir o Número e o Salário do Funcionário com 2 casas decimais*/
console.log("NUMBER = " + NrFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));