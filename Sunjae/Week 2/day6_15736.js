// const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
const fs = require("fs");

// 출전한 학생의 수(=깃발)
const N = fs.readFileSync(readFileSyncAddress).toString().trim();

// 1 번째 깃발 -> 1
// 2 번째 깃발 -> 1, 2
// 3 번째 깃발 -> 1, 3
// 4 번째 깃발 -> 1, 2, 4
// i 번째 깃발 -> i 의 약수

// n = 24 일때
// 정답은 약수 갯수가 홀수인 1, 4, 9, 16

// n보다 작은 제곱수 구하기
// 1은 항상 포함 되므로 count = 1로 초기화
let count = 1;
for (let i = 2; i <= N; i++) {
  if (i * i > N) {
    break;
  }
  count++;
}

console.log(count);
