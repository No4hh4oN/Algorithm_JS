// 폰켓몬

function solution(nums) {
    let count = nums.length / 2;
    const unique = new Set(nums);

    if(count < unique.size) {
        return count;
    } else {
        return unique.size;
    }
}