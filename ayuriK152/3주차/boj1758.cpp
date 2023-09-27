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
	
	sort(tips, tips + n, [](int a, int b) { return a > b; });		// 내림차순 정렬, 람다식으로 내림차순 정의
	long total = 0;					// 총 받은 팁, 최대값을 계산해보면 50억이 나오는데 int범위를 벗어나기 때문에 long을 써야함
	for (int i = 0; i < n; i++) {
		int calc = tips[i] - i;				// 팁에서 등수 빼서 음수 빼고 더하기
		total += calc > 0 ? calc : 0;
	}

	cout << total;

	return 0;
}