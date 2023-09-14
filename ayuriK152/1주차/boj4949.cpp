#include <iostream>
#include <string>
using namespace std;

int main()
{
	char queue[101];	// ����� �迭
	string result;		// ����� �����

	while (true) {
		string input;
		while (true) {		// �Է� ���� ������ ������ ���� ������ �Է¹ޱ�
			string temp;
			getline(cin, temp);
			input.append(temp);
			if (input[input.size() - 1] == '.')
				break;
		}
		if (input.size() == 1 && input[0] == '.')
			break;

		int index = 0;		// �迭�� ���� �ε��� ����� = (, [ ����
		bool isComplete = true;		// ��ȣ �Ѳ� �� ��������
		for (int i = 0; i < input.size(); i++) {
			if (input[i] == '(' || input[i] == '[')
				queue[index++] = input[i];		// (, [�� ������ �ϴ� �迭�� ����, index++
			else if (input[i] == ')') {
				if (index == 0) {
					isComplete = false;		// index ���� 0�ε� �Ѳ��� ������ �ٷ� ����
					break;
				}
				else if (queue[index - 1] != '(') {
					isComplete = false;		// �Ѳ��� ���Դµ� ���� �ƴϸ� �ٷ� ����
					break;
				}
				index--;		// �Ѳ� �������� �ε��� �� ����
			}
			else if (input[i] == ']') {		// ���� ����
				if (index == 0) {
					isComplete = false;
					break;
				}
				else if (queue[index - 1] != '[') {
					isComplete = false;
					break;
				}
				index--;
			}
		}

		if (isComplete && index == 0)		// �迭�� �ƹ��͵� �ȳ��Ұ�, �Ѳ��� �� �������� yes �ƴϸ� no
			result.append("yes\n");
		else
			result.append("no\n");
	}

	cout << result;
}