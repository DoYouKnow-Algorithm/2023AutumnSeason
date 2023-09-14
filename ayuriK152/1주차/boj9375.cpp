#include <iostream>
#include <map>
using namespace std;

int main() {
	int t;
	cin >> t;
	for (; t > 0; t--) {
		map<string, int> clothesMap;		// 해시맵
		int n;
		cin >> n;
		string keys[30];		// 키값 저장용
		int keyIndex = 0;

		for (; n > 0; n--) {
			string input;
			cin >> input;		// 입력 문자열에서 공백문자 기준 두 번째 문자가 옷 종류, 앞에 문자 무시하려고 입력 두번 받기
			cin >> input;
			if (clothesMap.find(input) == clothesMap.end()) {		// 키값이 없는경우 키값 등록, 있는경우는 그냥 다음 코드에서 횟수 늘리기
				keys[keyIndex++] = input;
				clothesMap.insert(make_pair(input, 0));
			}
			clothesMap[input]++;
		}

		int total = 0;
		for (int i = 0; i < keyIndex; i++)
			total = total == 0 ? clothesMap[keys[i]] + 1 : (clothesMap[keys[i]] + 1) * total;		// 경우의 수 계산
		total = total == 0 ? total : total - 1;		// 0이면 -1 해줄 필요가 없음. 그 이외의 값이면 -1
		cout << total << endl;
	}
}