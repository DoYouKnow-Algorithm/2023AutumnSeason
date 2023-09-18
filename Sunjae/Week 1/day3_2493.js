//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "예제.txt"; // VScode 확인

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

//첫번째 줄은 n, 두번째 줄은 input에 저장
const [n, input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
//top 배열에 input을 띄어쓰기 단어로 잘라서 저장
let top = input.split(" ").map(Number);

//길이가 n이고, 값이 0인 배열 생성
let answer = [];

// stack 선언
let stack = [];

for (let i = 0; i < n; i++) {
  const currentTop = {
    // 현재 탑의 인덱스와 높이를 저장
    index: i + 1,
    height: top[i],
  };

  while (stack.length) {
    // 스택이 빌때 까지 반복
    if (stack[stack.length - 1].height > currentTop.height) {
      // peek한 탑의 높이 > 현재 탑의 높이
      break; // 반복문을 빠져나감
    } else {
      stack.pop(); // 스택에서 제거
    }
  }

  // 스택이 비어있다면 0 입력 , 아니라면 peek한 탑의 인덱스를 결과에 입력
  !stack.length ? answer.push(0) : answer.push(stack[stack.length - 1].index);

  stack.push(currentTop); // 스택에 현재 탑을 push
}

console.log(answer.join(" "));
