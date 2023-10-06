const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n");
const arr = input[0].split(" ").map(Number); //세로길이, 가로길이
const arr2 = input[1].split(" ").map(Number); //블록이 쌓인 높이
let num = [];
for(let i=0;i<arr[0];i++){ //이차원배열 생성(모두 0으로 저장)
  let numm = [];
  for(let j=0;j<arr[1];j++){
    numm.push(0);
  }
  num.push(numm);
}

//ex) 세로 4, 가로 4, 블록의 높이가 3 0 1 4인 경우
// 0 0 0 1
// 1 0 0 1
// 1 0 0 1
// 1 0 1 1
//위와 같은 형태로 이차원 배열을 바꿔줌

for(let i=0;i<arr[1];i++){ 
  for(let j=arr[0]-1;j>=arr[0]-arr2[i];j--){
    num[j][i]=1;
  }
}
let flag = false; //쌓여 있는 블록이 있는지 확인
let count = 0; //고일 수 있는 물
let sum = 0; //최종으로 고인 물
for(let i=0;i<arr[0];i++){ //이차원 배열의 맨 윗줄부터 탐색
  flag = false; //초기화
  count = 0; //초기화
  for(let j=0;j<arr[1];j++){
    if(num[i][j]==1){ //블록이 있는 경우
      flag = true; //블록 o
      sum += count; //고일 수 있는 물 저장
      count=0; //초기화
    }
    if(flag&&num[i][j]==0){ //왼쪽에 블록이 있고 물이 고일 수 있는 공간이 있는 경우
      count++; //고일 수 있는 물 증가
    }
  }
}
console.log(sum);
