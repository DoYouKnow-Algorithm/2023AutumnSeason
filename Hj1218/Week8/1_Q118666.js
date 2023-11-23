function solution(survey, choices) {
  let n = survey.length; //문제 수
  let mbti = [['R',0],['T',0],['C',0],['F',0],['J',0],['M',0],['A',0],['N',0]]; //2차원 배열
  let score = [3,2,1,0,1,2,3]; //선택지 점수
  for(let i=0;i<n;i++){
      if(choices[i]>=4){ //선택지가 4 이상인 경우
          for(let j=0;j<mbti.length;j++){
              if(survey[i][1]==mbti[j][0]){ //survey가 AN이라면 뒷 문자인 N
                  mbti[j][1] += score[choices[i]-1]; //해당 문자의 점수 증가
              }
          }
      }
      else{ //선택지가 4 미만인 경우
          for(let j=0;j<mbti.length;j++){
              if(survey[i][0]==mbti[j][0]){ //survey가 AN이라면 앞 문자인 A
                  mbti[j][1] += score[choices[i]-1]; //해당 문자의 점수 증가
              }
          }
      }
  }
  let s=''; 
  for(let i=0;i<8;i+=2){ //지표별 성격 유형을 비교
      if(mbti[i][1]>=mbti[i+1][1]){ 
          s = s+mbti[i][0];
      }
      else{
          s = s+mbti[i+1][0];
      }
  }
  return s;
}