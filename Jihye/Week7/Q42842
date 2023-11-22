import java.util.*;
class Solution {
    public int[] solution(int brown, int yellow) {
        int width = 0, height = 0; // 가로 길이, 세로 길이
        int area = brown + yellow; // 넓이
        boolean flag = false;

        while(flag != true){
            width++;

            for(height = 1; height <= width; height++){ // 가로 길이 >= 세로길이 이므로 세로길이는 가로 길이 이하까지만 비교
                // yellow는 brown에 둘러싸여있기 때문에
                // yellow의 가로와 세로 길이는 2씩 작다
                if(width * height == area && yellow == (width - 2) * (height - 2)){
                    flag = true;
                    break;
                }
            }
        }
        int[] answer = {width, height};
        return answer;
    }
}
