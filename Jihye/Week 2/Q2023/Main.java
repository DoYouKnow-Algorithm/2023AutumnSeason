

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static  StringBuilder sb = new StringBuilder();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        solvePb(0, n);
        System.out.println(sb);
    }

    public static void solvePb(int a, int n){
        if(n==0){ // n자리수가 됐다면
            if(isPrime(a)){ // 소수이면
                sb.append(a).append("\n"); // 출력
                return;
            }
        }
        for(int i =0; i<10; i++){
            int temp = a * 10 + i; // 일의 자리 소수에서 n의 자리 소수를 만드는 과정
            if(isPrime(temp)){ // 소수가 맞다면
                solvePb(temp, n-1); // n에서 -1해주고 다시 temp 값을 가지고 소수 만드는 과정 반복
            }
        }
    }

    public static boolean isPrime(int num){ // 소수인지 확인하는 함수
        if(num < 2) return false; // 0, 1은 소수가 아님

        for(int i = 2; i<= Math.sqrt(num); i++){
            // 소수가 아니라면 확인을 루트값 안에서 할 수 있기 때문에 루트 값까지만 확인하면 된다.
            if(num % i == 0) return false; // 나누어진다면 소수가 아니기 때문에
        }
        return true;
    }
}
