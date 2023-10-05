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
  // 6 7 8 1
  if (i == N - 3) {
    S_arr[i] = cow[i] * cow[i + 1] * cow[i + 2] * cow[0];
  } // 7 8 1 2
  else if (i == N - 2) {
    S_arr[i] = cow[i] * cow[i + 1] * cow[0] * cow[1];
  } // 8 1 2 3
  else if (i == N - 1) {
    S_arr[i] = cow[i] * cow[0] * cow[1] * cow[2];
  } else {
    S_arr[i] = cow[i] * cow[i + 1] * cow[i + 2] * cow[i + 3];
  }

  S_total += S_arr[i];
}

// 결과를 저장할 배열
let result = [];

// Q 개의 줄에 걸쳐 계산결과(S) 출력
for (let i = 0; i < Q; i++) {
  // 장난칠 소의 인덱스
  let index = joke[i] - 1;

  // 인덱스를 포함하는 연산(4회)만 -1 을 곱해줌
  if (index == 0) {
    S_arr[0] *= -1;
    S_total += 2 * S_arr[0];

    S_arr[N - 1] *= -1;
    S_total += 2 * S_arr[N - 1];

    S_arr[N - 2] *= -1;
    S_total += 2 * S_arr[N - 2];

    S_arr[N - 3] *= -1;
    S_total += 2 * S_arr[N - 3];
  } else if (index == 1) {
    S_arr[1] *= -1;
    S_total += 2 * S_arr[1];

    S_arr[0] *= -1;
    S_total += 2 * S_arr[0];

    S_arr[N - 1] *= -1;
    S_total += 2 * S_arr[N - 1];

    S_arr[N - 2] *= -1;
    S_total += 2 * S_arr[N - 2];
  } else if (index == 2) {
    S_arr[2] *= -1;
    S_total += 2 * S_arr[2];

    S_arr[1] *= -1;
    S_total += 2 * S_arr[1];

    S_arr[0] *= -1;
    S_total += 2 * S_arr[0];

    S_arr[0] *= -1;
    S_total += 2 * S_arr[0];
  } else {
    for (let k = 0; k < 4; k++) {
      S_arr[index - k] *= -1;
      S_total += 2 * S_arr[index - k];
    }
  }

  result.push(S_total);
}
console.log(result.join("\n"));
