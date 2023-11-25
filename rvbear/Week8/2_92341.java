import java.util.*;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        Map<String, Integer> map = new TreeMap<>();            // 이진 탐색 트리, key 값이 작은 순서대로 자동 정렬
        for(String record : records) {
            String[] s_record = record.split(" ");
            String[] s_time = s_record[0].split(":");
            // IN = 9:30, OUT = 11:30 일 때, 11*60+30 - 9*60+30를 해줘야 내가 주차한 시간이 나옴 따라서 IN일 때 -1을 OUT일 때 1을 곱해줌
            int time = (s_record[2].equals("IN") ? -1 : 1) * (Integer.parseInt(s_time[0])*60 + Integer.parseInt(s_time[1]));

            // 값이 있다면 불러오고 없다면 0을 입력한 뒤 위에서 계산한 time과 더해줌
            map.put(s_record[1], map.getOrDefault(s_record[1], 0) + time);
        }
        
        int i = 0, lasttime = 1439;        // 마지막까지 차가 안 나갔다면 23:59분에 출차로 생각하기 때문에 23*60 + 59 = 1439
        int[] answer = new int[map.size()];
        for(String carnum : map.keySet()) {
            int time = map.get(carnum);
            // 값이 음수라면 출차되지 않았다는 뜻이므로 lasttime 더해줌, 아니라면 time
            time = time <= 0 ? time + lasttime : time;
            // 기본 시간을 빼줬을 때 음수라면 기본 시간 안에 나갔다는 뜻이므로 0, 아니라면 해당 시간 구해줌
            double basetime = time - fees[0] < 0 ? 0 : time - fees[0];
            // Math.ceil 함수를 통해 나눠준 값을 올려줌
            int price = fees[1] + (int)Math.ceil(basetime/fees[2]) * fees[3];
            answer[i++] = price;
        }
        
        return answer;
    }
}
