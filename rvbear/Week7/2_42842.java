class Solution {
    public int[] solution(int brown, int yellow) {
        int area = brown + yellow;            // 넓이

        int x = 0, y = 3;                     // 가로, 세로의 초깃값
        for(; y < area / 2; y++) {            
            x = area / y;                     // 가로의 길이 구하기
            
            if(x * y != area) continue;       // 가로와 세로를 곱해서 넓이가 나오지 않는다면 continue
            
            // brown은 테두리 1줄만이므로 yellow는 가로와 세로 각각 2을 빼준 뒤 구한 넓이
            // 위에서 구한 넓이와 yellow를 빼줬을 때 brown이라면 반복문 빠져나옴
            if((x-2) * (y-2) == yellow && (x*y - yellow) == brown) break;
        }
        
        return new int[] {x, y};
    }
}
