function solution(N, stages) {
  const getNum = (arr, el)=>arr.filter(v=> v===el).length; //배열 특정요소 개수 탐색
  const num = []; 
  for(let i=0;i<N;i++){
      num[i]=getNum(stages,i+1); //1~N까지 요소 개수 탐색
  }
  let len = stages.length; //플레이어 수
  let fal = []; //스테이지 실패율
  let a,f;
  for(let i=0;i<N;i++){
      a = i+1; //스테이지 번호
      len = len-num[i]; //스테이지에 도달한 플레이어 수
      f = num[i]/len; //실패율
      fal.push([a,f]);
  }
  fal.sort((b,c)=>{ //정렬
      if(b[1]==c[1]){ 
          return b[0]>c[0]?1:-1; 
      }else if(b[1]>c[1]){ 
          return -1;
      }
      else{
          return 1;
      }
  })
  let answer = [];
  for(let i=0;i<N;i++){
      answer[i] = fal[i][0];
  }
  return answer;
}