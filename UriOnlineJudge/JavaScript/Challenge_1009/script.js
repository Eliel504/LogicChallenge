const { parse } = require('path');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let nome = String(lines.shift())
let salario = parseFloat(lines.shift())
let venda = parseFloat(lines.shift())

let salario_final = salario + (15 / 100 * venda)

console.log("TOTAL = R$ "+salario_final.toFixed(2))