// 주식 가격
function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let money = 0;
        for (let j = i + 1; j < s.length; j++) {
            if(s[i] > s[j]) {
                money += 1;
                break;
            }
            else if(s[i] <= s[j]) {
                money += 1;
            }
        }
        stack.push(money);
    }


    return stack;
}