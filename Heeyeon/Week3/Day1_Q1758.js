//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week3/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const [n, ...input] = fs
  .readFileSync(readFileSyncAddress, "utf-8")
  .trim()
  .split("\n");

let cost = 0; //팁 저장
//내림차순으로 정렬
input.sort(function (a, b) {
  return b - a;
});

for (let i = 0; i < n; i++) {
  if (input[i] - i > 0) {
    //팁을 받을 수 있는 경우
    cost += input[i] - i;
  } else {
    //팁 못받으면 종료(뒤에 값들도 0이하)
    break;
  }
}

console.log(cost);
