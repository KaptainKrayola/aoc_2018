const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf8').split('\n');

for(let i = 0; i < input.length; i++) {
    let str = input[i];

    for(let j = 0; j < input.length; j++) {
        let innerStr = input[j];
        // don't process if it's the same one from the outer loop
        if(str !== innerStr) {
            let match = checkStrings(str, innerStr);
            if(match) {
                console.log(match)
                process.exit();
            }
        }
    }
}

function checkStrings(str, str2) {
    let noMatch = 0;
    let matches = [];
    for(let c = 0; c < str.length; c++) {
        let char = str[c];
        let match = str2[c] === char;
        if(match) {
            matches.push(char);
        } else{
            noMatch++;
        }          

        if(noMatch > 2)
            return false;
    }

    return matches.join('');
}
