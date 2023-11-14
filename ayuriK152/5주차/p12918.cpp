#include <string>
#include <vector>

using namespace std;

bool solution(string s) {
    bool answer = true;
    int len = s.length();
    if (len != 4 && len != 6)
        answer = false;
    else {
        for (int i = 0; i < len; i++) {
            int value = (int)s[i] - 48;
            if (value < 0 || value > 9) {
                answer = false;
                break;
            }
        }
    }
    return answer;
}