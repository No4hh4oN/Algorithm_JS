// 프로그래머스 피로도

function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);

    const dfs = (total, count) => {
        answer = Math.max(answer, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [need, cost] = dungeons[i];

            if (!visited[i] && total >= need) {
                visited[i] = true;
                dfs(total - cost, count + 1);
                visited[i] = false;
            }


        }
    }

    dfs(k, 0)
    return answer;
}