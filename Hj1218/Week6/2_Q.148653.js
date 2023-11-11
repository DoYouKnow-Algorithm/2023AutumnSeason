function solution(storey) {
  let s = storey.toString().split("").map(Number);
  let answer=0;
  for(let i=s.length-1;i>=0;i--){
      if(s[i]>5){
          s[i-1] += 1;
          answer+=10-s[i];
      }
      else if(s[i]<5){
          answer+=s[i];
      }
      else{
          if(s[i-1]>=5){
              s[i-1] += 1;
              answer+=10-s[i];
          }
          else{
              answer+=s[i];
          }
      }
  }
  if(s[0]>5){
      answer+=1;
  }
  return answer;
}