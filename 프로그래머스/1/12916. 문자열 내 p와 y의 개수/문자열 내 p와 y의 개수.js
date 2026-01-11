function solution(s) {
    var answer = true;

    let strs = s.toLowerCase();

    let cP = 0;
    let cY = 0;


    for (const str of strs) {
        if(str === 'p') {
            cP++;
        } else if(str === 'y') {
            cY++;
        } else {
            continue;
        }
    }

    if(cP != cY) {
        answer = false;
    }

    return answer;
}
