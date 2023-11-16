#include <string>
#include <vector>
#include <cmath>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    for (int i = 0; i < n; i++) {
        string temp = "";   // answer 리스트에 추가될 한 줄의 결과값
        for (int j = n - 1; j >= 0; j--) {
            int current = pow(2, j);        // 매 회 비교할 2의 제곱수
            if ((arr1[i] & current) == current || (arr2[i] & current) == current)       // and연산 후 제곱수와 비교해서 참값이면 벽
                temp.append("#");
            else
                temp.append(" ");
        }
        answer.push_back(temp);
    }
    return answer;
}