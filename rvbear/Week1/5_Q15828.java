import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());        // 버퍼의 크기
        Queue<Integer> router = new LinkedList<>();     // 라우터
        while(true) {
            int input = Integer.parseInt(br.readLine());
            if(input == -1) {                           // -1 입력받으면 입력 종료
                break;
            } else if(input == 0) {                     // 0 입력받으면
                if(!router.isEmpty()) {                 // 라우터에 패킷이 존재한다면 패킷을 처리
                    router.poll();
                }
            } else {                                    // 패킷을 입력받으면
                if(router.size() != n) {                // 라우터가 다 차지 않았을 때 패킷을 라우터에 저장
                    router.offer(input);                
                }
            }
        }

        if(router.isEmpty()) {                          // 라우터가 비어있다면
            System.out.println("empty");
        } else {                                        // 라우터가 비어있지 않다면
            for(int num : router) {
                System.out.print(num + " ");
            }
        }
        br.close();
    }
}