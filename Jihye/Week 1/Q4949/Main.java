

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String s;

        while(true){
            s = br.readLine();
            if(s.equals(".")) break; // 온점 하나만 있을 때 종료
            sb.append(solve(s)).append('\n');
        }
        System.out.println(sb);
    }

    public static String solve(String s){
        char[] stack = new char[s.length()];
        int num = 0;

        for(char bk : s.toCharArray()) {
            if(bk == '(' || bk == '['){ //여는 괄호인 경우 배열에 저장하고 num +1
                stack[num] = bk;
                num++;
            }
            // 닫는 소괄호일 떄
            else if(bk == ')'){
                if(num ==0 || stack[num-1] != '('){ // 매칭이 되는 것이 없다면
                    return "no";
                }
                else num--;
            }
            else if(bk ==']'){ //닫는 대괄호일 떄
                if(num==0 || stack[num-1] != '['){// 매칭이 되는 것이 없다면
                    return "no";
                }
                else num --;
            }
        }
        if(num != 0){ // 만약 짝이 맞는 경우 +1 -1 돼서 0이어야한다
            return "no";
        }
        else return "yes";
    }
}
