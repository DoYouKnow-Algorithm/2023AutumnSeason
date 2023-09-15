import java.io.*;
import java.util.*;

class Top {         // 탑 클래스
    int num;        // 탑의 위치
    long high;      // 탑의 높이

    public Top(int _num, long _high) {
        num = _num; high = _high;
    }
}
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        Stack<Top> stack = new Stack<>();           // 탑을 저장할 스택 생성
        StringTokenizer stk = new StringTokenizer(br.readLine());
        
        stack.add(new Top(1, Long.parseLong(stk.nextToken())));     // 첫번째 값을 스택에 저장
        bw.write(String.valueOf(0) + " ");                          // 첫번째는 왼쪽에 탑이 없으므로 무조건 0
        for(int i = 1; i < n; i++) {
            long top = Long.parseLong(stk.nextToken());             // 높이를 입력받아
            while(stack.peek().high < top && stack.size() > 1) {    // 스택에 저장된 탑의 높이들과 비교
                stack.pop();        // stack의 크기가 1보다 크고 스택에 저장된 탑의 높이가 작을 경우 스택에 있는 탑을 pop
            }
            if(stack.peek().high < top) {       // 마지막으로 비교하여 스택에 저장된 탑의 높이가 입력받은 탑의 높이보다 작다면
                stack.pop();                    // pop을 해주고
                bw.write(String.valueOf(0) + " ");      // 0을 출력
            } else {                            // 아니라면
                bw.write(String.valueOf(stack.peek().num) + " ");       // 스택에 저장된 탑의 위치를 출력
            }
            stack.add(new Top(i+1, top));       // 탑을 스택에 저장
        }

        br.close(); bw.close();
    }
}