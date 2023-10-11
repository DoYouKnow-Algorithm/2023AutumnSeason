//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

const fs = require("fs");

// input에 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ").map(Number);

let line = input.slice(1, N + 1);

let arr = [];

// 이중 배열 구현
for (let i = 0; i < N; i++) {
  arr.push(line[i].split(" ").map(Number));
}

// 회전 시킬 껍질 수
let skin = Math.min(N, M) / 2;

// R 회 회전 시킴
for (let i = 0; i < R; i++) {
  for (let j = 0; j < skin; j++) {
    let temp = arr[j][j]; // 모서리를 따로 저장

    for (let k = j; k < M - j - 1; k++) {
      //위(왼쪽으로)
      arr[j][k] = arr[j][k + 1];
    }
    for (let k = j; k < N - j - 1; k++) {
      //오른쪽(위로)
      arr[k][M - j - 1] = arr[k + 1][M - j - 1];
    }
    for (let k = M - j - 1; k > j; k--) {
      //아래(오른쪽으로)
      arr[N - j - 1][k] = arr[N - j - 1][k - 1];
    }
    for (let k = N - j - 1; k > j; k--) {
      //왼쪽(아래로)
      arr[k][j] = arr[k - 1][j];
    }
    arr[j + 1][j] = temp; // 모서리에 해당하는 값으로 바꿈
  }
}

// 출력 형식에 맞춰줌
for (let answer of arr) {
  console.log(answer.join(" "));
}
