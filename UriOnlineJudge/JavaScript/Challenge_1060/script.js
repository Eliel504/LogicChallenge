const { stringify } = require('querystring');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var num = []
var positivo = 0;

num[0] = lines.shift()
num[1] = lines.shift()
num[2] = lines.shift()
num[3] = lines.shift()
num[4] = lines.shift()
num[5] = lines.shift()


for(c = 0; c < num.length; c++){
    if(num[c] > 0){
        positivo ++;
    }
}

console.log(`${positivo} valores positivos`)