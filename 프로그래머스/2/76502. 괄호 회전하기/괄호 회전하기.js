// 괄호 회전하기
function solution(s) {
    // 올바른 괄호 수
    let count = 0;
    // 판별용 스택


    // STACK - LIFO
    // s의 길이만큼 회전 반복
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        let isCorrect = true;

        for (let j = 0; j < s.length; j++) {
            // 여는 괄호일 때는 push
            const c = s[(i + j) % s.length];

            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
            }

            // 닫는 괄호일 때 검사
            else {


                if (stack.length === 0) {
                    isCorrect = false;
                    break;
                }
                else if (c === ')' && stack[stack.length - 1] === '(') {
                    stack.pop();
                }
                else if (c === '}' && stack[stack.length - 1] === '{') {
                    stack.pop();
                }
                else if (c === ']' && stack[stack.length - 1] === '[') {
                    stack.pop();
                }
                else {
                    isCorrect = false;
                    break;
                }
            }
        }

        // 검사 통과 + 스택이 비어있다 -> 올바른 결과
        if (isCorrect && stack.length === 0) {
            count += 1;
        }
    }

    return count;
}

console.log(solution("[](){}"));