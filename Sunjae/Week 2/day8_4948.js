//const readFileSyncAddress = "/dev/stdin"; // 백준 제출
const readFileSyncAddress = "Sunjae/예제.txt"; // VScode 확인

const fs = require("fs");

// input에 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 에라토스테네스의 체
function isPrimes(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

for (let k = 0; k < input.length; k++) {
  // 0을 입력받으면 종료
  if (input[k] == 0) break;

  // 2n 까지의 소수 판별
  let isPrime = isPrimes(input[k] * 2);

  // 소수 반환하기
  let primeNum = isPrime.map((v, i) => (v ? i : 0)).filter((e) => e);

  // 소수의 개수 구하기
  isPrime.filter((e) => e).length;

  // n~2n 사이의 소수만 구하기
  let count = 0;
  for (let i = 0; i < primeNum.length; i++) {
    // 반환한 소수가 n 보다 클때만 count
    if (primeNum[i] > input[k]) {
      count++;
    }
  }
  console.log(count);
}
