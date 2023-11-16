import java.util.*;

class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];        // 줄별로 저장할 배열
        
        for(int i = 0; i < n; i++) {
            // 2진수 16자리를 만듦, 비트 연산자를 사용하여 둘 중 하나라도 1이라면 1을 입력
            answer[i] = String.format("%16s", Integer.toBinaryString(arr1[i] | arr2[i]));
            answer[i] = answer[i].substring(answer[i].length() - n);        // 우리가 필요한 길이만큼 잘라줌
            answer[i] = answer[i].replaceAll("1", "#");                     // "1"을 "#"으로 변환
            answer[i] = answer[i].replaceAll("0", " ");                     // "0"을 " "으로 변환
        }
        
        return answer;
    }
}
