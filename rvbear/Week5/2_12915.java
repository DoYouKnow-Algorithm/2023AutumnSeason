import java.util.*;

class Solution {
    public String[] solution(String[] arr, int n) {
        String[] answer = new String[arr.length];
        List<String> list = new ArrayList<>();
        for(int i = 0; i < arr.length; i++) {
            list.add("" + arr[i].charAt(n) + arr[i]);
        }
        Collections.sort(list);
        
        for(int i = 0; i < arr.length; i++) {
            answer[i] = list.get(i).substring(1);
        }
        return answer;
    }
}