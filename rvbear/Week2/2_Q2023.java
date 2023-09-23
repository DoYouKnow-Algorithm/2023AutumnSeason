import java.io.*;

public class Main {
    static int n;                                       // 전체 자리 수
    static StringBuilder stb = new StringBuilder();
    public static boolean isPrime(int num) {            // 소수 판별 메서드
        if(num < 2) return false;                       // 값이 2 이하라면 false
        for(int i = 2; i * i <= num; i++) {             // i의 제곱이 num보다 작거나 같은 경우만 반복을 진행
            if(num % i == 0) {                          // 해당 조건을 만족하는 i로 나누어 떨어질 경우 false
                return false;
            }
        }
        return true;                                    // 그 외의 경우 true
    }
    public static void dfs(int num, int count) {        // 깊이 우선 탐색
        if(count == n) {                                // 깊이가 n과 같을 경우 결과값 저장
            stb.append(num).append("\n");
        }
        for(int i = 1; i < 10; i++) {                   // 다음 자리수를 추가해주기 위해 0부터 9까지 반복
            int temp = num * 10 + i;                    // 다음 수를 만들어주고
            if(count < n && isPrime(temp)) {            // 그 수가 소수에 판별하며 원하는 깊이가 아닐 경우
                dfs(temp, count+1);                     // dfs 재귀
            }
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());            // 자리수 입력
        dfs(0, 0);                                      // 깊이우선탐색 시작
        System.out.print(stb);                          // 결과값 출력
    }
}