
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static boolean[] prime = new boolean[246913]; //2n이 최대 246912이기때문에 0부터 시작하기때문에 +1
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        isPrime();
        StringBuilder sb = new StringBuilder();

        while(true){
            int n = Integer.parseInt(br.readLine());
            if(n==0) break; // 0일 경우 종료

            int count = 0; // 소수 개수를 구하는 변수
            for(int i=n+1; i<=2*n; i++){
                if(!prime[i]) count ++;
            }
            sb.append(count).append('\n');
        }
        System.out.print(sb);
    }

    public static void isPrime(){ // 소수를 구하는 함수
        prime[0] = prime[1] = true; // 0과 1은 소수가 아니기 때문에 true

        for(int i=2; i<=Math.sqrt(prime.length); i++){
            if(prime[i]) continue;
            for(int j = i*i; j <prime.length; j+=i){
                prime[j] = true;
            }
        }
    }
}
