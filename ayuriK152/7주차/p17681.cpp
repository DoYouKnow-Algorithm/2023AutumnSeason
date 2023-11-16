#include <string>
#include <vector>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    for (int i = 0; i < n; i++) {
        string temp = "";       // answer 리스트에 매 회차 대입할 결과값
        int current = 1 << n - 1;       // 2의 n - 1승 시프트연산
        for (int j = 0; j < n; j++) {
            if ((arr1[i] & current) == current || (arr2[i] & current) == current)       // and연산하고 현재 2의 제곱수랑 하나라도 같으면 벽
                temp.append("#");
            else
                temp.append(" ");
            current = current >> 1;         // 시프트 연산으로 나누기2
        }
        answer.push_back(temp);
    }
    return answer;
}