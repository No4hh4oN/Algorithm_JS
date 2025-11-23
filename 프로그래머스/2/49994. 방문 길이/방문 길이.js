//방문 길이
/*
U: 위쪽으로 한 칸 가기

D: 아래쪽으로 한 칸 가기

R: 오른쪽으로 한 칸 가기

L: 왼쪽으로 한 칸 가기

우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다.
예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 
캐릭터가 처음 걸어본 길의 길이는 7이 됩니다


1. 일단 움직이게 하자.
2. 이미 지난 길에 대해 생각해보자.
*/

function solution(dirs) {
    let x = 0;
    let y = 0;

    const visited = new Set();
    for (const dir of dirs) {
        const [nx, ny] = update(x, y, dir);

        // 유효성 체크(isVaildate가 거짓이라면 if 문을 통해 반복분 이하 문장 수행x)
        if (!isValidate(nx, ny)) {
            continue;
        }

        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);

        x = nx;
        y = ny;
    }

    return visited.size / 2;

}


// 방향 전환 함수
const update = (x, y, dir) => {
    switch (dir) {
        case 'U':
            return [x, y + 1];
        case 'D':
            return [x, y - 1];
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
    }
}

// 범위 벗어난 좌표 체크
const isValidate = (nx, ny) => {
    return (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5);
}