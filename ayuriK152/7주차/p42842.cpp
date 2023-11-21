#include <string>
#include <vector>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    int x = 1;      // x �⺻ 1 ����, ���ΰ� 1�̴ϱ� ���δ� yellow
    int y = yellow;
    while (true) {
        if (brown == (x + y) * 2 + 4) {     // ���ϴ� ���� ���̰� ���� yellow ���̶� �´��� Ȯ��, ������ answer�� �߰�
            answer.push_back((x > y ? x : y) + 2);
            answer.push_back((x > y ? y : x) + 2);
            break;
        }
        while (true) {      // �� �ȳ��� ��쿣 x�� �÷����鼭 ���� �������� y�� ���ϱ�
            x++;
            if (yellow % x == 0) {
                y = yellow / x;
                break;
            }
        }
    }
    return answer;
}