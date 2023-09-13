// var readFileSyncAddress = "/dev/stdin"; // 백준 제출
var readFileSyncAddress = "예제.txt"; // VScode 확인

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
var fs = require("fs");

// input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), trim(), split()을 사용해서
// Array로 저장.
var input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 결과를 Array로 저장
var output = [];

// input의 입력 줄 개수만큼 반복
for (let i = 0; i < input.length; i++) {
  // 배열로 스택 구현
  var stack = [];

  // 균형 여부
  let balance = true;

  // 한 줄을 문자열로 저장
  let line = input[i];

  if (line == ".") {
    // 종료 조건
    break;
  }

  for (let j = 0; j < line.length - 1; j++) {
    let word = line[j]; // 단어 하나씩 탐색

    // 여는 괄호인 경우
    if (word == "(" || word == "[") {
      stack.push(word); // 스택에 넣음

      // 여는 소괄호인 경우
    } else if (word == ")") {
      // 스택의 값이 없는 경우 or 짝이 안맞는 경우
      if (stack.length == 0 || stack[stack.length - 1] != "(") {
        balance = false;
        // 짝이 맞는경우
      } else {
        stack.pop(); // 스택에서 제거
      }
    }

    // 여는 대괄호인 경우
    else if (word == "]") {
      // 스택의 값이 없는 경우 or 짝이 안맞는 경우
      if (stack.length == 0 || stack[stack.length - 1] != "[") {
        balance = false;
        // 짝이 맞는경우
      } else {
        stack.pop(); // 스택에서 제거
      }
    }
  }
  if (balance) {
    if (stack.length == 0) {
      output.push("yes");
    } else {
      output.push("no");
    }
  } else {
    output.push("no");
  }
}

// join() -> 배열의 모든 요소를 연결해 하나의 문자열로 만듬
console.log(output.join("\n"));
