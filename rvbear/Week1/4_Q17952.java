import java.io.*;
import java.util.*;

class Homework {            // 과제 클래스
    int score, time;        // 점수, 소요시간

    public Homework(int _score, int _time) {        // 생성자
        score = _score; time = _time;
    }

    public void setTime(int _time) {            // 시간 설정
        time = _time;
    }
}
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());                // 이번 학기의 총 시간
        Stack<Homework> hw = new Stack<>();                     // 과제 저장 스택
        int total = 0;                                          // 최종 점수
        for(int i = 0; i < n; i++) {
            StringTokenizer stk = new StringTokenizer(br.readLine());
            if(Integer.parseInt(stk.nextToken()) == 1) {
                int score = Integer.parseInt(stk.nextToken());
                int time = Integer.parseInt(stk.nextToken());
                if(time == 1) {                                 // 걸리는 시간이 1분이라면 배열에 저장하는 것 없이 바로 과제 종료
                    total += score;
                } else {                                        // 1분 초과라면 스택에 저장
                    hw.add(new Homework(score, time-1));
                }
            } else {
                if(!hw.isEmpty()) {                             // 배열에 값이 있을 경우
                    hw.peek().setTime(hw.peek().time-1);        // 맨 앞에 저장된 소요시간 수정
                    if(hw.peek().time == 0) {                   // 과제를 다 했을 경우 점수를 추가해주고 배열에서 제거
                        total += hw.peek().score;
                        hw.pop();
                    }
                }
            }
        }

        System.out.println(total);
        br.close();
    }
}