import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] student = new int[n+1];
        Arrays.fill(student, 1);
        
        for(int i : lost) {
            student[i]--;
        }
        for(int i : reserve) {
            student[i]++;
        }
        
        for(int i = 1; i <= n; i++) {
            if(student[i] == 2) {
                if(i-1 >= 1 && student[i-1] == 0) {
                    student[i-1]++;
                    student[i]--;
                } else if(i+1 <= n && student[i+1] == 0) {
                    student[i+1]++;
                    student[i]--;
                }
            }
        }
        
        return (int)Arrays.stream(student).filter(p -> p >= 1).count() - 1;
    }
}