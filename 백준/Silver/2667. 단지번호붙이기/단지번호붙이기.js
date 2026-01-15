// 백준 2667 단지번호붙이기
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const n = input[0].split(' ').map(Number);;
// 주택 단지
const apt = input.slice(1).map(line => line.split('').map(Number));
// 방문 여부 체크
const visited = Array.from({ length: n }, () => Array(n).fill(false));

// 단지내 집의 수
let index = 0;
const aptCount = [];

// 이동 방향
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (apt[i][j] == 1 && !visited[i][j]) {
            visited[i][j] = true;

            //bfs
            let queue = [[i, j]];
            let head = 0;
            let tempNum = 1;
            while (head < queue.length) {
                const [x, y] = queue[head++];

                for (let k = 0; k < 4; k++) {
                    let tempX = x + dx[k];
                    let tempY = y + dy[k];

                    if (
                        tempX >= 0 && tempX < n && tempY >= 0 && tempY < n
                        && apt[tempX][tempY] == 1 && !visited[tempX][tempY]
                    ) {
                        visited[tempX][tempY] = true;
                        queue.push([tempX, tempY]);
                        tempNum++;
                    }
                }
            }
            aptCount.push(tempNum);
            index++;
        }
    }
}

aptCount.sort((a, b) => a - b)

console.log(aptCount.length);
for(let i = 0; i < aptCount.length; i++) {
    console.log(aptCount[i]);
}