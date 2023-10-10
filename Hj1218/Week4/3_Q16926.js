const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n");
const [n,m,r] = input[0].split(" ").map(Number);
let num = [];
for(let i=0;i<n;i++){ //2차원 배열 생성 + 저장
  let numm = [];
  for(let j=0;j<m;j++){
    numm=input[i+1].split(" ").map(Number);
  }
  num.push(numm);
}
let a = Math.min(n,m)/2; //회전시킬 사각형 개수
for(let i=0;i<r;i++){
  for(let j=0;j<a;j++){ 
    let temp = num[j][j]; //시작점은 (0,0), (1,1) ..., 따로 저장
    for(let k=j;k<m-j-1;k++){ //사각형 윗부분(왼쪽으로)
      num[j][k] = num[j][k+1];
    }
    for(let k=j;k<n-j-1;k++){ //사각형 오른쪽부분(위로)
      num[k][m-j-1] = num[k+1][m-j-1];
    }
    for(let k=m-j-1;k>j;k--){ //사각형 아래부분(오른쪽으로)
      num[n-j-1][k] = num[n-j-1][k-1];
    }
    for(let k=n-j-1;k>j;k--){ //사각형 왼쪽부분(아래로)
      num[k][j] = num[k-1][j];
    }
    num[j+1][j] = temp; //따로 저장해둔 값을 저장해주기
  }
}
for(let b of num){
  console.log(b.join(" "));
}