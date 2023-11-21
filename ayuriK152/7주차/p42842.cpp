#include <string>
#include <vector>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    int x = 1;      // x 기본 1 시작, 세로가 1이니까 가로는 yellow
    int y = yellow;
    while (true) {
        if (brown == (x + y) * 2 + 4) {     // 원하는 갈색 넓이가 지금 yellow 넓이랑 맞는지 확인, 맞으면 answer에 추가
            answer.push_back((x > y ? x : y) + 2);
            answer.push_back((x > y ? y : x) + 2);
            break;
        }
        while (true) {      // 답 안나온 경우엔 x값 올려가면서 나눠 떨어지는 y값 구하기
            x++;
            if (yellow % x == 0) {
                y = yellow / x;
                break;
            }
        }
    }
    return answer;
}