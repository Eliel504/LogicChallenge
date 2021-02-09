var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift().split(' ');

let A = parseFloat(valores.shift());
let B = parseFloat(valores.shift());
let C = parseFloat(valores.shift());
let pi = 3.14159;

let triangulo = (A * C) / 2;
let circulo = pi * Math.pow(C, 2);
let trapezio = C * ((A + B)/2);
let quadrado = Math.pow(B,2);
let retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));