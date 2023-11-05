function solution(s) {
  const num = ['zero','one','two','three','four','five','six','seven','eight','nine','ten']
  let str = '';
  let answer = '';
  for(let i=0;i<s.length;i++){
      if(str.length>=3){
          for(let j=0;j<num.length;j++){
              if(str == num[j]){
                  answer += j;
                  str = '';
              }
          }
      }
      if(s[i]>'9'){
          str += s[i];
      }
      else{
          answer += s[i];
      }
  }
  if(str.length!=0){
      for(let i=0;i<num.length;i++){
          if(str == num[i]){
              answer += i;
          }
      }
  }
  return Number(answer);
}