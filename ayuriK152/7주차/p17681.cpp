#include <string>
#include <vector>
#include <cmath>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    for (int i = 0; i < n; i++) {
        string temp = "";   // answer ����Ʈ�� �߰��� �� ���� �����
        for (int j = n - 1; j >= 0; j--) {
            int current = pow(2, j);        // �� ȸ ���� 2�� ������
            if ((arr1[i] & current) == current || (arr2[i] & current) == current)       // and���� �� �������� ���ؼ� �����̸� ��
                temp.append("#");
            else
                temp.append(" ");
        }
        answer.push_back(temp);
    }
    return answer;
}