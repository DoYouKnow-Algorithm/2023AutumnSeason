#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(int N, vector<int> stages) {
    vector<int> answer;
    sort(stages.begin(), stages.end());     // 플레이어 위치 오름차순 정렬
    vector<pair<int, float>> diff;          // 오차율 저장용 배열, 인덱스랑 오차율 같이 저장

    for (int i = 0; i < N; i++) {   // N개의 스테이지에 대해 반복문
        float a = stages.size();        // 분모, 0이면 오류나니까 예외처리
        if (a == 0) {
            diff.push_back({ i + 1, 0 });
            continue;
        }
        float b = 0;                // 분자
        for (int j = 0; j < stages.size(); j++) {   // 플레이어 위치 체크
            if (stages[j] == i + 1) {       // 현재 스테이지와 일치하면 분자 증가 후 배열에서 삭제
                b++;
                j--;
                stages.erase(stages.begin());
            }
            else        // 다른값 나오는 순간 위치 체크 종료
                break;
        }
        diff.push_back({ i + 1, b / a });       // 현재 스테이지 오차율 저장
    }

    sort(diff.begin(), diff.end(), [](pair<int, float> a, pair<int, float> b) {     // 오차율 내림차순 정렬, 오차율 같으면 스테이지 오름차순 정렬
        if (a.second == b.second)
            return a.first < b.first;
        return a.second > b.second;
        });

    for (int i = 0; i < N; i++) {
        answer.push_back(diff[i].first);        // 정렬값 토대로 answer 배열에 저장
    }
    return answer;
}