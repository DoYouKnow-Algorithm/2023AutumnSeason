//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week1/input.txt"; //제출시 삭제
const fs = require("fs");
//T에 테스트 케이스, 나머지는 input 배열에 할당
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n")
  .map((line) => line.trim());
//input 배열 길이만큼 반복
for (let i = 1; i < input.length; i++) {
  if (!isNaN(parseInt(input[i]))) {   //input[i]가 숫자라면
    let clothes = new Map();  //clothes 생성 및 초기화

    for (let j = 1; j <= input[i]; j++) { 
      let [_, key] = input[i + j].split(" "); //첫번째 단어는 필요 X, 두번째 단어만 key에 저장
      if (clothes.has(key)) { //의상 종류가 이미 존재하면
        clothes.set(key, clothes.get(key) + 1); //의상 개수 +1
      } else {  //존재하지 않는 의상 종류라면
        clothes.set(key, 1);  //종류=key, 개수=1로 map에 저장
      }
    }
    let sum = 1;
    for (let value of clothes.values()) {   //value는 clothes에 저장되어 있는 개수들
      sum = sum * (value + 1);  //value에 +1씩 해주고 sum에 곱해줌
    }
    console.log(sum - 1); //다 곱한 값에서 -1(아무것도 안입는 경우 제외)
  }
}
