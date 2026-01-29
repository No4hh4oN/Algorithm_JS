// 프로그래머스 카펫

function solution(brown, yellow) {
    var answer = [];

    const checkLength = (yellowWidth, yellowHeight) => {
        if(2 * (yellowWidth + yellowHeight) + 4 === brown) {
            return true;
        } else {
            return false;
        }
    }

    for(let i = 1; i * i <= yellow; i++) {
        if(yellow % i === 0) {
            let tempWidth = yellow / i;
            let tempHeight = i;

            if(checkLength(tempWidth, tempHeight)) {
                answer.push(tempWidth + 2, tempHeight + 2);
            }
        }        
    }

    return answer;
}