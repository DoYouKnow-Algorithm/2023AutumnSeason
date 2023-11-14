class Solution {
    public int solution(int storey) {
        String num = String.valueOf(storey);
        int answer = 0;
        int[] arr = new int[num.length()];
        
        for(int i = 0; i < num.length(); i++) {
            arr[i] = num.charAt(i) - '0';
        }
        
        for(int i = num.length()-1; i >= 0; i--) {
            if(arr[i] > 5) {
                answer += 10 - arr[i];
                
                if(i == 0) answer++;
                else arr[i-1]++;
            } else if(arr[i] == 5 && i > 0 && arr[i-1] > 4) {
                answer += 5;
                arr[i-1]++;
            } else {
                answer += arr[i];
            }
        }
        
        return answer;
    }
}