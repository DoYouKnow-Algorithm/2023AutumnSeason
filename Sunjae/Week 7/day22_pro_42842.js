function solution(brown, yellow) {
  var answer = [];

  // 가로 세로 길이의 합
  let width_and_length = brown / 2 + 2;

  let width = 0;
  let length = 0;

  // 세로의 길이를 1씩 올려주며 노란색 타일의 개수와 비교
  for (let i = 1; i <= width_and_length / 2; i++) {
    length = i;
    width = width_and_length - i;

    let area = (width - 2) * (length - 2);

    if (area == yellow) {
      break;
    }
  }

  answer.push(width);
  answer.push(length);

  return answer;
}
