// 모의고사
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...


function solution(answers) {
    // 수포자가 찍는 패턴    
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ]

    const scores = [0, 0, 0];

    // entries와 for에서 of 쓰는 문법 -> 수포자의 패턴과 정답이 얼마나 일치하는지 체크
    for(const [i, answer] of answers.entries()) {
        for(const [j, pattern] of patterns.entries()) {
            if(answer === pattern[i % pattern.length]) {
                scores[j] += 1;
            }
        }
    }

    // 점수 최대값 찾기
    const maxScore = Math.max(...scores);

    // 최종 최고득점자 수포자 산출
    const mathMan = [];
    for(let i = 0; i < 3; i++) {
        if(scores[i] === maxScore) {
            mathMan.push(i+1);
        }
    }

    return mathMan;
}
