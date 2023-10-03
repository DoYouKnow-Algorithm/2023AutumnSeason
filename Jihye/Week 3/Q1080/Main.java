


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int n, m;
    static int[][] a, b;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        a = new int[n][m];
        b = new int[n][m];

        for(int i = 0; i<n; i++){ //a 행렬 입력 받기
            String str = br.readLine();
            for(int j = 0; j<m; j++){
                a[i][j] = str.charAt(j) - '0';
            }
        }

        for(int i = 0; i<n; i++){ //b 행렬 입력 받기
            String str = br.readLine();
            for(int j = 0; j<m; j++){
                b[i][j] = str.charAt(j) - '0';
            }
        }

        int count = 0;

        for(int i = 0; i< n-2; i++){ // 배열 범위가 넘어가지 않도록 n-2, m-2 까지만 돌림
            for(int j = 0; j< m -2; j++){
                if(a[i][j]!= b[i][j]){ // 두 배열 값이 다르다면 뒤집기
                    change(i,j);
                    count++;
                }
            }
        }
        int flag = 0;
        for(int i = 0; i<n; i++){ // a, b 배열이 같은지 확인
            for(int j = 0; j<m; j++) {
                if(a[i][j] == b[i][j]) flag ++; // 하나하나씩 확인
            }
        }
        if(flag == n*m){ // 모든 배열 값이 다 같다면
            System.out.println(count);
        }
        else{
            System.out.println(-1);
        }
    }

    // i, j 기준으로 3*3 크기만큼 뒤집기
    public static void change(int x, int y){
        for(int i = x; i<x+3; i++){
            for(int j = y; j<y+3; j++){
                a[i][j] = a[i][j] ^ 1; // (1,0) 이거나 (0,1) 일 때만 1 -> xor
            }
        }
    }
}
