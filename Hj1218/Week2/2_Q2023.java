import java.util.Scanner;

public class Main {
    static StringBuilder sb = new StringBuilder();
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        check(0,n);
        System.out.println(sb);
    }
    static boolean prime(int a){ //소수 판별
        if(a<2){ //0 or 1인 경우 소수 x
            return false;
        }
        for(int i=2;i<=a/2;i++){
            if(a%i==0){ //나누어지는 경우 소수 x
                return false;
            }
        }
        return true;
    }
    static void check(int num, int nn){
        if(nn==0){ //n자리 수가 만들어지면
            sb.append(num).append("\n");
        }
        for(int i=0;i<10;i++){ //ex) num=1인 경우 m=10+(0~9)
            int m = num*10+i;
            if(prime(m)){ //m이 소수인 경우
                check(m,nn-1); //재귀 (필요한 자리수 - 1)
            }
        }
    }
}