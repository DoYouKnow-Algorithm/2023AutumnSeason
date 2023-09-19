
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int size = Integer.parseInt(br.readLine()); // 버퍼의 크기
        Queue<Integer> queue = new LinkedList<>();

        while(true){
            int num = Integer.parseInt(br.readLine());
            if(num == -1) break; // -1이면 입력 종료
            if(num == 0) queue.remove(); // 0이면 패킷하나 처리
            else if (size > queue.size()){ // 만약 현재 queue에 들어가 있는 크기 보다 버퍼의 크기가 더 크면
                queue.add(num);
            }
        }
        if(queue.isEmpty()) { // 비어있으면 empty로 출력
            System.out.print("empty");
        }
        else{
            for (int i : queue){ // queue에 들어가 있는 숫자들 순서대로 출력
                sb.append(i+" ");
            }
            System.out.print(sb);
        }
    }
}
