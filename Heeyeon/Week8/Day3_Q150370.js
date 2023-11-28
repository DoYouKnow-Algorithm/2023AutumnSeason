function solution(today, terms, privacies) {
  var answer = [];
  let day = today.split(".").map(Number);  //오늘 날짜를 잘라서 저장
  //2000년부터 시작하니까 2000 빼줘도 상관 없음
  //총 날짜(일)로 변환해서 생각
  let tDay = (day[0] - 2000) * 12 * 28 + day[1] * 28 + day[2]; 
  
  for (let i = 0; i < privacies.length; i++) {
    let temp = privacies[i].split(/\.| /);  //정규표현식(.과 공백을 기준으로 문자열 자름)
    //총 날짜로 변환해서 pDay에 저장
    let pDay =
      (Number(temp[0]) - 2000) * 12 * 28 +
      Number(temp[1]) * 28 +
      Number(temp[2]);
    //약관종류가 같으면 term에 terms 값 저장(ex A 3) 
    let term = terms.find((e) => e[0] == temp[3]);
    let month = term.split(" ");  //공백을 기준으로 잘라줌
    pDay += Number(month[1]) * 28;  //총 날짜 pDay에 유효기간 더해줌

    if (pDay <= tDay) {  //pDay에서 -1 안해주는 대신 등호 넣어줌
      answer.push(i + 1);  //유효기간 지났으므로 answer 배열에 추가
    }
  }
  return answer;
}
