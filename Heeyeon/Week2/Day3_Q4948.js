//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week2/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const input = fs.readFileSync(readFileSyncAddress, "utf-8").trim().split("\n");

let i = 0; //input 배열의 인덱스
let answer = []; //소수 개수 저장

while (Number(input[i]) !== 0) {
  let temp = Number(input[i]);
  answer.push(primeCount(temp));

  i++;
}
//소수의 개수 카운트하는 함수
function primeCount(n) {
  let count = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
//소수 판별하는 함수
function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(answer.join("\n"));
