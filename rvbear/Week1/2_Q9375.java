import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int t = Integer.parseInt(br.readLine());                            // test case 개수
        for(int i = 0; i < t; i++) {
            int n = Integer.parseInt(br.readLine());                        // 옷의 개수
            HashMap<String, Integer> map = new HashMap<>();                 // 값을 저장할 hashmap
            for(int j = 0; j < n; j++) {
                StringTokenizer stk = new StringTokenizer(br.readLine());
                String a = stk.nextToken();                                 // 필요없는 값
                String b = stk.nextToken();                                 // 실질적으로 필요한 값
                if(map.containsKey(b)) {                                    // 해당 분류가 map에 있다면 값을 1 증가
                    map.put(b, map.get(b) + 1);
                } else {                                                    // 없다면 map에 넣어줌
                    map.put(b, 1);
                }
            }
            int result = 1;                                                 // 결과값
            for(int s : map.values()) {                                     // 경우의 수를 구하면 됨
                result *= (s + 1);                                          // 하나도 입지 않은 경우도 포함하여 곱해줌
            }
            bw.write(String.valueOf(result - 1) + "\n");              // 하나도 입지 않은 경우가 모두 선택된 단 한가지의 경우를 제외해줌
        }

        br.close(); bw.close();
    }
}