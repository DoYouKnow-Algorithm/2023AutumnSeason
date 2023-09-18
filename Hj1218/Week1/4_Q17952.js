const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n"); //여러 줄 입력받기
let n = Number(input[0]); //n분
const stackScore = []; //과제 점수 스택
const stackTime = []; //과제 해결 시간 스택
let total = 0; //받을 과제 점수
for(let i=1;i<=n;i++){ //n만큼 반복
  const arr = input[i].split(" "); //각 줄을 입력받아 공백으로 나눠 배열에 저장
  if(Number(arr[0])==1){ //배열 첫번째 값이 1인 경우 (과제 주어짐)
    let score = Number(arr[1]); //다음 배열 값은 과제 점수
    let time = Number(arr[2]); //마지막 배열 값은 과제 해결 시간
    if(time==1){ //과제 해결 시간이 1인 경우
      total+=score; //받을 과제 점수에 해당 과제 점수 추가
    }
    else{ //시간이 1이 아닌 경우
      stackScore.push(score); //해당 과제 점수 스택에 저장
      stackTime.push(time-1); //해결 시간을 1 감소시킨 후 스택에 저장
      
    }
  }
  else if(stackScore.length!=0){ //과제가 주어지지 않고 스택이 비어있지 않은 경우 (과제 진행 가능)
    if(stackTime[stackTime.length-1]==1){ //마지막에 입력된 과제 해결 시간이 1인 경우
      total+=stackScore[stackScore.length-1]; //받을 과제 점수에 해당 과제 점수 추가 후
      stackScore.pop(); //과제 점수 삭제
      stackTime.pop(); //과제 해결 시간 삭제
    }
    else{ //해결 시간이 1을 넘는 경우
      let temp = stackTime[stackTime.length-1]; //해결 시간을 따로 저장 후
      stackTime.pop(); //삭제하고
      stackTime.push(temp-1); //1을 뺀 값을 다시 저장
    }
  }
}
console.log(total);