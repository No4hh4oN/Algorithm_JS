import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        // 원본 배열을 복사하여 정렬된 리스트 생성
        int[] sortedArr = arr.clone();
        Arrays.sort(sortedArr);

        // HashMap을 사용하여 각 값의 좌표 압축된 순위 저장
        Map<Integer, Integer> map = new HashMap<>();
        int rank = 0;

        for (int num : sortedArr) {
            if (!map.containsKey(num)) {
                map.put(num, rank++);
            }
        }

        // 결과를 StringBuilder에 저장 후 한 번에 출력하여 시간 절약
        StringBuilder sb = new StringBuilder();
        for (int num : arr) {
            sb.append(map.get(num)).append(" ");
        }

        System.out.println(sb);
    }
}
