#include <iostream>
#include <string>
using namespace std;

int mat[300][300] = { 0 };
int matCpy[300][300] = { 0 };
int n, m, r;
int minX = 0, minY = 0, maxX, maxY;
int length;

void Change(int x, int y, int rotCnt) {			// 기존 행렬에서 하나하나의 요소들을 바꿔주는 메소드
	int originX = x, originY = y;				// 기존 행렬에서의 2차원 인덱스 임시저장
	while (rotCnt > 0) {						// 남은 회전 수가 0이 될 때까지 회전(실제로 회전을 계속 하지는 않음)
		// 아래의 모든 조건문들은 현재 들어온 행렬의 요소 위치에 따른 x, y값의 증가 감소 여부를 결정하는 분기점
		if (y < maxY && x == minX) {
			y += rotCnt;			// 일단 회전 수만큼 돌려준다
			if (y > maxY) {			// 그 값이 최소or최대값을 초과하는 경우
				rotCnt = (y - maxY) % length;		// 회전하고 남은 횟수, 회전 수가 크면 한 바퀴 돌아서 다시 오는 경우가 있으므로 현재 레이어의 요소 갯수로 나눈 나머지 저장
				y = maxY;			// 행렬의 2차원 인덱스는 사각형 관점에서 모서리가 됨
				continue;			// 반복
			}
		}
		else if (y == maxY && x < maxX) {
			x += rotCnt;
			if (x > maxX) {
				rotCnt = (x - maxX) % length;
				x = maxX;
				continue;
			}
		}
		else if (y > minY && x == maxX) {
			y -= rotCnt;
			if (y < minY) {
				rotCnt = (minY - y) % length;
				y = minY;
				continue;
			}
		}
		else if (y == minY && x > minX) {
			x -= rotCnt;
			if (x < minX) {
				rotCnt = (minX - x) % length;
				x = minX;
				continue;
			}
		}
		rotCnt = 0;		// 무사히 조건문을 빠져나왔다면 회전 수가 0이 된 경우
	}

	matCpy[y][x] = mat[originY][originX];		// 드디어 바꿔준다.
}

int main() {
	cin >> n >> m >> r;
	for (int y = 0; y < n; y++)
		for (int x = 0; x < m; x++)
			cin >> mat[y][x];

	int layer = n < m ? n / 2 : m / 2;		// 행렬에서 n과 m 중 더 작은 값에 대해 mod 2 = 0 이 조건으로 있으므로 그거로 회전할 레이어 수 계산
	maxX = m - 1, maxY = n - 1;
	while (layer > 0) {				// 더이상 회전할 레이어가 없을 때까지 반복
		length = 2 * ((maxX - minX + 1) + (maxY - minY - 1));		// 현재 레이어의 요소 개수
		for (int x = minX; x <= maxX; x++) {		// 가로선 2개(위 아래)
			Change(x, minY, r);
			Change(x, maxY, r);
		}
		for (int y = minY + 1; y < maxY; y++) {		// 세로선 2개(양 옆), 가로선 2개 이미 세줬으니까 위아래 하나씩 빼줘야함
			Change(minX, y, r);
			Change(maxX, y, r);
		}
		minX++; minY++; maxX--; maxY--;				// 안쪽 레이어로 들어가는 과정, 최소 최대값을 증가 감소시켜준다.
		layer--;					// 계산해야하는 레이어 개수 감소
	}

	string result = "";			// 이하 반복출력
	for (int y = 0; y < n; y++) {
		for (int x = 0; x < m; x++) {
			result.append(to_string(matCpy[y][x]));
			result.append(" ");
		}
		result.append("\n");
	}
	cout << result;
	return 0;
}