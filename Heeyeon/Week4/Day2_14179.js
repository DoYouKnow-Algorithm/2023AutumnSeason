//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week4/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [H, W] = input[0].split(" ");
const block = input[1].split(" ").map(Number);
let rain = 0;
for (let i = 1; i < W - 1; i++) {
  let left = 0;
  let right = 0;
  //i의 왼쪽에서 가장 큰 높이 구함
  for (let j = 0; j < i; j++) {
    left = Math.max(block[j], left);
  }
  //i의 오른쪽에서 가장 큰 높이 구함
  for (let j = i + 1; j < W; j++) {
    right = Math.max(block[j], right);
  }
  //현재 높이가 양쪽높이 보다 작다면
  if (block[i] < left && block[i] < right)
    //비가 고여있으므로 빗물 양 구해줌
    rain += Math.min(left, right) - block[i];
}

console.log(rain);
