function solution(a, b, n) {
  let give = a;
  let receive = b;
  let have = n;

  //바꾼 콜라 병 수
  let add = 0;

  //받을 수 있는 콜라 병 수
  let total = 0;

  // 가지고 있는 병이 바꿀 수 있는 병보다 적을 때까지 반복
  while (have >= give) {
    add = parseInt(have / give) * receive;
    total += add;
    have = add + (have % give);
  }

  var answer = total;
  return answer;
}
