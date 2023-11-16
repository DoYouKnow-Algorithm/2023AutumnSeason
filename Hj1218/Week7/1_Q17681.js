function solution(n, arr1, arr2) {
  let answer = [];
  let c;
  for(let i=0;i<n;i++){
      let a = arr1[i].toString(2); //2진수로 변환
      let b = arr2[i].toString(2); //2진수로 변환
      a= '0'.repeat(n-a.length)+a; //ex) n=5 a=1101인 경우 필요한 만큼 0을 앞에 넣어줌
      b= '0'.repeat(n-b.length)+b; //    -> 01101
      c='';
      for(let j=0;j<n;j++){
          if(a[j]==0&&b[j]==0){ //둘 다 0인 경우
              c+=" "; //공백을 더해줌
          }
          else{ //하나라도 #인 경우
              c+="#"; //#을 더해줌
          }
      }
      answer.push(c);
  }
  return answer;
}