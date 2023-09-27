const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n");
const result = []; //소수의 개수
for( let i=0;i<input.length;i++){
  let n = Number(input[i]); //자연수 n
  let count = 0; //소수의 개수
  if(n==0){ //0이 입력되면 종료
    break;
  }
  else if(n==1){ //1인경우 소수는 2 하나
    count = 1;
  }
  else{ 
    let arr = Array(2*n+1).fill(true); //2*n+1 크기의 배열을 true로 채워줌
    arr[0] = false; 
    arr[1] = false;
    for(let j=2;j*j<=2*n;j++){ 
      if(arr[j]){ //true인 경우
        for(let k=j*j;k<=2*n;k+=j){ //범위에 속하는 경우
          arr[k]=false; //false(소수 x)
        }
      }
    }
    for(let j=n+1;j<=2*n;j++){
      if(arr[j]){ //소수인 경우
        count++; //카운트 증가
      }
    }
  }
  result.push(count);
}
console.log(result.join("\n"));