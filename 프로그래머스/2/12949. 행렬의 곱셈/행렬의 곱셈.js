// 행렬의 곱셈


//  0 1     0 1
//0 1,4     3,3     15, 15
//1 3,2     3,3     15, 15
//2 4,1             15, 15


function solution(arr1, arr2) {
    const row1 = arr1.length;
    const column1 = arr1[0].length;

    const row2 = arr2.length;
    const column2= arr2[0].length;

    // 초기화
    const matrix = Array.from({ length: row1 }, () =>
        Array(column2).fill(0)
    );

    for(let i = 0; i < row1; i++) {
        for(let j = 0; j < column2; j++) {
            for(let k = 0; k < column1; k++ ) {
                matrix[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return matrix;
}