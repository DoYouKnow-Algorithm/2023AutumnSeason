#include <iostream>
#include <string>
using namespace std;

bool isNormal[246913];

int main() {
	isNormal[1] = true;
	for (int i = 2; i < 246913; i++)		// �����׳׼ҽ��� ä
		if (!isNormal[i])
			for (int j = i * 2; j < 246913; j += i)
				isNormal[j] = true;

	string result = "";			// ��� ��¿� ���ڿ�
	while (true) {
		int n;
		cin >> n;
		if (n == 0)				// ���� ���� ��������
			break;
		int count = 0;			// �Ҽ� ���� ī��Ʈ, n < x <= 2n �̴ϱ� n + 1���� �����ؾ���
		for (int i = n + 1; i <= n * 2; i++)
			if (!isNormal[i])
				count++;
		result.append(to_string(count));
		result.append("\n");
	}
	cout << result;
	return 0;
}