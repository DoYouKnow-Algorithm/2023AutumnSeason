import java.util.*;
class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];

        for(int i=0; i<n; i++){
            answer[i] = Integer.toBinaryString(arr1[i] | arr2[i]); // 10진수 -> 2진수 변환
            answer[i] = answer[i].replace('0', ' '); // 0은 공백으로 대체
            answer[i] = answer[i].replace('1', '#'); // 1은 #으로 대체
            while(answer[i].length() < n){
                answer[i] = ' '+ answer[i];
            }

        }
        return answer;
    }
}
