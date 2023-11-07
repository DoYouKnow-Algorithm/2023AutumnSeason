function solution(strings, n) {
  var answer = [];

  for (let i = 0; i < strings.length; i++) {
    // n번째 인덱스 문자를 가져옴
    let c = strings[i].charAt(n);

    // 문자열 앞에 해당 문자를 추가
    strings[i] = c + strings[i];
  }

  strings.sort(); // 배열을 오름차순으로 정렬

  // 첫 번째 문자를 제거
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].substring(1);
  }

  answer = strings;

  return answer;
}
