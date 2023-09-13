const fs = require("fs"); //제출시 삭제
const path = "./Heeyeon/Week 1/input.txt"; //제출시 삭제

//readline 모듈 가져옴
const readline = require("readline");
//입출력을 위한 인터페이스 생성
const reader = readline.createInterface({
  //   input: process.stdin, //제출시 활성화
  input: fs.createReadStream(path), //제출시 삭제
  output: process.stdout,
});
//입력 저장
let input = [];
//.이 들어오면 종료, 아니면 input 배열에 넣어줌
reader.on("line", function (line) {
  if (line === ".") {
    reader.close();
  } else {
    input.push(line);
  }
});
//isBalance 함수로 input에 대한 결과 판별 -> 'yes' or 'no' 출력
reader.on("close", function () {
  for (let i = 0; i < input.length; i++) {
    if (isBalance(input[i])) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
});

function isBalance(statement) {
  let stack = [];
  for (let i = 0; i < statement.length; i++) {
    //'(','['은 stack에 넣음
    if (statement[i] == "(" || statement[i] == "[") {
      stack.push(statement[i]);
    }
    //')',']'이 나오고
    if (statement[i] == ")" || statement[i] == "]") {
      //스택이 비어있으면 false
      if (stack.length == 0) {
        return false;
      }
      //스택에서 하나 꺼냄
      let temp = stack.pop();
      //균형이 맞지 않으면 false를 return해줌
      if (statement[i] == ")" && temp !== "(") {
        return false;
      }
      if (statement[i] == "]" && temp !== "[") {
        return false;
      }
    }
  }
  //스택이 비어있으면 균형이 맞는 것
  return stack.length == 0;
}
