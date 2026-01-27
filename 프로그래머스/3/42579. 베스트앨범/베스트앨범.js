// 프로그래머스 베스트앨범

function solution(genres, plays) {
    var answer = [];
    let num = genres.length;

    const bestAlbum = new Map();

    for (let i = 0; i < num; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!bestAlbum.has(genre)) {
            bestAlbum.set(genre, { total: 0, songs: [] });
        }

        const songInfo = bestAlbum.get(genre);
        songInfo.total += play;
        songInfo.songs.push({ id: i, plays: play });
    }

    const sorted = [...bestAlbum.entries()].sort((a, b) => b[1].total - a[1].total);

    for(const sort of sorted) {
        sort[1].songs.sort((a, b) => {
            // 고유번호가 다르면 재생수가 많은 순으로 내림차순
            if(b.plays !== a.plays)
                return b.plays - a.plays;

            // 고유번호가 같으면 id가 작은 순으로 오름차순
            return a.id - b.id;
        })

        answer.push(...sort[1].songs.slice(0, 2).map(s => s.id));
    }
    
    return answer;
}