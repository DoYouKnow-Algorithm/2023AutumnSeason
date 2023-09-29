import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stk = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(stk.nextToken());          // 사람의 수
        int k = Integer.parseInt(stk.nextToken());          // 조의 수
        long[] temp = new long[n-1];                        // 차이를 저장할 배열
        stk = new StringTokenizer(br.readLine());
        long before = Long.parseLong(stk.nextToken());      // 이전 값
        for(int i = 0; i < n-1; i++) {
            long pre = Long.parseLong(stk.nextToken());     // 현재 값
            temp[i] = pre - before;                         // 현재 값 - 이전 값을 저장
            before = pre;                                   // 현재 값을 이전 값에 저장
        }

        Arrays.sort(temp);                                  // 차이를 저장한 배열을 정렬

        long sum = 0;                                       // 결과값
        for(int i = 0; i < n-k; i++) {                      // 사람의 수에서 만들려는 조의 수를 빼면 묶음의 수가 나옴
            sum += temp[i];                                 // 묶음의 수만큼 값을 저장
        }

        System.out.println(sum);                            // 결과값 출력
        br.close();
    }
}