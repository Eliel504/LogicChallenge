var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift().split(' ');

let A = parseInt(valores.shift())
let B = parseInt(valores.shift())
let C = parseInt(valores.shift())

let maior1 = (A + B + Math.abs(A - B)) /2

let maior2 = (maior1 + C + Math.abs(maior1-C))/2

console.log(maior2+" eh o maior")

