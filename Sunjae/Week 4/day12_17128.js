//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

const fs = require("fs");

// input에 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 소 N 마리, 장난치는 횟수 Q
const [N, Q] = input[0].split(" ").map(Number);
const cow = input[1].split(" ").map(Number);
const joke = input[2].split(" ").map(Number);

// 합 배열
let S_arr = [];
// 전체 S 값
let S_total = 0;

// 초기 S_arr 배열 및 S_total 계산
for (let i = 0; i < N; i++) {
  S_arr[i] = cow[i] * cow[(i + 1) % N] * cow[(i + 2) % N] * cow[(i + 3) % N];
  S_total += S_arr[i];
}

// 결과를 저장할 배열
let result = [];

// Q 개의 줄에 걸쳐 계산결과(S) 출력
for (let i = 0; i < Q; i++) {
  for (let j = 0; j < 4; j++) {
    // 모듈러 연산 이용하여 장난친 소가 포함된 4개의 원형 배열 인덱스 탐색
    let index = (joke[i] - j + N - 1) % N;

    // 해당 배열값을 반대로 바꿔줌(* -1)
    S_arr[index] *= -1;

    // 전체 합에 *2 해서 갱신
    S_total += 2 * S_arr[index];
  }
  result.push(S_total);
}
console.log(result.join("\n"));
