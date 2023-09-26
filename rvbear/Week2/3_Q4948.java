import java.io.*;

public class Main {
    public static boolean isPrime(int num) {        // 소수 판별 메서드
        if(num < 2) return false;                   // 1일 경우 소수 아님
        for(int i = 2; i * i <= num; i++) {         // i의 제곱이 판별하려는 값보다 작거나 같을 경우만 반복
            if(num % i == 0) {                      // 나누어 떨어진다면
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder stb = new StringBuilder();

        while(true) {
            int n = Integer.parseInt(br.readLine());    // n 입력
            if(n == 0) {                                // 0 입력 받으면 종료
                break;
            }

            int count = 0;                              // 소수의 개수
            for(int i = n+1; i <= 2*n; i++) {           // n보다는 크고 2n보다는 작거나 같은 수들 중
                if(isPrime(i)) {                        // 소수인 수가 있다면 count 증가
                    count++;
                }
            }
            stb.append(count).append("\n");
        }

        System.out.print(stb);
        br.close();
    }
}