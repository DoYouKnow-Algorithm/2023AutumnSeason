import java.util.*;

class Solution {
    public String solution(String[] survey, int[] choices) {
        Map<Character, Integer> map = new HashMap<>();
        
        for(int i = 0; i < choices.length; i++) {
            int value = choices[i];
            if(value > 0 && value < 4) {
                char c = survey[i].charAt(0);
                map.put(c, map.getOrDefault(c, 0) + 4 - value);
            } else if(value > 4 && value < 8) {
                char c = survey[i].charAt(1);
                map.put(c, map.getOrDefault(c, 0) + value - 4);
            }
        }
        
        String answer = "";
        answer += map.getOrDefault('R', 0) >= map.getOrDefault('T', 0) ? 'R' : 'T';
        answer += map.getOrDefault('C', 0) >= map.getOrDefault('F', 0) ? 'C' : 'F';
        answer += map.getOrDefault('J', 0) >= map.getOrDefault('M', 0) ? 'J' : 'M';
        answer += map.getOrDefault('A', 0) >= map.getOrDefault('N', 0) ? 'A' : 'N';
        return answer;
    }
}