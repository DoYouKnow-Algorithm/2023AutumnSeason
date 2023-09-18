#include <iostream>
#include <vector>
using namespace std;

class Pair {		// 점수, 시간 저장용 클래스
public:
	int a, t;

public:
	Pair(int _a, int _t) {
		a = _a;
		t = _t;
	}
};

int main() {
	int n;
	cin >> n;
	vector<Pair> stack;			// 스택
	int score = 0;
	for (; n > 0; n--) {
		int flag;				// 첫 번째 입력으로 과제 추가 여부 판단
		cin >> flag;
		if (flag == 1) {		// 과제 추가인 경우 클래스 인스턴스 생성 및 스택에 추가
			int a, t;
			cin >> a;
			cin >> t;
			stack.push_back(Pair(a, t));
		}
		if (!stack.empty()) {	// 과제가 있으면 뒤에서부터 해결, 다 해결했으면 score 변수에 누적
			stack.back().t--;
			if (stack.back().t == 0) {
				score += stack.back().a;
				stack.pop_back();		// 누적 후 스택에서 삭제
			}
		}
	}
	cout << score << endl;
	return 0;
}