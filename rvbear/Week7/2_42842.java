class Solution {
    public int[] solution(int brown, int yellow) {
        int area = brown + yellow;

        int x = 0, y = 3;
        for(; y < area / 2; y++) {
            x = area / y;
            if(x * y != area) continue;
            int temp = (x-2) * (y-2);
            if(temp == yellow && (x*y - yellow) == brown) break;
        }
        
        return new int[] {x, y};
    }
}