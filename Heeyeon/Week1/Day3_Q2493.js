//const readFileSyncAddress = '/dev/stdin'    //제출시 활성화
const readFileSyncAddress = "./Heeyeon/Week1/input.txt"; //제출시 삭제
const fs = require("fs");
//첫번째 줄은 n, 두번째 줄은 input에 저장
const [n, input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
//top 배열에 input을 띄어쓰기 단어로 잘라서 저장
let top = input.split(" ").map(Number);
//길이가 n이고, 값이 0인 배열 생성
let output=[];
let stack=[];

for(let i=0;i<n;i++){
  let now=top[i]; //현재 탑의 높이
  //스택이 비어있지 않고, 스택의 가장 높은 값이 현재 값보다 작을때까지
  while(stack.length && (top[stack[stack.length-1]]<now)){
    stack.pop();
  }

  if(stack.length==0){
    output.push(0);
  } else{ //스택이 비어있지 않고, 스택의 가장 높은 값이 현재 값보다 큰 상태
    output.push(stack[stack.length-1]+1);
  }
  //스택에 현재 탑의 인덱스 넣어줌
  stack.push(i);
}

console.log(output.join(" "));