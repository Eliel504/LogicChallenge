const { stringify } = require('querystring');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

for( c = 2; c <= 100; c+=2){
    console.log(c)
}