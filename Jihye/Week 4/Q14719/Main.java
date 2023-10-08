

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int h = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());

        int [] height = new int[w];
        int result = 0;
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i<w; i++){
            height[i] = Integer.parseInt(st.nextToken());
        }
        for(int i = 1; i<w-1; i++){ // 첫 블록 줄이랑 마지막 블록 줄은 제외
            int start = 0;
            int end = 0;

            for(int j = 0; j<i; j++){ // 왼쪽에 해당하는 값
                start = Math.max(height[j], start);
            }
            for(int j = i+1; j<w; j++){ // 오른쪽에 해당하는 값
                end = Math.max(height[j], end);
            }
            if(height[i]< start && height[i] < end){ // 양쪽 값이 해당 블록 높이보다 높다면
                result += Math.min(start, end) - height[i];
            }

        }
        System.out.println(result);
    }
}
