const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n"); //여러 줄 입력받음
let num = input[0].split(" ");
let n = Number(num[0]); //행렬 크기 n
let m = Number(num[1]); //행렬 크기 m
let arr1 = [];
let arr2 = [];
let a1 = input.slice(1,n+1); //입력 받은 1번째 줄 ~ n+1번째 줄 전까지
let a2 = input.slice(n+1); //입력 받은 n+1번재 줄부터 마지막 줄까지
for(let i=0;i<n;i++){
  arr1.push(a1[i].split("")); //행렬 1 저장
  arr2.push(a2[i].split("")); //행렬 2 저장
}
function change(x, y){ //원소 뒤집는 함수
  for(let i=x;i<=x+2;i++){
    for(let j=y;j<=y+2;j++){
      arr1[i][j] = 1 - arr1[i][j]; //1 -> 0, 0 -> 1
    }
  }
}
let count = 0; //연산 횟수
for(let i=0;i<n-2;i++){
  for(let j=0;j<m-2;j++){
    if(arr1[i][j]!=arr2[i][j]){ //행렬 1과 행렬 2가 다른 경우
      count++; //연산 횟수 증가
      change(i,j); //원소 뒤집기
    }
  }
}
let flag = true; 
for(let i=0;i<n;i++){
  for(let j=0;j<m;j++){
    if(arr1[i][j]!=arr2[i][j]){ //행렬 1과 행렬 2가 다른 경우
      flag = false;
    }
  }
}
if(flag){ //행렬 1과 행렬 2가 같은 경우
  console.log(count);
}
else{ //행렬 1과 행렬 2가 다른 경우
  console.log(-1);
}