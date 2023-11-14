#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> solution(vector<string> strings, int n) {
    vector<string> answer;
    sort(strings.begin(), strings.end());
    while (strings.size() > 0) {
        string temp = strings[0];
        int tempIdx = 0;
        for (int i = 1; i < strings.size(); i++) {
            if (temp[n] > strings[i][n]) {
                temp = strings[i];
                tempIdx = i;
            }
        }
        answer.push_back(temp);
        strings.erase(strings.begin() + tempIdx);
    }
    return answer;
}