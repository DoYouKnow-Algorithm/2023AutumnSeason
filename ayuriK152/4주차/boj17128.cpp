#include <iostream>
#include <string>
using namespace std;

int main() {
	int cows[200000];
	int sums[200000];
	int n, q;
	cin >> n >> q;
	for (int i = 0; i < n; i++)
		cin >> cows[i];
	int sum = 0;
	for (int i = 0; i < n; i++) {		// 4마리씩 끊어서 곱한 값 저장 및 전체 합에 추가
		sums[i] = cows[i] * cows[(i + 1) % n] * cows[(i + 2) % n] * cows[(i + 3) % n];
		sum += sums[i];
	}

	string result = "";
	for (int i = 0; i < q; i++) {
		int a;
		cin >> a;
		for (int j = a - 4; j < a; j++) {		// 부호가 바뀐 소가 포함된 곱한 값은 부호 바꾸고 전체 합에 변동사항 반영
			int index = j < 0 ? n + j : j;
			sums[index] *= -1;
			sum += sums[index] * 2;
		}
		result.append(to_string(sum));
		result.append("\n");
	}
	cout << result;
	return 0;
}