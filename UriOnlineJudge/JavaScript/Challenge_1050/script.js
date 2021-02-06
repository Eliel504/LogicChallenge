const { stringify } = require('querystring');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var ddd = parseFloat(lines.shift().split());
var cidade = " ";

if(ddd == 61){
    cidade = 'Brasilia';
}else if(ddd == 71){
    cidade = 'Salvador';
}else if(ddd == 11){
    cidade = 'Sao Paulo';
}else if(ddd == 21){
    cidade = 'Rio de Janeiro';
}else if(ddd == 32){
    cidade = 'Juiz de Fora';
}else if(ddd == 19){
    cidade = 'Campinas';
}else if(ddd == 27){
    cidade = 'Vitoria';
}else if(ddd == 31){
    cidade = 'Belo Horizonte';
}

if(cidade == " "){
    console.log('DDD nao cadastrado');
}else{
    console.log(cidade);
}

