import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());        // 사람 수
        long[] arr = new long[n];
        for(int i = 0; i < n; i++) {
            arr[i] = Long.parseLong(br.readLine());
        }

        Arrays.sort(arr);                               // 팁을 오름차순으로 정렬

        long sum = 0, index = 0;                         // 받을 수 있는 팁의 총합, 순서에 따라 빼줘야하는 값
        for(int i = n-1; i >= 0; i--) {
            long temp = arr[i] - index++;                // 내려고 했던 팁 - 순서에 따라 빼줘야하는 값
            if(temp <= 0) {                             // 위의 계산한 값이 음수라면 이후는 더 탐색할 필요가 없음
                break;
            }
            sum += temp;                                // 총합에 값을 저장
        }

        System.out.println(sum);                        // 결과값 출력
        br.close();
    }
}