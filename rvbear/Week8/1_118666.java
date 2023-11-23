import java.util.*;

class Solution {
    public String solution(String[] survey, int[] choices) {
        Map<Character, Integer> map = new HashMap<>();            // HashMap
        
        for(int i = 0; i < choices.length; i++) {
            int value = choices[i];
            if(value > 0 && value < 4) {                          // 1~3까지 일 때
                char c = survey[i].charAt(0);                     // 앞의 유형을 선택
                map.put(c, map.getOrDefault(c, 0) + 4 - value);   // 해당 점수를 입력
            } else if(value > 4 && value < 8) {                   // 5~7까지 일 때
                char c = survey[i].charAt(1);                     // 뒤의 유형을 선택
                map.put(c, map.getOrDefault(c, 0) + value - 4);   // 해당 점수를 입력
            }
        }
        
        String answer = "";
        answer += map.getOrDefault('R', 0) >= map.getOrDefault('T', 0) ? 'R' : 'T';        // 값이 같거나 크다면 R, 아니라면 T
        answer += map.getOrDefault('C', 0) >= map.getOrDefault('F', 0) ? 'C' : 'F';        // 값이 같거나 크다면 C, 아니라면 F
        answer += map.getOrDefault('J', 0) >= map.getOrDefault('M', 0) ? 'J' : 'M';        // 값이 같거나 크다면 J, 아니라면 M
        answer += map.getOrDefault('A', 0) >= map.getOrDefault('N', 0) ? 'A' : 'N';        // 값이 같거나 크다면 A, 아니라면 N
        return answer;
    }
}
