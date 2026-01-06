// 연속 부분 수열 합의 개수
function solution(s) {
    // 배열을 2배로 늘려준다. -> 원형을 구현하기 위한 것
    const doubled = [...s, ...s];

    // 구간합 저장용 배열 생성
    const prefix = Array(doubled.length+1).fill(0);

    for(let i = 0; i < doubled.length; i++) {
        prefix[i+1] = doubled[i] + prefix[i];
    }

    const sum = new Set();

    for(let i = 1; i <= s.length; i++) {
        for(let j = 0; j < s.length; j++) {
            sum.add(prefix[j + i] - prefix[j]);
        }
    }
    
    return sum.size;
}