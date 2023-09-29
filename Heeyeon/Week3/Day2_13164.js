//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week3/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const input = fs.readFileSync(readFileSyncAddress, "utf-8").trim().split("\n");

const [N, K] = input[0].split(" "); //N명의 원생 K개의 조로 나눠야 함
const arr = input[1].split(" "); //원생들 키 저장
const dif = []; //원생들 키 차이 저장
//키 차이 구하기
for (let i = 1; i < arr.length; i++) {
  dif.push(arr[i] - arr[i - 1]);
}
//키 차이 오름차순 정렬
dif.sort(function (a, b) {
  return a - b;
});

let cost = 0;
//N명의 아이들을 K로 나눔
//N-K번 dif 배열의 차이를 더하면 가격이 됨
for (let i = 0; i < N - K; i++) {
  cost += dif[i];
}
console.log(cost);
