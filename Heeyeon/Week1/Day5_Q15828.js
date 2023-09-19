//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week1/input.txt"; //제출시 삭제
const fs = require("fs");
//n은 버퍼의 크기
const [n, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

let i = 0; //인덱스
let buffer = []; //패킷 저장할 버퍼

while (Number(input[i]) !== -1) {
  //-1이 입력될때까지
  let packet = Number(input[i]); //packet 변수에 저장
  if (packet == 0) {
    //packet이 0이라면 패킷 처리
    buffer.shift(); //버퍼의 가장 첫번째 값 제거
  }
  if (packet !== 0 && buffer.length < n) {
    //패킷이 양수이고, 버퍼가 가득차지 않았으면
    buffer.push(packet); //버퍼에 집어넣음
  }
  i++;
}
//버퍼가 비어있으면 empty 출력, 아니라면 버퍼 값들 출력
buffer.length == 0 ? console.log("empty") : console.log(buffer.join(" "));
