//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week3/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const [n, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n")
  .map((line) => line.trim());

const sol = (n, input) => {
  const [N, M] = n.split(" ");

  const arr = input.slice(0, N).map((line) => line.split("").map(Number));
  const answer = input.slice(N).map((line) => line.split("").map(Number));

  //비교하는 함수
  const compare = (arr, answer) => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] !== answer[i][j]) return false;
      }
    }
    return true;
  };
  //처음부터 같은 행렬이 주어진 경우
  if (compare(arr, answer)) return 0;
  //행렬 뒤집기
  const flip = (x, y) => {
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        //1이면 0으로, 0이면 1로 뒤집기
        arr[i][j] = 1 - arr[i][j];
      }
    }
  };

  let count = 0; //몇 번 뒤집었는지
  //범위를 벗어나지 않도록 N-2, M-2까지만
  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (arr[i][j] !== answer[i][j]) {
        flip(i, j); //뒤집고
        count++; //카운트 증가시키고
        //같은지 비교하기
        if (compare(arr, answer)) return count;
      }
    }
  }

  //return되지 않으면 행렬이 같아질 수 없는 것
  return -1;
};

console.log(sol(n, input));
