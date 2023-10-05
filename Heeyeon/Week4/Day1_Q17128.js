//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week4/input.txt"; //제출시 삭제
const fs = require("fs");
//input에 입력값 저장
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const score = input[1].split(" "); //소의 품질 점수
const cow = input[2].split(" "); //장난칠 소의 번호
let s = []; //4개 곱한 값들 저장
let temp = 1;
let result = 0;

for (let i = 0; i < 4; i++) {
  //처음 4개의 곱
  temp *= score[i];
}
s.push(temp);
result += temp;

//이전의 4개 곱한 값에서 첫번째 수로 나누고, 추가된 수 곱하기
//이전에 인덱스 0,1,2,3값을 곱함 -> 인덱스 0의 값으로 나누고, 인덱스 5의 값을 곱해줌
for (let i = 1; i < score.length; i++) {
  temp = s[i - 1];
  temp /= score[i - 1];
  if (i + 3 >= score.length) {
    //인덱스가 범위를 벗어날 때
    temp *= score[i + 3 - score.length];
  } else {
    temp *= score[i + 3];
  }

  s.push(temp);
  result += temp;
}

cow.map((c) => {
  for (let i = 0; i < 4; i++) {
    //소에게 장난쳤을때 영향을 받는 것은 c~c-3까지
    c--;
    let index = c;
    if (c < 0) {
      //인덱스가 범위를 벗어날 때
      index = score.length + c;
    }
    result -= s[index];
    s[index] *= -1;
    result += s[index];
  }

  console.log(result);
});
