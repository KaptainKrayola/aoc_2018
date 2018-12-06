const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf8').split('\n');

let freq = 0;
for(let i = 0; i < input.length; i++ ) {
    let item = input[i];
    freq+= parseInt(item);
};

console.log(freq);
