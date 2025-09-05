function solution(numbers, n) {
    return numbers.reduce((acc, cur) => {
        if(acc > n) {
            return acc;
        }
        return acc + cur;
    })


    // var answer = 0;

    // for(let i = 0; i < numbers.length; i++) {
    //     answer += numbers[i];
    //     if(answer > n)
    //         break;
    // }
    // return answer;

    // for문: 합계가 n을 초과하는 순간 반복을 멈춤(break).

    // reduce: 모든 요소를 끝까지 순회하지만, 조건에 따라 누적값만 유지 → 결과는 같지만 성능은 for문보다 약간 손해.

    // 즉, 결과는 같지만 동작 원리는 살짝 다릅니다.
}