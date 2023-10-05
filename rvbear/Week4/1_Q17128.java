import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stk = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(stk.nextToken());              // 소의 수
        int q = Integer.parseInt(stk.nextToken());              // 장난의 횟수
        long[] cows = new long[n+1], mul = new long[n+1];       // 소의 품질 점수 저장 배열, 곱셈만 계산한 값 저장 배열
        stk = new StringTokenizer(br.readLine());
        for(int i = 1; i <= n; i++) {
            cows[i] = Long.parseLong(stk.nextToken());
        }

        for(int i = 1; i <= n; i++) {
            mul[i] = 1;
            for(int j = i, index = i; j < i+4; j++, index++) {  // j = 반복횟수, index = 실질적인 index
                mul[i] *= cows[index = j > n ? j - n : index];
            }
        }

        long sum = 0;                                           // 총 계산 값
        for(long s : mul) {                                     // mul 배열의 모든 값을 더해줌
            sum += s;
        }

        StringBuilder stb = new StringBuilder();
        stk = new StringTokenizer(br.readLine());
        for(int i = 0; i < q; i++) {
            int joke = Integer.parseInt(stk.nextToken());       // 장난칠 소의 번호
            for(int j = i; j < i+4; j++) {                      // j = 반복횟수
                mul[joke = joke <= 0 ? n : joke] *= -1;         // mul 배열에 -1을 곱한 값을 저장
                sum += mul[joke--] * 2;                         // 합에 변한 값을 저장해줌 => 누적합
            }
            stb.append(sum).append("\n");
        }

        System.out.print(stb);
        br.close();
    }
}