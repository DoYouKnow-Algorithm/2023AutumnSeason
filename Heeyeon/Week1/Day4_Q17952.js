//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week1/input.txt"; //제출시 삭제
const fs = require("fs");
//첫번째 줄은 n, 두번째 줄은 input에 저장
const [n, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

let score = []; //점수 저장
let time = []; //걸리는 시간 저장
let answer = 0; //성애가 받게 될 점수 저장

for (let i = 0; i < n; i++) {
  let temp = input[i].split(" "); //띄어쓰기 단위로 잘라서 저장
  if (Number(temp[0] == 1)) {
    //과제가 주어짐(=1)
    if (Number([temp[2]] == 1)) {
      //걸리는 시간이 1분 = 바로 끝낼 수 있는 과제
      answer += Number(temp[1]); //answer에 점수 더해줌
    } else {
      //2분 이상 걸리는 과제
      score.push(Number(temp[1])); //점수 저장
      time.push(Number(temp[2]) - 1); //시간 -1 저장
    }
  } else {
    //과제가 주어지지 않음(=0)
    if (time.lenght == 0) break; //주어진 과제 없으면 종료
    let limit = time.pop(); //가장 최근 과제의 시간 꺼내서 저장
    if (limit == 1) {
      //과제가 1분 남음 -> 끝
      answer += score.pop(); //answer에 점수 더해줌
    } else {
      //바로 끝낼 수 없음
      time.push(limit - 1); //time-1해서 다시 저장
    }
  }
}

console.log(answer);
