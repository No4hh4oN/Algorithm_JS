function solution(arr) {
    const uniqueArr = [];
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            uniqueArr.push(arr[i] + arr[j]);
        }
    }
    return [...new Set(uniqueArr)].sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));