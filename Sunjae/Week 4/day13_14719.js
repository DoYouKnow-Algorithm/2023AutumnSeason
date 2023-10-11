//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

const fs = require("fs");

// input에 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const input_1 = input[0].split(" ");
const height = input[1].split(" ");

const H = input_1[0];
const W = input_1[1];

let answer = 0;

// 받을 수 있는 물의 양
// 내 자신을 기준으로 왼쪽 오른쪽을 검색
// 다음 왼쪽 기준 가장 큰 높이와 오른쪽 기준 가장 큰 높이 중
// 제일 작은놈을 기준으로 탐색중인 인덱스의 높이를 빼줌

// 양 끝은 빗물을 받을수 없으므로 i=1 부터 시작, i <W-1
for (let i = 1; i < W - 1; i++) {
  //내 자신을 기준으로 왼쪽 오른쪽을 검색
  let left = 0;
  let right = 0;

  //왼쪽 최대 높이
  for (let j = 0; j < i; j++) {
    left = Math.max(left, height[j]);
  }

  //오른쪽 최대 높이
  for (let j = W - 1; j > i; j--) {
    right = Math.max(right, height[j]);
  }

  //왼쪽 기준 가장 큰 높이와 오른쪽 기준 가장 큰 높이 중 작은높이를 기준으로 탐색중인 인덱스의 높이를 빼줌
  answer += Math.max(0, Math.min(left, right) - height[i]);
}

console.log(answer);
