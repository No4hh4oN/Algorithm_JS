    /* 

    실패율 :
    스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

    전체 스테이지의 개수 N,
    게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
    실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성
     */

    function solution(N, stages) {

        // 클리어한 사람은 N+1 자리 있을 것
        const failCount = Array(N + 2).fill(0);
        const failRate = [];
        let players = stages.length;

        stages.forEach(stage => {
            failCount[stage] += 1;
        });

        for (let i = 1; i <= N; i++) {
            if (players === 0) {
                failRate.push([i, 0]);
                continue;
            }

            const rate = failCount[i] / players;
            failRate.push([i, rate]);

            players -= failCount[i];
        }

        failRate.sort((a, b) => (b[1] - a[1]));

        return failRate.map(v => v[0]);
    }