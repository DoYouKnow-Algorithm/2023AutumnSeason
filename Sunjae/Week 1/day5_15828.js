// const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

// 첫번째 줄은 n, 두번째 줄은 input에 저장
const [N, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 버커(큐) 선언
let buffer = [];

// 인덱스
let i = 0;

// -1이 입력될 때까지
while (input[i] != -1) {
  if (input[i] != 0) {
    // 0이 아니라면
    buffer.push(input[i]); // 해당 패킷을 큐에 push
  } else {
    buffer.shift(); // 큐 맨 앞의 값을 제거
  }
  i++;
}

// 출력형식에 맞춰줌
buffer.length == 0 ? console.log("empty") : console.log(buffer.join(" "));
