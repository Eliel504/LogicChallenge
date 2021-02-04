var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

A = parseFloat(lines.shift()).toFixed(1);
B = parseFloat(lines.shift()).toFixed(1);

peso = ((A * 3.5) + (B * 7.5)) / 11

console.log("MEDIA = " + peso.toFixed(5))
