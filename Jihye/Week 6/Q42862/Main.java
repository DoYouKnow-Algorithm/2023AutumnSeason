import java.util.Arrays;
class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        Arrays.sort(lost);
        Arrays.sort(reserve);
        int answer = n - lost.length;
        for(int i=0; i<reserve.length; i++){
            for(int j=0; j<lost.length; j++){
                if(reserve[i]==lost[j]){ // 여벌옷을 가져온 학생과 도난당한 학생이 동일할 경우
                    lost[j]=0;
                    reserve[i]=0;
                    answer++;
                    break;

                }
            }
        }
        for(int i=0; i<reserve.length; i++){
            if(reserve[i] != 0){ // 여벌옷 가져온 학생이 도난당한 것이 아니면
                for(int j=0; j<lost.length; j++){
                    if(lost[j] != 0 && Math.abs(reserve[i]-lost[j])==1){ // 앞뒤에 있는 학생이라면
                        lost[j]=0;
                        answer++;
                        break;
                    }
                }
            }
        }
        return answer;
    }
}