

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int c = Integer.parseInt(br.readLine()); // 테스트 케이스

        while(c --> 0){
            HashMap<String, Integer> hm = new HashMap<>();
            int n = Integer.parseInt(br.readLine());

            while(n -- >0){
                StringTokenizer st = new StringTokenizer(br.readLine(), " ");
                st.nextToken();
                String kind = st.nextToken();

                if(hm.containsKey(kind)){ // 종류의 옷이 해시맵에 있을 경우
                    hm.put(kind, hm.get(kind)+1); // 해당 종류의 개수를 +1
                }
                else { // 없을 경우
                    hm.put(kind, 1); // 해당 종류와 1을 넣어줌
                }
            }
            int result = 1;

            for(int a : hm.values()){
                result *= (a +1); // 안 입는 경우를 생각해서 종류별 옷의 개수에 +1 해준 값을 곱해줘야함
            }
            sb.append(result -1).append('\n'); // 알몸인 상태를 제외해야함 -> 최종값 -1
        }
        System.out.println(sb);

    }
}
