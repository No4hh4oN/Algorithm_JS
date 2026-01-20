// 게임 맵 최단거리
function solution(maps) {
    // 도달 불가 조건
    const n = maps[0].length;
    const m = maps.length;

    // 방문여부
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // 플레이어 위치 0,0
    // 초기 카운트 = 0;
    const queue = [[0, 0, 1]]; // x, y, 거리
    visited[0][0] = true;


    // 이동 방향
    let head = 0;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (head < queue.length) {
        const [x, y, dist] = queue[head++];

        // 도착
        if (x === m - 1 && y === n - 1) {
            return dist;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && nx < m &&
                ny >= 0 && ny < n &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }

    }
    return -1;
}
