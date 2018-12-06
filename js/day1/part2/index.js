const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf8').split('\n');

let freq = 0;
let freqSeen = [];
let found = -1;

while(found = -1){
    for(let i = 0; i < input.length; i++ ) {
        let item = input[i];
        freq += parseInt(item);
        found = freqSeen.indexOf(freq);
        
        if(found > -1) {
            console.log("already seen" , freq);
            process.exit();
        }
    
        freqSeen.push(freq);
    }
}



