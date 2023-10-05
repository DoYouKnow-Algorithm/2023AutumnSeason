

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken()); // 소의 수
        int q = Integer.parseInt(st.nextToken()); // 장난칠 횟수
        int [] cow = new int[n+1]; // 소의 품질 점수를 저장하는 배열

        st = new StringTokenizer(br.readLine());
        for(int i = 1; i< n+1; i++){
            cow[i] = Integer.parseInt(st.nextToken());
        }

        int[] products = new int[n+1];
        long sum = 0;
        for(int i = 1; i<= n; i++){
            products[i] = cow[i] * cow[i % n + 1] * cow[(i+1)%n +1] * cow[(i+2)%n+1];
            sum += products[i];
        }

        st = new StringTokenizer(br.readLine());
        for(int i = 1; i<=q; i++){
            int play = Integer.parseInt(st.nextToken());
            for(int j = 0; j<4; j++){ // 4개의 그룹 값이 변하기 때문 -> 변한 값이 4개의 그룹 안에 속해있음
                int index = (play - j + n - 1) % n + 1; // 장난을 친 소의 인덱스를 정확하게 찾기 위해 모듈러 연산을 활용
                cow[index] *= -1; // 소의 품질 값 변동
                // 전체 합에서 변동된 만큼을 빼거나 더함
                // ex : products[0]이 5였다고 가정 했을 때 바뀐 값이 -5가 돼야 한다면 5 - (5*2)이기 때문
                sum -= 2 * products[index];
                products[index] *= -1; // 해당 소의 품질 값도 변동
            }
            System.out.println(sum);
        }

    }

}
