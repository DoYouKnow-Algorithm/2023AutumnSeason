function solution(n, lost, reserve) {
  // 오름차순 정렬
  let losts = lost.sort((a, b) => a - b);
  let reserves = reserve.sort((a, b) => a - b);

  // 체육복 도난 + 여벌 체육복 없음
  let Lost = losts.filter((e) => !reserves.includes(e));

  // 여벌 체육복 가져온 학생 + 체육복 도난
  let Reserve = reserves.filter((e) => !losts.includes(e));

  // answer = 전체 학생수 - 체육복이 없는 학생 수 + 체육복을 빌릴수 있는 학생 수
  var answer =
    n -
    Lost.filter((l) => {
      // 앞, 뒤 번호 학생 중 여벌이 있는지 확인
      let isBorrow = Reserve.find((r) => Math.abs(r - l) <= 1);

      // 여벌이 없다면
      if (!isBorrow) {
        return true; // 체육복을 빌리지 못한 학생 수 증가
      }

      // 여벌을 빌려준 뒤 Reserve 배열에서 해당 학생의 번호 제거
      Reserve = Reserve.filter((r) => r !== isBorrow);
    }).length;

  return answer;
}
