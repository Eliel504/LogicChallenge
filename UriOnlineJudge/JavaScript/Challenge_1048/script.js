var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var novoSalario;
var percent;
var reajuste;

if (salario >= 0 && salario <= 400) {
    reajuste = salario * 0.15;
    novoSalario = salario + reajuste;
    percent = 15;
} else if (salario > 400 && salario <= 800) {
    reajuste = salario * 0.12;
    novoSalario = salario + reajuste;
    percent = 12;
} else if (salario > 800 && salario <= 1200) {
    reajuste = salario * 0.10;
    novoSalario = salario + reajuste;
    percent = 10;
} else if (salario > 1200 && salario <= 2000) {
    reajuste = salario * 0.07;
    novoSalario = salario + reajuste;
    percent = 7;
} else {
    reajuste = salario * 0.04;
    novoSalario = salario + reajuste;
    percent = 4;
}


console.log(`Novo salário: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em porcentual ${percent} %`);