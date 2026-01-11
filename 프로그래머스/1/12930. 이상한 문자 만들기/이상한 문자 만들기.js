function solution(s) {
    let index = 0;

    var answer = "";

    for(let i = 0;i < s.length; i++) {
        if(s[i] == ' ') {
            index = 0;
            answer += s[i];
        } else if(s[i] != ' ') {
            if(index % 2 == 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            index++;
        }
    }

    


    return answer;
}