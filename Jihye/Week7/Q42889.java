import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {
    public int[] solution(int n, int[] stages) {
        int[] answer = new int[n];
        List<Info> infos = new ArrayList<>(n);
        int[] arr = new int[n+2];
        for(int stage : stages){ // 각 스테이지에 몇명이 도전 중인지 넣기
            arr[stage]++;
        }
        int total = stages.length;
        
        for(int i=1; i<n+1; i++){
            if(total != 0){
                infos.add(new Info((double) arr[i]/total, i)); // 실패율 계산
                total -= arr[i];
            }
            else{
                infos.add(new Info(0.0, i));
            }
        }
        Collections.sort(infos);
        
        for(int i=0; i<n; i++){
            answer[i] = infos.get(i).index;
        }
        return answer;
    }
    private static class Info implements Comparable<Info>{
        double value;
        int index;
        
        public Info(double value, int index){
            this.value = value;
            this.index = index;
        }
        
        @Override
        public int compareTo(Info o){
            if(this.value == o.value){
                return this.index - o.index; // index 기준으로 오름차순 정렬
            }
            // 내림차순으로 비교해서 정렬, value가 더 큰 객체가 먼저 정렬
            return (-1) * Double.compare(this.value, o.value);
        }
    }
    
}
