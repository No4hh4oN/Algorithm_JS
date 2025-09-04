let input = require('fs').readFileSync(0, "utf-8").toString().trim().split(" ");

const [a, b] = input.map(Number);
console.log(a + b);