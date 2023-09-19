#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
	int n;
	cin >> n;
	queue<int> routerQueue;
	while (true) {
		int d;
		cin >> d;
		if (d == -1)		// 입력이 -1이면 종료
			break;
		if (d == 0)			// 입력이 0이면 하나 처리
			routerQueue.pop();
		else {
			if (routerQueue.size() < n)		// 입력받은 n보다 많이 들어오면 패킷 손실
				routerQueue.push(d);
		}
	}

	string result = "";			// 결과 출력용
	if (routerQueue.empty())
		result = "empty";
	else {
		for (int i = routerQueue.size(); i > 0; i--) {
			result.append(to_string(routerQueue.front()));
			result.append(" ");
			routerQueue.pop();
		}
	}

	cout << result << endl;
	return 0;
}