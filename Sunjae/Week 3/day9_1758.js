//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

const fs = require("fs");

// input에 저장
const [n, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 내림차순 정렬
input.sort((a, b) => b - a);

// 전체 팁
let tip = 0;

// 받게될 팁
let give = 0;

for (let i = 0; i < n; i++) {
  // 받게될 팁
  give = input[i] - i;

  // 전체 팁에 추가
  tip += Number(give);

  // 팁을 받을수 없으면 반복문을 빠져나감
  if (give <= 0) break;
}

console.log(tip);
