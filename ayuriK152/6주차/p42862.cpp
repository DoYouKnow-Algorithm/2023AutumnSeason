#include <string>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    int answer = n;
    sort(lost.begin(), lost.end());
    sort(reserve.begin(), reserve.end());
    for (int i = 0; i < reserve.size(); i++) {
        for (int j = 0; j < lost.size(); j++) {
            if (reserve[i] == lost[j]) {
                reserve.erase(reserve.begin() + i);
                lost.erase(lost.begin() + j);
                i--;
                break;
            }
        }
    }
    for (int i = 0; i < reserve.size(); i++) {
        for (int j = 0; j < lost.size(); j++) {
            if (abs(reserve[i] - lost[j]) == 1) {
                reserve.erase(reserve.begin() + i);
                lost.erase(lost.begin() + j);
                i--;
                break;
            }
        }
    }
    return answer - lost.size();
}