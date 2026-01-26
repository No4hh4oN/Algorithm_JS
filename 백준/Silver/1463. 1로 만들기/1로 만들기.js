// 백준 1463 설탕배달
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input);

/*
let count = 0;

while (num > 1) {
    if (num % 3 === 0) {
        count++;
        num /= 3;
    } else if (num % 2 === 0) {
        count++;
        num /= 2;
    } else {
        num--;
        count++;
    }
}
*/

const dp = Array(num + 1).fill(0);

//dp로 풀기
for(let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + 1;

    if(i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if(i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
}

console.log(dp[num]);