//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week4/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ");
const arr = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));

//돌릴 사각형 개수(min(N,M) mod 2)
const count = Math.min(N, M) / 2;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < count; j++) {
    let temp = arr[j][j]; //사각형 시작점
    // 왼쪽으로 밀기
    for (let k = j; k < M - j - 1; k++) {
      arr[j][k] = arr[j][k + 1];
    }
    // 위로 밀기
    for (let k = j; k < N - 1 - j; k++) {
      arr[k][M - j - 1] = arr[k + 1][M - j - 1];
    }
    // 오른쪽으로 밀기
    for (let k = M - j - 1; k > j; k--) {
      arr[N - 1 - j][k] = arr[N - 1 - j][k - 1];
    }
    // 아래로 밀기
    for (let k = N - j - 1; k > j; k--) {
      arr[k][j] = arr[k - 1][j];
    }
    arr[j + 1][j] = temp; //시작점에 있던 값 옮겨줌
  }
}

let answer = "";
arr.forEach((i) => {
  //이차원 배열 출력
  answer += i.join(" ") + "\n";
});
console.log(answer);
