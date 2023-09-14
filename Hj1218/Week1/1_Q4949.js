const fs = require("fs"); //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n"); //여러 줄 입력받기
const ans = [];
for(let s of input){
  const stack = []; //괄호를 넣어줄 스택 배열
  let check = true; //균형을 이루는지 확인
  if(s=="."){ //온점만 입력된 경우 종료
    break;
  }
  for(let i=0;i<s.length;i++){ //문자열 길이만큼
    if(s[i]=="["||s[i]=="("){ //왼쪽 괄호인 경우
      stack.push(s[i]); //배열에 넣어줌
    }
    else if(s[i]=="]"){ //오른쪽 괄호인 경우
      if(stack[stack.length-1]=="["){ //스택에 마지막으로 들어간 괄호와 짝궁인 경우
        stack.pop(); //스택에서 제거
      }
      else{ //아닌 경우
        check = false; //균형 x
        break;
      }
    }
    else if(s[i]==")"){
      if(stack[stack.length-1]=="("){
        stack.pop();
      }
      else{
        check = false;
        break;
      }
    }
    else if(s[i]=="."){ //온점인 경우 종료
      break;
    }
  }
  if(check==true&&stack.length==0){ //균형을 이루면서 스택에 남은 괄호가 없는 경우
    ans.push("yes");
  }
  else if(check==false||stack.length>0){ //균형을 이루지 않거나 스택에 남은 괄호가 있는 경우
    ans.push("no");
  }
}
console.log(ans.join("\n")); //배열에 저장된 값 출력