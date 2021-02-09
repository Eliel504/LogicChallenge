const { match } = require('assert');
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
let R = parseInt(lines.shift())
let vol = ((4/3) * pi) * Math.pow(R, 3)

console.log("VOLUME = ", + vol.toFixed(3))