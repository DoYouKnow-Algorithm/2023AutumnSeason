#include <iostream>
#include <algorithm>
using namespace std;

int main() {
	int n;
	cin >> n;

	int tips[100000];
	for (int i = 0; i < n; i++) {
		cin >> tips[i];
	}
	
	sort(tips, tips + n, [](int a, int b) { return a > b; });		// �������� ����, ���ٽ����� �������� ����
	long total = 0;					// �� ���� ��, �ִ밪�� ����غ��� 50���� �����µ� int������ ����� ������ long�� �����
	for (int i = 0; i < n; i++) {
		int calc = tips[i] - i;				// ������ ��� ���� ���� ���� ���ϱ�
		total += calc > 0 ? calc : 0;
	}

	cout << total;

	return 0;
}