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
		if (d == -1)
			break;
		if (d == 0)
			routerQueue.pop();
		else {
			if (routerQueue.size() < n)
				routerQueue.push(d);
		}
	}

	string result = "";
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