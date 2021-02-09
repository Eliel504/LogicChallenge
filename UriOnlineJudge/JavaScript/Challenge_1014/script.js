var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

X = parseInt(lines.shift())
Y = parseFloat(lines.shift()).toFixed(1)

consumo = X / Y

console.log(consumo.toFixed(3) +" km/l")