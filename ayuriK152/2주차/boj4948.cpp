#include <iostream>
#include <string>
using namespace std;

bool isNormal[246913];

int main() {
	isNormal[1] = true;
	for (int i = 2; i < 246913; i++)		// 에라테네소스의 채
		if (!isNormal[i])
			for (int j = i * 2; j < 246913; j += i)
				isNormal[j] = true;

	string result = "";			// 결과 출력용 문자열
	while (true) {
		int n;
		cin >> n;
		if (n == 0)				// 무한 루프 종료조건
			break;
		int count = 0;			// 소수 개수 카운트, n < x <= 2n 이니까 n + 1부터 시작해야함
		for (int i = n + 1; i <= n * 2; i++)
			if (!isNormal[i])
				count++;
		result.append(to_string(count));
		result.append("\n");
	}
	cout << result;
	return 0;
}