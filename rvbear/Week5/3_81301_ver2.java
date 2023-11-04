import java.util.*;

class Solution {
    HashMap<String, String> map = new HashMap<>() {{
        put("zero", "0");
        put("one", "1");
        put("two", "2");
        put("three", "3");
        put("four", "4");
        put("five", "5");
        put("six", "6");
        put("seven", "7");
        put("eight", "8");
        put("nine", "9"); 
    }};
    public int solution(String s) {
        String answer = "";
        String temp = "";
        for(int i = 0; i < s.length(); i++) {
            if((s.charAt(i) - '0') < 10 && (s.charAt(i) - '0') >= 0) {
                if(!temp.equals("")) {
                    answer += map.get(temp);
                }
                answer += s.charAt(i);
                temp = "";
            } else {
                temp += s.charAt(i);
                if(map.containsKey(temp)) {
                    answer += map.get(temp);
                    temp = "";
                }
            }
        }
        return Integer.parseInt(answer);
    }
}