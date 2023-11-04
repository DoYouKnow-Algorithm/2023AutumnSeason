function solution(s) {
  var answer = true;
  if(s.length!=4&&s.length!=6){ //문자열의 길이가 4, 6이 아닌 경우
      answer = false;
  }
  else{ //문자열의 길이가 4 또는 6인 경우
      for(let i=0;i<s.length;i++){ //길이만큼 문자열을 탐색해 문자열이 존재하는지 확인
          if(s.charAt(i)>'9'){ //아스키코드를 통해 비교
              answer = false;
          }
      }
  }
  return answer;
}