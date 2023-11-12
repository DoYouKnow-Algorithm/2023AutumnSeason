function solution(storey) {
  // 각 자리수를 탐색하며 0이 되게함
  var answer = 0;

  // 숫자 -> 문자열 -> 자릿수 별로 배열에 저장
  // 맨 앞 숫자가 9일 경우를 대비하여 0을 추가하여 배열 저장
  let digitArray = ("0" + storey.toString()).split("").map(Number);

  for (let i = digitArray.length - 1; i >= 0; i--) {
    if (digitArray[i] == 5) {
      // 현재 자릿수의 숫자가 5일 경우
      // 다음 자릿수가 5보다 작다면,
      if (digitArray[i - 1] < 5) {
        // '-' 하는 것이 더 적게 사용
        answer += digitArray[i];
      } else {
        // 다음 자릿수가 5보다 크다면,
        // '+' 하는 것이 더 적게 사용
        answer += 10 - digitArray[i];
        digitArray[i - 1] = digitArray[i - 1] + 1;
      }
    } else if (digitArray[i] < 5) {
      answer += digitArray[i];
    } else if (digitArray[i] > 5) {
      answer += 10 - digitArray[i];
      digitArray[i - 1] = digitArray[i - 1] + 1;
    }
  }
  return answer;
}
