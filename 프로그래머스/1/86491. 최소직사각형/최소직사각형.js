function solution(sizes) {
    var answer = 0;

    let count = sizes.length;
    let widths = [];
    let heights = [];
    let maxWidth = -Infinity;
    let maxHeight = -Infinity;
    for(let i = 0; i < count; i++) {
        widths.push(Math.max(sizes[i][0], sizes[i][1]));
        heights.push(Math.min(sizes[i][0], sizes[i][1]));

        maxWidth = Math.max(maxWidth, widths[i]);
        maxHeight = Math.max(maxHeight, heights[i]);
    }

    answer = maxWidth * maxHeight

    return answer;
}