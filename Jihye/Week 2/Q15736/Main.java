

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()); // 출전한 학생의 수이자 깃발의 갯수
        int count = 1;
        /*
        1/ W ->1
        2/ WB ->1
        3/ WBB -> 1
        4/ WBBW ->2
        5/ WBBWB -> 2
        6/ WBBWBB -> 2
        7/ WBBWBBB -> 2
        8/ WBBWBBBB -> 2
        9/ WBBWBBBBW -> 3
        10/ WBBWBBBBWB -> 3
        N보다 작은 제곱수의 개수를 구하면 됨
        */
        for (int i=2; i<=n; i++){
            if(i*i > n) break;
            count ++;
        }
        System.out.print(count);

    }
}
