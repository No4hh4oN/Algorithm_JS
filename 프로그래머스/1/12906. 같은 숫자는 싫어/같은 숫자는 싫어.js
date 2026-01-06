function solution(arr)
{
    const stack = [];
    
    for (const n of arr) {
        if (stack[stack.length - 1] !== n) {
            stack.push(n);
        }
    }

    console.log(stack);
    
    return(stack)
}