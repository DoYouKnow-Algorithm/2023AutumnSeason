function solution(today, terms, privacies) {
  let t = today.split(".").map(Number); //오늘 날짜를 년, 월, 일로 나눔
  let answer = [];
  for(let i=0;i<privacies.length;i++){
      let p = privacies[i].split(" "); //개인정보 수집 일자, 약관 종류로 나눔
      let pp = p[0].split(".").map(Number); //개인정보 수집 일자를 년, 월, 일로 나눔
      let num; 
      for(let j=0;j<terms.length;j++){
          let tj = terms[j].split(" "); //개인정보의 약관 종류
          if(p[1]==tj[0]){ //약관 종류 중 일치하는 약관이 있다면
              num = Number(tj[1]); //약관 종류에 따른 유효기간 저장
          }
      }
      let y,m,d;
      let n = Math.floor((pp[1]+num)/12); //(개인정보 수집  월 + 약관 유효 기간) /12
      y = pp[0]+n; //유효기간 년도는 개인정보 수집 년도 + n
      if((pp[1]+num)%12==0){ //예를 들어 개인정보 수집 월(12), num(12) 인 경우
          m = 12; //월은 12월
          y -=1; //년도는 n(2)이 아닌 n-1(1)만 더해줬어야 함
      }
      else{
          m = (pp[1]+num)%12; //예를 들어 개인정보 수집 월(3), num(8)인 경우 유효기간 월은 11
      }
      if(pp[2]==1){ //수집 일이 1일 인 경우 ex) 수집일 7월 1일 -> 유효기간 6월 28일 
          d = 28; //유효기간은 전날까지 (모든 달은 28일까지)
          if(m==1){ //ex) 수집일 1월 -> 유효기간 전년도 12월
              y -= 1;
              m = 12;
          }
          else{
              m -=1;     
          }
      }
      else{
          d = pp[2]-1;
      }
      if(t[0]==y){ //유효기간 년도 == 오늘 날짜의 년도
         if(t[1]>m){ //유효기간 월 > 오늘 날짜의 월
             answer.push(i+1);
         }
          else if(t[1]==m){
              if(t[2]>d){ //유효기간의 일 > 오늘 날짜의 일
                  answer.push(i+1);
              }
          }
      }
      else if(t[0]>y){ //유효기간 년도 > 오늘 날짜의 년도
          answer.push(i+1);
      }
  }
      return answer;
}