const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString(); //한 줄 입력받기
let n = Number(input); //출전한 학생 수
let i = 1; 
let count = 0; //백색이 위로 놓인 깃발의 수
while(i*i<=n){
  if(i*i<=n){ //제곱수가 n보다 작거나 같으면
    count++; //증가
  }
  i++;
}
console.log(count);