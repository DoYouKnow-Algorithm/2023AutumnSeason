// const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

// 첫번째 줄은 n, 두번째 줄은 input에 저장
const [n, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 결과를 저장할 배열
let answer = 0;

// stack 선언
let score_stack = [];
let time_stack = [];

for (let i = 0; i < n; i++) {
  // assignment 배열에 input을 띄어쓰기 단어로 잘라서 저장
  let assignment = input[i].split(" ");

  // 과제가 있는 경우
  if (assignment[0] == 1) {
    // 점수와 시간
    let score = Number(assignment[1]);
    let time = Number(assignment[2]);

    // 시간이 1인 경우 -> 바로 해결
    if (time == 1) {
      answer += score;
    } else {
      score_stack.push(score); // 점수 push
      time_stack.push(time - 1); // 시간을 1 하고 push
    }
  }
  // 과제가 없는 경우
  else {
    //// if (time_stack == 0) break;
    let pop = time_stack.pop();
    //pop 하는 값이 1분이면
    if (pop == 1) {
      answer += score_stack.pop(); // 점수를 pop 해서 더해줌
    } else {
      time_stack.push(pop - 1); // 1분 줄여주고 다시 push
    }
  }
}

console.log(answer);
