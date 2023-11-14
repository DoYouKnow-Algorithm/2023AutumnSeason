#include <string>
#include <vector>

using namespace std;

int solution(string s) {
    int answer = 0;
    vector<string> nums = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
    string tempStr = "";
    for (int i = 0; i < s.length(); i++) {
        int temp = (int)s[i] - 48;
        if (temp >= 0 && temp <= 9) {
            answer *= 10;
            answer += temp;
        }
        else {
            tempStr += s[i];
            for (int i = 0; i < 10; i++) {
                if (nums[i] == tempStr) {
                    tempStr = "";
                    answer *= 10;
                    answer += i;
                }
            }
        }
    }
    return answer;
}