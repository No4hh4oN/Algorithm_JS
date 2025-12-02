function solution(board, moves) {
    // 2차원 배열을 스택으로 초기화 - 문법 잡기
    const stack = [...Array(board[0].length)].map(() => []);

    // board에 있는 값들을 스택으로 옮기기(세로 구조로 초기화)
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) {
                stack[j].push(board[i][j]);
            }
        }
    }

    let boom = 0;

    const basket = [];

    // moves 내의 값들 만큼 진행
    for (const move of moves) {

        // 해당 칸에 인형이 없으면 스킵
        if (stack[move - 1].length > 0) {
            const temp = stack[move - 1].pop();

            if (basket.length > 0 && basket[basket.length - 1] === temp) {
                basket.pop();
                boom += 2;
            } else {
                basket.push(temp);
            }
        }
    }

    return boom;
}
