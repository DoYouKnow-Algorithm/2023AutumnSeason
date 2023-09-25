// 설명이 길어져서 노션으로 정리..
// https://ayurik.notion.site/05bd3a50a51f415fbcd9d34c7a5e17cf?pvs=4
#include <iostream>
#include <cmath>
#include <string>
using namespace std;
int rotationFirst[4] = { 2, 3, 5, 7 };
int rotationOther[4] = { 1, 3, 7, 9 };
string result;

void IsPrime(int num, int cnt) {
	for (int i = 2; i * i <= num; i++)
		if (num % i == 0)
			return;

	if (cnt == 1) {
		result.append(to_string(num));
		result.append("\n");
		return;
	}

	IsPrime(num * 10 + rotationOther[0], cnt - 1);
	IsPrime(num * 10 + rotationOther[1], cnt - 1);
	IsPrime(num * 10 + rotationOther[2], cnt - 1);
	IsPrime(num * 10 + rotationOther[3], cnt - 1);
}

int main() {
	int n;
	cin >> n;
	for (int i = 0; i < 4; i++)
		IsPrime(rotationFirst[i], n);

	cout << result;
	return 0;
}
