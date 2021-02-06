var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let inf_A = lines.shift().split(' ');
let inf_B = lines.shift().split(' ');

let id_A = inf_A.shift();
let qtd_A = inf_A.shift();
let vl_A = inf_A.shift();

let id_B = inf_B.shift();
let qtd_B = inf_B.shift();
let vl_B = inf_B.shift();

let TOTAL = (qtd_A * vl_A) + (qtd_B * vl_B);

console.log("VALOR A PAGAR: R$ " + TOTAL.toFixed(2));