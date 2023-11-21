import java.util.*;

class Solution {
    public int[] solution(int N, int[] stages) {
        int n = stages.length;
        int[] arr = new int[N+2];
        for(int i : stages) {
            arr[i]++;
        }
        
        List<Stage> cal = new ArrayList<>();
        for(int i = 1; i <= N; i++) {
            double temp = (double)arr[i] / n;
            n -= arr[i];
            
            Stage s = new Stage(i, temp);
            cal.add(s);
        }
        
        Collections.sort(cal, Collections.reverseOrder());
        
        int[] answer = new int[N];
        for(int i = 0; i < N; i++) {
            answer[i] = cal.get(i).index;
        }
        return answer;
    }
    
    class Stage implements Comparable<Stage> {
        int index;
        double fail;
        
        public Stage(int _index, double _fail) {
            index = _index; fail = _fail;
        }
        
        @Override
        public int compareTo(Stage o) {
            return fail < o.fail ? -1 : (fail > o.fail ? 1 : 0);
        }
    }
}