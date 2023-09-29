

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()); //서있는 사람의 수

        Integer [] arr = new Integer[n];
        for(int i=0; i<n; i++){
            arr[i] = Integer.parseInt(br.readLine()); // 주려고 하는 팁 입력 받기
        }
        Arrays.sort(arr, Comparator.reverseOrder());
        ////내림차순 정렬 -> 많이 주려고 했던 사람들이 빠른 순서인게 더 팁을 많이 가져갈 수 있음

        long ans = 0;
        for(int i=0; i<n; i++) {
            if (arr[i] - i <= 0) break; // 음수는 제외
            ans += arr[i] - i; // 주려고 했던 팁과 순서의 차
        }
        System.out.println(ans);
    }

}
