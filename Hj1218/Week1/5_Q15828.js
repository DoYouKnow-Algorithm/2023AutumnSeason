const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n"); //여러 줄 입력받기
let n = Number(input[0]); //버퍼의 크기 n
const arr = []; //버퍼
for(let i=1;i<=input.length-1;i++){
  let num = Number(input[i]); //라우터가 처리해야 할 정보
  if(num == -1){ //정보가 -1인 경우 종료
    break;
  }
  else if(num !=0){ //정보가 양의 정수인 경우
    if(arr.length<n){ //버퍼가 비어있는 경우
      arr.push(num); //버퍼에 넣어줌
    }
  }
  else if(num == 0){ //정보가 0인 경우 패킷 하나 처리
    arr.splice(0,1); //버퍼 배열의 0번째 인덱스 1개 제거
  }
}
if(arr.length==0){ //버퍼가 비어있는 경우
  console.log("empty");
}
else{ //버퍼가 비어있지 않은 경우
  console.log(arr.join(" "));
}