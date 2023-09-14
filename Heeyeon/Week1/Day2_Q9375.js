//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week1/input.txt"; //제출시 삭제
const fs = require("fs");
//T에 테스트 케이스, 나머지는 input 배열에 할당
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n")
  .map((line) => line.trim());

for (let i = 1; i < input.length; i++) {
  if (!isNaN(parseInt(input[i]))) {
    let clothes = new Map();

    for (let j = 1; j <= input[i]; j++) {
      let [_, key] = input[i + j].split(" ");
      if (clothes.has(key)) {
        clothes.set(key, clothes.get(key) + 1);
      } else {
        clothes.set(key, 1);
      }
    }
    let sum = 1;
    for (let value of clothes.values()) {
      sum = sum * (value + 1);
    }
    console.log(sum - 1);
  }
}
