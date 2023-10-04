

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Integer> list = new ArrayList<>();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken()); //원생의 수
        int k = Integer.parseInt(st.nextToken()); // 조의 개수
        int [] height = new int[n]; // 키를 저장해주는 배열

        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++){
            height[i] = Integer.parseInt(st.nextToken()); // 원생들의 키 입력 받기
        }
        Arrays.sort(height); // 오름차순으로 정렬

        for(int i = 1; i<n; i++){ // 차를 구하고 list에 넣어주기
            list.add(height[i] - height[i-1]);
        }
        Collections.sort(list); // 키의 차이를 구한 것을 다시 오름차순으로 정렬

        int result = 0;
        for(int i = 0; i< n- k; i++){ // k개가 되게끔 조 나누기 (k개의 조 -> n-k번 자름)
            result += list.get(i); // 차가 가장 작은 수를 n-k번 구해서 더함
        }
        System.out.println(result);
    }
}
