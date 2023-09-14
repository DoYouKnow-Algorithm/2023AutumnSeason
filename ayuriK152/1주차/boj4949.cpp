#include <iostream>
#include <string>
using namespace std;

int main()
{
	char queue[101];	// 저장용 배열
	string result;		// 결과값 저장용

	while (true) {
		string input;
		while (true) {		// 입력 종료 조건인 온점이 나올 때까지 입력받기
			string temp;
			getline(cin, temp);
			input.append(temp);
			if (input[input.size() - 1] == '.')
				break;
		}
		if (input.size() == 1 && input[0] == '.')
			break;

		int index = 0;		// 배열의 현재 인덱스 저장용 = (, [ 갯수
		bool isComplete = true;		// 괄호 뚜껑 다 닫혔는지
		for (int i = 0; i < input.size(); i++) {
			if (input[i] == '(' || input[i] == '[')
				queue[index++] = input[i];		// (, [가 들어오면 일단 배열에 저장, index++
			else if (input[i] == ')') {
				if (index == 0) {
					isComplete = false;		// index 값이 0인데 뚜껑이 들어오면 바로 실패
					break;
				}
				else if (queue[index - 1] != '(') {
					isComplete = false;		// 뚜껑이 들어왔는데 쌍이 아니면 바로 실패
					break;
				}
				index--;		// 뚜껑 닫혔으면 인덱스 값 감소
			}
			else if (input[i] == ']') {		// 이하 동일
				if (index == 0) {
					isComplete = false;
					break;
				}
				else if (queue[index - 1] != '[') {
					isComplete = false;
					break;
				}
				index--;
			}
		}

		if (isComplete && index == 0)		// 배열에 아무것도 안남았고, 뚜껑이 다 닫혔으면 yes 아니면 no
			result.append("yes\n");
		else
			result.append("no\n");
	}

	cout << result;
}