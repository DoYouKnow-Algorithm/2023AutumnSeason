
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()); // 탑의 개수
        StringTokenizer st = new StringTokenizer(br.readLine());

        Stack<int[]> stack = new Stack<>(); // 탑 번호를 저장할 스택
        for(int i = 1; i<=n; i++){
            int num = Integer.parseInt(st.nextToken()); // 탑의 높이 입력 받기
            while(!stack.isEmpty()){ // 스택이 비어있지 않다면
                if(stack.peek()[1] >= num){ // 레이서를 발사한 탑보다 높이가 높다면
                    System.out.print(stack.peek()[0]+" "); //출력
                    break;
                }
                stack.pop();
            }
            if(stack.isEmpty()){ // 레이저를 발사한 탑보다 높은 탑이 없다면
                System.out.print("0 "); // 0 출력
            }
            stack.push(new int[] {i, num}); //초기화
        }
    }
}
