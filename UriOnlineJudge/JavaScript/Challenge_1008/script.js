var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift())
let hr_trab = parseFloat(lines.shift())
let vl_hr = parseFloat(lines.shift())

let salario = hr_trab * vl_hr

console.log("NUMBER = " + number)
console.log("SALARY = U$ "+salario.toFixed(2))