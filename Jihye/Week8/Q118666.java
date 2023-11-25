import java.util.*;
class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        String[][] indicator = { // 지표끼리 map에 넣기
            {"R", "T"},
            {"C", "F"},
            {"J", "M"},
            {"A", "N"}
        };
        int[] score = {3, 2, 1, 0, 1, 2, 3}; // 점수 순서대로 배열에 넣기
        Map<String, Integer> map = new HashMap<>();
        
        for(int i=0; i<survey.length; i++){
            String s = survey[i];
            if(choices[i] < 4){  // 앞 성격유형
                String temp = String.valueOf(s.charAt(0));
                map.put(temp, map.getOrDefault(temp, 0)+score[choices[i]-1]); // 해당하는 앞 성격 유형에 해당 점수 넣기
            }
            else if(choices[i]>4){ // 뒷 성격유형
                String temp = String.valueOf(s.charAt(1));
                map.put(temp, map.getOrDefault(temp, 0)+score[choices[i]-1]); // 해당하는 뒷 성격 유형에 해당 점수 넣기
            }
        }
        for(int i=0; i<4; i++){
            if(map.getOrDefault(indicator[i][0], 0) >= map.getOrDefault(indicator[i][1], 0)){ // 앞 뒤 비교
                answer += indicator[i][0];
            }
            else {
                answer+= indicator[i][1];
            }
        }
        return answer;
    }
}
