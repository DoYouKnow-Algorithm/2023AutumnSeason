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

// 원생의 수 N
const N = Number(input_1[0]);

// 조의 개수 K
const K = Number(input_1[1]);

// 원생들의 키(오름차순)
const stature_arr = input[1].split(" ").map(Number);

// 원생들의 키차이
let difference = [];

// 키 순서대로 N-1 개의 차이 저장
for (let i = 0; i < N - 1; i++) {
  difference[i] = stature_arr[i + 1] - stature_arr[i];
}

// 오름차순 정렬
difference.sort((a, b) => a - b);

// 티셔츠를 만드는 비용
let cost = 0;

// 1명인 조를 제외한 조의 비용을 저장
for (let i = 0; i < difference.length - (K - 1); i++) {
  cost += difference[i];
}

console.log(cost);
