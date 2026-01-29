
function solution(numbers) {
    const digits = numbers.split("");
    const used = Array(digits.length).fill(false);
    const made = new Set();

    // 조합찾기
    const dfs = (cards) => {
        if (cards.length > 0) {
            made.add(Number(cards));
        }

        for (let i = 0; i < digits.length; i++) {
            // 이미 넣은 카드는 건너뜀
            if (used[i]) continue;

            used[i] = true;
            dfs(cards + digits[i]);
            used[i] = false;
        }
    }

    // 소수 판별
    const isPrime = (N) => {
        if (N < 2) return false;
        for (let i = 2; i * i <= N; i++) {
            if (N % i === 0) {
                return false;
            }
        }
        return true;
    }


    // 시작
    dfs("");

    let answer = 0;

    for (const num of made) {
        if (isPrime(num)) {
            answer++;
        }
    }

    return answer;
}
