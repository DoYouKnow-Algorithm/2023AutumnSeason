import java.util.*;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        int year = Integer.parseInt(today.substring(0, 4));    // 연도
        int month = Integer.parseInt(today.substring(5, 7));   // 월
        int day = Integer.parseInt(today.substring(8));        // 일
        int count = year*12*28 + month*28 + day;               // 일로 계산
        
        List<Integer> list = new ArrayList<>();
        for(int i = 0; i < privacies.length; i++) {
            for(String term : terms) {                          // 개인정보 별
                if(term.charAt(0) == privacies[i].charAt(11)) { // 해당 조건이 성립할 경우
                    String[] arr = term.split(" ");
                    int period = Integer.parseInt(arr[1]) * 28; // 기간을 추출
                    year = Integer.parseInt(privacies[i].substring(0, 4));      // 연도
                    month = Integer.parseInt(privacies[i].substring(5, 7));     // 월
                    day = Integer.parseInt(privacies[i].substring(8, 10));      // 일
                    int temp = year*12*28 + month*28 + day;                     // 일로 계산
                    if(temp + period <= count) {                // 비교하여 지워야한다면
                        list.add(i);                            // 배열에 저장
                    }
                }
            }
        }
        
        int[] answer = new int[list.size()];
        int index = 0;
        for(int i : list) {
            answer[index++] = i+1;
        }
        return answer;
    }
}
