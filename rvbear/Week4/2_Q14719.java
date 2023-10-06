import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stk = new StringTokenizer(br.readLine());
        int h = Integer.parseInt(stk.nextToken());          // 높이
        int w = Integer.parseInt(stk.nextToken());          // 너비
        int[] block = new int[w];                           // 블럭들의 높이를 저장할 배열
        stk = new StringTokenizer(br.readLine());
        for(int i = 0; i < w; i++) {
            block[i] = Integer.parseInt(stk.nextToken());
        }

        int sum = 0;                                        // 빗물의 총량
        for(int i = 1; i < w-1; i++) {                      // 맨 앞과 맨 뒤의 블럭은 제외
            int leftMax = 0, rightMax = 0;                  // 두번째 블럭의 좌측과 우측을 기준으로 각각 가장 높은 값을 저장

            for(int l = 0; l < i; l++) {                    // 해당 블럭의 좌측에 있는 블럭들 중 가장 높은 값
                leftMax = Math.max(leftMax, block[l]);
            }
            for(int r = i+1; r < w; r++) {                  // 해당 블럭의 우측에 있는 블럭들 중 가장 낮은 값
                rightMax = Math.max(rightMax, block[r]);
            }

            int temp = Math.min(leftMax, rightMax);         // 둘 중 더 낮은 값을 temp에 저장
            if(block[i] < temp) {                           // 해당 블럭이 temp보다 낮다면 총량에 temp와 블럭의 차이를 저장
                sum += temp - block[i];
            }
        }

        System.out.println(sum);                            // 결과값 출력
        br.close();
    }
}