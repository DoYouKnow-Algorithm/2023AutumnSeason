import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static StringBuilder sb = new StringBuilder(); // 결과를 저장할 StringBuilder

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()); // n의 자리수
        result(0, n);
        System.out.println(sb);
    }

    // 에라토스테네스의 체 이용하여 소수 판별
    public static boolean isPrime(int num) {
        if (num < 2) return false;

        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    // 완전탐색 -> 최대 경우 : 10^9 -> 메모리초과
    // 신기한 소수가 되려면 맨 왼쪽 숫자가 소수여야함. -> 2,3,5,7
    public static void result(int output, int n) {
        if (n == 0) {
            if (isPrime(output)) { // 현재 숫자가 소수인지 확인하고
                sb.append(output).append("\n"); // 소수이면 출력형식에 맞춰 StringBuilder에 추가
            }
            return;
        }
        for (int i = 0; i < 10; i++) { // 0부터 9까지의 숫자를 시도
            int next = output * 10 + i; // 다음 자릿수에 현재 숫자를 추가
            if (isPrime(next)) { // 새로운 숫자가 소수라면
                result(next, n - 1);  // 다음 자릿수를 찾기 위해 재귀 호출
            }
        }
    }

}
