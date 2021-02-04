const { stringify } = require('querystring');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var tipo_A = (lines.shift())
var tipo_B = (lines.shift())
var tipo_C = (lines.shift())

var especie;

if(tipo_A == 'vertebrado'){
    if(tipo_B == 'ave'){
        if(tipo_C == 'carnivoro'){
            especie = 'aguia'
        }else if(tipo_C == 'onivoro'){
            especie = 'pomba'
        }
    }else if(tipo_B == 'mamifero'){
        if(tipo_C == 'onivoro'){
            especie = 'homem'
        }else if(tipo_C == 'herbivoro'){
            especie = 'vaca'
        }
    }
}else if(tipo_A == 'invertebrado'){
    if(tipo_B == 'inseto'){
        if(tipo_C == 'hematofago'){
            especie = 'pulga'
        }else if (tipo_C == 'herbivoro'){
            especie = 'lagarta'
        }
    }else if(tipo_B == 'anelideo'){
        if(tipo_C == 'hematofago'){
            especie = 'sanguessuga'
        }else if(tipo_C == 'onivoro'){
            especie = 'minhoca'
        }
    }
}

console.log(especie)