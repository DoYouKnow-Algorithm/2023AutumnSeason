#include <iostream>
using namespace std;

int main() {
	bool matA[50][50] = { false };
	bool matB[50][50] = { false };
	int n, m;
	cin >> n >> m;
	int result = 0;

	for (int i = 0; i < n; i++) {		// 입력
		string input;
		cin >> input;
		for (int j = 0; j < m; j++)
			matA[i][j] = input[j] == '1' ? true : false;
	}

	for (int i = 0; i < n; i++) {		// 입력
		string input;
		cin >> input;
		for (int j = 0; j < m; j++)
			matB[i][j] = input[j] == '1' ? true : false;
	}

	if (n < 3 || m < 3) {				// 뒤집기가 불가능한 작은 배열들, 안뒤집어도 같은경우는 0, 다른경우는 못바꾸니까 -1
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				if (matA[i][j] != matB[i][j])
					result = -1;
			}
		}
	}

	else {				// 뒤집기가 가능한 애들, 3x3으로 뒤집을 때 왼쪽 위의 성분이 다른지 비교하고 뒤집어주면 됨. 모든 행렬 성분을 이렇게 비교
		for (int i = 0; i < n - 2; i++) {
			for (int j = 0; j < m - 2; j++) {
				if (matA[i][j] != matB[i][j]) {		// 다른 경우 뒤집고 result값 ++
					for (int y = i; y < i + 3; y++)
						for (int x = j; x < j + 3; x++)
							matA[y][x] = !matA[y][x];
					result++;
				}
			}
		}

		for (int i = 0; i < n; i++) {		// 다 뒤집어주고 두 행렬이 같은지 비교, 다르면 -1
			for (int j = 0; j < m; j++) {
				if (matA[i][j] != matB[i][j])
					result = -1;
			}
		}
	}

	cout << result;
	return 0;
}