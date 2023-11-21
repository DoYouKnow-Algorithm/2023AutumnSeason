#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(int N, vector<int> stages) {
    vector<int> answer;
    sort(stages.begin(), stages.end());     // �÷��̾� ��ġ �������� ����
    vector<pair<int, float>> diff;          // ������ ����� �迭, �ε����� ������ ���� ����

    for (int i = 0; i < N; i++) {   // N���� ���������� ���� �ݺ���
        float a = stages.size();        // �и�, 0�̸� �������ϱ� ����ó��
        if (a == 0) {
            diff.push_back({ i + 1, 0 });
            continue;
        }
        float b = 0;                // ����
        for (int j = 0; j < stages.size(); j++) {   // �÷��̾� ��ġ üũ
            if (stages[j] == i + 1) {       // ���� ���������� ��ġ�ϸ� ���� ���� �� �迭���� ����
                b++;
                j--;
                stages.erase(stages.begin());
            }
            else        // �ٸ��� ������ ���� ��ġ üũ ����
                break;
        }
        diff.push_back({ i + 1, b / a });       // ���� �������� ������ ����
    }

    sort(diff.begin(), diff.end(), [](pair<int, float> a, pair<int, float> b) {     // ������ �������� ����, ������ ������ �������� �������� ����
        if (a.second == b.second)
            return a.first < b.first;
        return a.second > b.second;
        });

    for (int i = 0; i < N; i++) {
        answer.push_back(diff[i].first);        // ���İ� ���� answer �迭�� ����
    }
    return answer;
}