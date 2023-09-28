const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const [n,...arr] = fs.readFileSync("test.txt").toString().split("\n").map(Number);
let total = 0; //팁
arr.sort((a,b)=>(b-a)); //내림차순 정렬
for(let i=0;i<n;i++){
  let money = Number(arr[i]); //각 사람이 주려고 하는 팁
  if(money-i>0){ //주려고 하는 팁 - ((순서 i + 1) - 1)
    total+=money-i;
  }
}
console.log(total);