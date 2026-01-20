// 의상
function solution(clothes) {
    const map = new Map();
    let answer = 1;

    for (let i = 0; i < clothes.length; i++) {
        map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1);
    }

    for (const [type, count] of map) {
        answer *= count + 1;
    }
    answer -= 1;

    return answer;
}