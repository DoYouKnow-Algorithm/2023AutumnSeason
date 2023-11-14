import java.util.*;
class Solution {
    public int solution(int storey) {
        int answer = 0;
        String s = String.valueOf(storey);
        int[] num = new int[s.length()];

        for(int i=0; i<s.length(); i++){ // 각 자릿수마다 배열에 넣기
            num[i] = s.charAt(i)-'0';
        }
        for(int i=s.length()-1; i>=0; i--){
            int index = num[i];

            if(index<=4){ // 4보다 작으면 갯수만큼 + 가능
                answer += index;
            }
            else if(index>=6){ // 6보다 크면 더 큰 수에서 - 하는게 최솟값
                index = 10-index;
                answer+= index;
                if(i>0){
                    num[i-1]++;
                }
                else{
                    answer+=1;
                    break;
                }
            }
            else{ // 5인 경우
                if(i>0){
                    if(num[i-1]>=5){ // 올려야 최소
                        answer+=5;
                        num[i-1]++;
                    }
                    else{ // 내려야 최소
                        answer += 5;
                    }
                }
                else{
                    answer+= 5;
                    break;
                }
            }

        }
        return answer;
    }
}