import java.util.*;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        Map<String, Integer> map = new TreeMap<>();
        for(String record : records) {
            String[] s_record = record.split(" ");
            String[] s_time = s_record[0].split(":");
            int time = (s_record[2].equals("IN") ? -1 : 1) * (Integer.parseInt(s_time[0])*60 + Integer.parseInt(s_time[1]));
            
            map.put(s_record[1], map.getOrDefault(s_record[1], 0) + time);
        }
        
        int i = 0, lasttime = 1439;
        int[] answer = new int[map.size()];
        for(String carnum : map.keySet()) {
            int time = map.get(carnum);
            time = time <= 0 ? time + lasttime : time;
            double basetime = time - fees[0] < 0 ? 0 : time - fees[0];
            int price = fees[1] + (int)Math.ceil(basetime/fees[2]) * fees[3];
            answer[i++] = price;
        }
        
        return answer;
    }
}