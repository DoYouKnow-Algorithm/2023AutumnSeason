//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

const fs = require("fs");

// input에 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 입력 첫번째 줄
const input_1 = input[0].split(" ");

// N 행
const N = Number(input_1[0]);
// K 열
const K = Number(input_1[1]);

// A배열
const arr = input.slice(1, N + 1);
// B배열
const arr2 = input.slice(N + 1);

// 배열 A 선언
let procession_A = [];
// 배열 B 선언
let procession_B = [];

// 연산 횟수
let count = 0;

// A,B 배열을 이중배열로 만들고 number 로 변환
for (let i = 0; i < N; i++) {
  procession_A.push(arr[i].split("").map(Number));
  procession_B.push(arr2[i].split("").map(Number));
}

// 3X3 행렬 모든 원소를 뒤집는 함수
function alter(a, b) {
  for (let i = a; i < a + 3; i++) {
    for (let j = b; j < b + 3; j++) {
      procession_A[i][j] = 1 - procession_A[i][j];
    }
  }
}

// 3X3 기준으로 A행렬의 맨 왼쪽위 원소를 B행렬과 비교
for (let i = 0; i < N - 2; i++) {
  for (let j = 0; j < K - 2; j++) {
    if (procession_A[i][j] != procession_B[i][j]) {
      alter(i, j);
      count++;
    }
  }
}

// A의 모든 원소를 B와 비교해서 같지 않다면(변환이 안됬다면) -1 출력
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    if (procession_A[i][j] != procession_B[i][j]) {
      count = -1;
      break;
    }
  }
}

console.log(count);
