import java.util.Arrays;
import java.util.HashMap;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        HashMap<String, String> cars = new HashMap<String, String>(); //주차시간
        HashMap<String, Integer> result = new HashMap<String, Integer>(); //주차요금
        for(int i=0; i<records.length; i++){
            String temp[] = records[i].split(" ");
            if(temp[2].equals("IN")){ //IN인 경우 차 정보 넣어줌
                cars.put(temp[1], temp[0]);
            }
            else{ // OUT일 때 해당 차가 들어간 시간 기록 가져옴
                String timeIn[] = cars.get(temp[1]).split(":");
                cars.remove(temp[1]); // cars 맵에 있는 해당 값 초기화
                String timeOut[] = temp[0].split(":");
                int min = 0;
                min += (Integer.parseInt(timeOut[0]) - Integer.parseInt(timeIn[0])) * 60; //시간을 분으로 환산
                min += (Integer.parseInt(timeOut[1]) - Integer.parseInt(timeIn[1]));
                if(result.containsKey(temp[1])){ // 계산된 분을 result에 누적으로 업데이트
                    result.replace(temp[1], result.get(temp[1]) + min);
                }
                else{ // 앞에 저장된 값이 없다면
                    result.put(temp[1], min);
                }
                
            }
        }
        
        for(String s : cars.keySet()){ // OUT 기록 없는 차들 대상
            String[] timeIn = cars.get(s).split(":");
            int min=0;
            min += (23 - Integer.parseInt(timeIn[0])) * 60;
            min += 59 - Integer.parseInt(timeIn[1]); 
            if(result.containsKey(s)){
                result.replace(s, result.get(s) + min);
            }
            else{
                result.put(s, min);
            }
        }
        Object[] sortKey = result.keySet().toArray(); // 차 번호 오름차순 정렬
        Arrays.sort(sortKey);
        int[] answer = new int[sortKey.length];
        for(int i=0; i < sortKey.length; i++){
            int totalSum = result.get(sortKey[i]);
            int fee = 0;
            if(totalSum >= fees[0]){ // 180분 이하일 때
                totalSum -= fees[0];
                fee = fees[1];
            }
            else{
                totalSum = 0;
                fee = fees[1];
            }
            if(totalSum > 0){ // 기본금 계산 후 남은 시간 계산
                if(totalSum % fees[2] ==0){ // 10분으로 나누어 떨어지면
                    fee += totalSum / fees[2] * fees[3] ; 
                }
                else{
                    fee += (totalSum / fees[2] +1) * fees[3]; // 나누어떨어지지 않으므로 올림
                }
            }
            answer[i] = fee;
        }
        return answer;
    }
}
