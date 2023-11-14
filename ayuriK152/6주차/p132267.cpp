class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        int saved = 0;
        while (n + saved > a - 1) {
            n += saved;
            saved = n % a;
            n = n / a * b;
            answer += n;
        }
        return answer;
    }
}