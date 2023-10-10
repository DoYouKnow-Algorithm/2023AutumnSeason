import java.io.*;
import java.util.*;

public class Main {
    static int min_x, min_y, max_x, max_y;
    public static String cycle(int x, int y) {                        // 시계방향으로 회전
        if(min_x == x && min_y <= y && y < max_y) {                   
            y+=1;
        } else if(max_y == y && min_x <= x && x < max_x) {
            x+=1;
        } else if(max_x == x && min_y < y && y <= max_y) {
            y-=1;
        } else if(min_y == y && max_x >= x && min_x < x) {
            x-=1;
        }
        return x + " " + y;
    }
    public static String recycle(int x, int y) {                      // 반시계방향으로 회전
        if(min_y == y && min_x <= x && x < max_x) {
            x+=1;
        } else if(max_x == x && min_y <= y && y < max_y) {
            y+=1;
        } else if(max_y == y && min_x < x && x <= max_x) {
            x-=1;
        } else if(min_x == x && max_y >= y && min_y < y) {
            y-=1;
        }
        return x + " " + y;
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stk = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(stk.nextToken());      // 행
        int m = Integer.parseInt(stk.nextToken());      // 열
        int r = Integer.parseInt(stk.nextToken());      // 회전 수
        int[][] arr = new int[n][m], r_arr = new int[n][m];

        for(int i = 0; i < n; i++) {                    // 배열에 값을 저장
            stk = new StringTokenizer(br.readLine());
            for(int j = 0; j < m; j++) {
                arr[i][j] = Integer.parseInt(stk.nextToken());
            }
        }

        int group = Math.min(n, m) / 2;                 // 배열 속 돌리는 그룹의 횟수

        for(int i = 0; i < group; i++) {
            // 왼쪽 위 x, 왼쪽 위 y, 오른쪽 아래 x, 오른쪽 아래 y
            min_x = i; min_y = i; max_x = (n-1)-i; max_y = (m-1)-i;
            int x = i, y = i;
            for(int j = 0; j < r; j++) {                // 넣어야하는 부분을 구하기
                stk = new StringTokenizer(recycle(x, y));
                x = Integer.parseInt(stk.nextToken());
                y = Integer.parseInt(stk.nextToken());
            }
            int r_x = i, r_y = i;
            for(int j = 0; j < n*m; j++) {              // 해당 부분부터 하나하나 값을 넣어주기
                r_arr[x][y] = arr[r_x][r_y];
                stk = new StringTokenizer(cycle(r_x, r_y));
                r_x = Integer.parseInt(stk.nextToken());
                r_y = Integer.parseInt(stk.nextToken());
                stk = new StringTokenizer(cycle(x, y));
                x = Integer.parseInt(stk.nextToken());
                y = Integer.parseInt(stk.nextToken());
                if(r_x == i && r_y == i) {
                    break;
                }
            }
        }

        StringBuilder stb = new StringBuilder();        // 결과값을 StringBuilder에 저장
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                stb.append(r_arr[i][j]).append(" ");
            }
            stb.append("\n");
        }

        System.out.print(stb);
        br.close();
    }
}