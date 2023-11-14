function solution(storey) {
  var answer = 0;
  while (storey / 10 != 0) {
    var temp = storey % 10;

    if (temp < 5) {
      answer += temp;
    }
    if (temp > 5) {
      storey += 10 - temp;
      answer += 10 - temp;
    }
    if (temp == 5) {
      if (Math.trunc(storey / 10) % 10 > 5) {
        storey += 10 - temp;
        answer += 10 - temp;
      } else {
        answer += temp;
      }
    }
    storey = Math.trunc(storey / 10);
    console.log(answer, storey);
  }
  console.log(answer);
  return answer;
}

solution(555);
