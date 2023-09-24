import java.io.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

public class Day2_Q2023 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());

        //첫번째 자리에 올 수 있는 수들 = 소수
        ArrayList<Integer> answer=new ArrayList<>(Arrays.asList(2,3,5,7));
        //나머지 자리에 올 수 있는 수들 = 5를 제외한 홀수
        int arr2[]={1,3,7,9};
        //빈 배열
        ArrayList<Integer> arr= new ArrayList<>();

        int len=1;  //몇자리인지 판별하기 위해
        while(N>len){
            //arr에 answer 내용 복사 후 answer 지움
            arr.addAll(answer);
            answer.clear();
            //arr에 있는 값들로만 for문 돌림(arr에는 소수만 있음)
            for(int i=0;i<arr.size();i++){
                int temp=arr.get(i);    //temp에 arr값을 하나씩 저장
                for(int j=0;j<4;j++){   //5를 제외한 홀수 밖에 못 옴
                    if(IsPrime(temp*10+arr2[j])){   //소수라면
                        answer.add(temp*10+arr2[j]);    //answer에 저장
                    }
                }
            }
            arr.clear();    //arr배열 지움
            len++;  //자리수 +1
        }
        //answer에 들어있는 값들 출력
        Iterator iter = answer.iterator();
        while(iter.hasNext()){
            bw.write(String.valueOf(iter.next()+"\n"));
        }
        bw.close();
    }
    static boolean IsPrime(int number){
        //소수판별 -> number의 루트를 씌운 값까지만 확인하면 됨
        //ex) 80 루트 씌우면 8.xx -> 8까지만 확인
        for(int i=2;i*i<number;i++){
            if(number%i==0) return false;
        }
        return true;
    }

}
