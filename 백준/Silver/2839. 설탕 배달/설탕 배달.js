// 백준 2839 설탕배달
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

let num = Number(input);
let count = 0;

while(num >= 0) {
    if(num % 5 === 0) {
        count += (num / 5);
        console.log(count);
        return;
    }
    num -= 3;
    count++;
}

console.log(-1);