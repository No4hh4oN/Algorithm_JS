// 백준 그림
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');


const [n, m] = input[0].split(' ').map(Number);
// 1, 0 적혀있는 도화지
const board = input.slice(1).map(line => line.split(' ').map(Number));
// 방문여부 체크
const visited = Array.from({length: n}, () => Array(m).fill(false));

// 이동 방향
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 그림개수
let pictureCount = 0;
// 가장 넓은 넓이
let maxArea = 0;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(board[i][j] == 1 && !visited[i][j]) {
            pictureCount++;
            let tempArea = 1;
            visited[i][j] = true;

            //bfs 구현
            let queue = [[i, j]];
            let head = 0;
            while(head < queue.length) {
                const [x, y] = queue[head++];

                for(let k = 0; k < 4; k++) {
                    const tempX = x + dx[k];
                    const tempY = y + dy[k];

                    if( 
                        0 <= tempX && tempX < n &&
                        0 <= tempY && tempY < m && 
                        board[tempX][tempY] == 1 && !visited[tempX][tempY]
                    ) {
                        visited[tempX][tempY] = true;
                        queue.push([tempX, tempY]);
                        tempArea++;
                    }
                }
            }

         maxArea = Math.max(maxArea, tempArea);
        }
    }
}

console.log(pictureCount);
console.log(maxArea);
