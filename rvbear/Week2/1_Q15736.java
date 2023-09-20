import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long n = Long.parseLong(br.readLine());     // 깃발의 개수
        long count = 1;                             // 1은 무조건 백기가 위로 올라옴

        // 제곱수가 되어야 백기가 위로 올라온다. 때문에 루트 n보다 작은 제곱근을 구해주면 된다.
        for(int i = 2; i < n; i++) {                
            if(i * i > n) {                         // 제곱을 했을 때 n보다 크다면 더이상 탐색할 필요가 없음
                break;
            }
            count++;                                // 해당 수를 제곱하면 백기가 위로 올라오는 번째 수
        }

        System.out.println(count);                  // 결과를 출력
        br.close();
    }
}