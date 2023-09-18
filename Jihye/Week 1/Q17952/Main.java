

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine()); // 몇 분인지 입력 받기
        Stack<Tasks> task = new Stack<>(); // 스택 생성
        int ans = 0;
        for(int i=0; i<n; i++){
            st = new StringTokenizer(br.readLine());

            if(st.nextToken().charAt(0) == '1'){ // 과제가 주어졌다면 과제 정보 입력 받기
                int score = Integer.parseInt(st.nextToken()); // 만점
                int minute = Integer.parseInt(st.nextToken()); // 걸리는 시간
                if(minute == 1){ // 1분만에 끝나면 다음 과제 전에 무조건 끝나기 때문에 점수 더해주기
                    ans += score;
                }
                else { // 1분안에 끝나는 것이 아니라면
                    task.push(new Tasks(score, minute - 1)); // 시간만 -1하고 push
                }
            }
            else if(!task.isEmpty()){ // 과제가 주어지지 않았으면
                Tasks temp = task.pop();
                temp.minute--; // 0이기 때문에 위 과제를 이어서 할 수 있기 때문에 -1
                if(temp.minute == 0){ // 과제가 끝나면
                    ans += temp.score; // 점수 더해주기
                }
                else{
                    task.push(temp);
                }
            }
        }
        sb.append(ans).append("\n");
        System.out.println(sb.toString());

    }
}

class Tasks{
    int score;
    int minute;
    public Tasks(){

    }
    public Tasks(int score, int minute){
        this.score = score;
        this.minute = minute;
    }

}
