#include <iostream>
#include <string>
using namespace std;

int mat[300][300] = { 0 };
int matCpy[300][300] = { 0 };
int n, m, r;
int minX = 0, minY = 0, maxX, maxY;
int length;

void Change(int x, int y, int rotCnt) {			// ���� ��Ŀ��� �ϳ��ϳ��� ��ҵ��� �ٲ��ִ� �޼ҵ�
	int originX = x, originY = y;				// ���� ��Ŀ����� 2���� �ε��� �ӽ�����
	while (rotCnt > 0) {						// ���� ȸ�� ���� 0�� �� ������ ȸ��(������ ȸ���� ��� ������ ����)
		// �Ʒ��� ��� ���ǹ����� ���� ���� ����� ��� ��ġ�� ���� x, y���� ���� ���� ���θ� �����ϴ� �б���
		if (y < maxY && x == minX) {
			y += rotCnt;			// �ϴ� ȸ�� ����ŭ �����ش�
			if (y > maxY) {			// �� ���� �ּ�or�ִ밪�� �ʰ��ϴ� ���
				rotCnt = (y - maxY) % length;		// ȸ���ϰ� ���� Ƚ��, ȸ�� ���� ũ�� �� ���� ���Ƽ� �ٽ� ���� ��찡 �����Ƿ� ���� ���̾��� ��� ������ ���� ������ ����
				y = maxY;			// ����� 2���� �ε����� �簢�� �������� �𼭸��� ��
				continue;			// �ݺ�
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
		rotCnt = 0;		// ������ ���ǹ��� �������Դٸ� ȸ�� ���� 0�� �� ���
	}

	matCpy[y][x] = mat[originY][originX];		// ���� �ٲ��ش�.
}

int main() {
	cin >> n >> m >> r;
	for (int y = 0; y < n; y++)
		for (int x = 0; x < m; x++)
			cin >> mat[y][x];

	int layer = n < m ? n / 2 : m / 2;		// ��Ŀ��� n�� m �� �� ���� ���� ���� mod 2 = 0 �� �������� �����Ƿ� �װŷ� ȸ���� ���̾� �� ���
	maxX = m - 1, maxY = n - 1;
	while (layer > 0) {				// ���̻� ȸ���� ���̾ ���� ������ �ݺ�
		length = 2 * ((maxX - minX + 1) + (maxY - minY - 1));		// ���� ���̾��� ��� ����
		for (int x = minX; x <= maxX; x++) {		// ���μ� 2��(�� �Ʒ�)
			Change(x, minY, r);
			Change(x, maxY, r);
		}
		for (int y = minY + 1; y < maxY; y++) {		// ���μ� 2��(�� ��), ���μ� 2�� �̹� �������ϱ� ���Ʒ� �ϳ��� �������
			Change(minX, y, r);
			Change(maxX, y, r);
		}
		minX++; minY++; maxX--; maxY--;				// ���� ���̾�� ���� ����, �ּ� �ִ밪�� ���� ���ҽ����ش�.
		layer--;					// ����ؾ��ϴ� ���̾� ���� ����
	}

	string result = "";			// ���� �ݺ����
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