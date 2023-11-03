class Solution {
    public boolean solution(String s) {
        boolean answer = true;
        if(s.length() != 4 && s.length() != 6) {
            return false;
        }
        try {
            int num = Integer.parseInt(s);
        } catch(NumberFormatException e) {
                return false;
        }
        return answer;
    }
}
