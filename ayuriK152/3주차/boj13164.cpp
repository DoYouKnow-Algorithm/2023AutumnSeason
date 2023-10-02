#include <iostream>
#include <algorithm>
using namespace std;

long height[300000];
long cost[300000];

int main() {
	int n, k;
	cin >> n >> k;
	for (int i = 0; i < n; i++)
		cin >> height[i];
	for (int i = 1; i < n; i++)		// 주어진 원생들의 옆사람과의 키 차이를 저장
		cost[i] = height[i] - height[i - 1];

	sort(cost, cost + n);			// 키 차이 오림차순 정렬
	long result = 0;
	// 총 인원에서 만든 조 수를 빼면 그게 고려해야되는 키 차이의 수
	// 고려해야되는 키 차이 수만큼 정렬한 배열에서 값을 다 더해주면 됨
	for (int i = 0; i <= n - k; i++)
		result += cost[i];
	cout << result;
	return 0;
}