const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf8').split('\n');

let exactlyTwice = 0;
let exactlyThrice = 0;

for(let i = 0; i < input.length; i++) {
    let str = input[i];
    let foundTwo = false;
    let foundThree = false;
    for(let c = 0; c < str.length; c++) {
        let char = str[c];
        let regex = new RegExp(char, 'g');
        let count = (str.match(regex) || []).length;
        
        if(count === 2 && !foundTwo) {
            exactlyTwice++;
            foundTwo = true;
        }
            
        if(count === 3 && !foundThree) {
            exactlyThrice++;
            foundThree = true;
        }
            
    }
}

console.log("Twice: ", exactlyTwice);
console.log("Thrice: ", exactlyThrice);
console.log("Answer: ", exactlyTwice * exactlyThrice )