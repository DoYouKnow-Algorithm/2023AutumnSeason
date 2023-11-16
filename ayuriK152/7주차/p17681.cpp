#include <string>
#include <vector>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    for (int i = 0; i < n; i++) {
        string temp = "";       // answer ����Ʈ�� �� ȸ�� ������ �����
        int current = 1 << n - 1;       // 2�� n - 1�� ����Ʈ����
        for (int j = 0; j < n; j++) {
            if ((arr1[i] & current) == current || (arr2[i] & current) == current)       // and�����ϰ� ���� 2�� �������� �ϳ��� ������ ��
                temp.append("#");
            else
                temp.append(" ");
            current = current >> 1;         // ����Ʈ �������� ������2
        }
        answer.push_back(temp);
    }
    return answer;
}