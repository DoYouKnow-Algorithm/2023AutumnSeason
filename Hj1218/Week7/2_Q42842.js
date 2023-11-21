function solution(brown, yellow) {
  let sum = brown + yellow; //총 카펫 격자의 수
  for(let i=3;i<=sum;i++){ //카펫의 한 변의 길이는 최소 3
      if(sum%i==0&&sum/i>=3){ //약수이면서 최소길이를 만족하는 경우
          let a = Math.max(i,sum/i); //가로
          let b = Math.min(i,sum/i); //세로
          if((a-2)*(b-2)==yellow){ //가로-2 * 세로-2 = 노랑색 카펫 격자의 수
              return [a,b];
          }
      }
  }
}