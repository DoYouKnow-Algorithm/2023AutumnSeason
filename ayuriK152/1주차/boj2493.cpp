#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
	int n;
	cin >> n;
	int arr[500000];		// 높이 저장용 배열
	vector<int> stack;		// 높이의 인덱스 저장용 스택
	string result = "";		// 결과 출력용 string 변수
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
		while (!stack.empty() && arr[stack.back()] < arr[i])		// 스택이 비거나 입력받은 현재 수보다 큰 수가 나올 때까지 pop
			stack.pop_back();
		if (!stack.empty())			// 반복문을 빠져나왔는데, 1. 스택이 비었다 -> 더 높은 탑이 없다, 2. 스택이 안비었다 -> 제일 마지막 인덱스 해당 탑이 나보다 높다
			result.append(to_string(stack.back() + 1) + " ");
		else
			result.append("0 ");
		stack.push_back(i);			// 내 인덱스 스택에 저장하기
	}
	cout << result;
	return 0;
}