#include <iostream>
using namespace std;

int main() {
	bool depth[500][500] = { false };		// 2차원 배열 false로 초기화
	int h, w;
	cin >> h >> w;
	for (int i = 0; i < w; i++) {
		int a;
		cin >> a;
		for (int j = 0; j < a; j++)			// 입력받은 수만큼 블럭 쌓기
			depth[i][j] = true;
	}
	int count = 0;
	for (int i = 0; i < h; i++) {			// 가로줄을 한 줄씩 읽어가며 블럭과 블럭 사이의 공간 카운트
		int point = -1;
		for (int j = 0; j < w; j++) {
			if (depth[j][i]) {
				if (point != -1)
					count += j - point - 1;
				point = j;
			}
		}
	}

	cout << count;
	return 0;
}