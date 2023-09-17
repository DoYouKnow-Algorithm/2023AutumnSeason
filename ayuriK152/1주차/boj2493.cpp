#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
	int n;
	cin >> n;
	int arr[500000];		// ���� ����� �迭
	vector<int> stack;		// ������ �ε��� ����� ����
	string result = "";		// ��� ��¿� string ����
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
		while (!stack.empty() && arr[stack.back()] < arr[i])		// ������ ��ų� �Է¹��� ���� ������ ū ���� ���� ������ pop
			stack.pop_back();
		if (!stack.empty())			// �ݺ����� �������Դµ�, 1. ������ ����� -> �� ���� ž�� ����, 2. ������ �Ⱥ���� -> ���� ������ �ε��� �ش� ž�� ������ ����
			result.append(to_string(stack.back() + 1) + " ");
		else
			result.append("0 ");
		stack.push_back(i);			// �� �ε��� ���ÿ� �����ϱ�
	}
	cout << result;
	return 0;
}