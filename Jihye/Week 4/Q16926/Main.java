

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int n, m, r;
    static int min;
    static int[][] map;
    static int[] dx = {0, 1, 0, -1}; // 왼쪽, 위, 오른쪽, 아래
    static int[] dy = {1, 0, -1, 0};
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken()); // 행
        m = Integer.parseInt(st.nextToken()); // 열
        r = Integer.parseInt(st.nextToken()); // 회전 횟수

        map = new int[n][m];
        for(int i=0; i<n; i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0; j<m; j++){
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        min = Math.min(n,m); // 행, 열 중 더 작은 거
        for(int i=1; i<=r; i++){ // 횟수만큼 회전시키기
            turn();
        }

        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                System.out.print(map[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();

    }

    static void turn(){ // 회전시키는 메소드
        for(int k =0; k<min/2; k++){ // 회전 시킬 그룹 갯수 구하기
            int x = k;
            int y = k;

            int temp = map[x][y]; // 마지막에 넣을 값
            int index =  0;
            while(index < 4){ // 왼, 위, 오, 아래 순서대로 넣기 반복
                int nx = x + dx[index];
                int ny = y + dy[index];

                if(nx<n-k && ny<m-k && nx>=k && ny >= k){ // 범위 안이라면
                    map[x][y] = map[nx][ny];
                    x = nx;
                    y = ny;
                }
                else{ // 범위를 벗어났으면 다음 방향으로 넘어감
                    index ++;
                }
            }
            map[k+1][k] = temp; // 마지막에 넣으려고 빼둔 값 넣어줌
        }
    }
}
