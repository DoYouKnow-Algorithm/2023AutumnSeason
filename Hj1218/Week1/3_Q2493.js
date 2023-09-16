const fs = require("fs"); //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n"); //여러 줄 입력받기
let n = Number(input[0]); //탑의 수
const arr = input[1].split(" "); //탑의 높이
const stack = []; //스택
const num = []; //인덱스
const result = []; //결과
for(let i=0;i<n;i++){
  if(stack.length==0){ //스택이 비어있는 경우
    stack.push(Number(arr[i])); //탑의 높이 저장
    num.push(i+1); //탑의 인덱스(위치) 저장
    result.push(0); //결과에 0 넣어줌
    continue;
  }
  if(stack[stack.length-1]<Number(arr[i])){ //현재 탑의 높이 > 스택의 탑의 높이
    let size = stack.length;
    while(size>0){
      if(stack[stack.length-1]>Number(arr[i])){ //스택의 탑의 높이 > 현재 탑의 높이
        break; //종료
      }
      else{ //스택의 탑의 높이 < 현재 탑의 높이
        stack.pop(); //스택에서 제거
        num.pop(); //인덱스에서 제거
      }
      size--;
    }
    if(stack.length==0){ //스택이 비어있는 경우
      result.push(0); //결과에 0 넣어줌
    }
    else{ //스택이 비어있지 않은 경우
      result.push(num[num.length-1]); //결과에 스택의 탑의 인덱스(위치) 넣어줌
    }
    stack.push(Number(arr[i])); //스택에 현재 탑의 높이 넣어줌
    num.push(i+1); //현재 탑의 인덱스(위치) 넣어줌
  }
  else{ //현재 탑의 높이 < 스택의 탑의 높이
    result.push(num[num.length-1]);
    stack.push(Number(arr[i]));
    num.push(i+1);
  }
}
console.log(result.join(" ")); //결과 출력