function solution(N, stages) {
  var result = [];

  // 현재 스테이지에 도달한 플레이어 수
  let playersAtStage = stages.length;

  for (let i = 1; i <= N; i++) {
    // 현재 스테이지에서 실패한 플레이어 수
    let playersFailed = stages.filter((e) => i === e).length;

    // 실패율 = 해당 스테이지에 머무른 유저 수 / 전체 유저 수
    let failure_rate = playersFailed / playersAtStage;

    // 스테이지 번호와 실패율을 담은객체를 결과 배열에 추가
    result.push({ stage: i, failureRate: failure_rate });

    // 실패한 유저를 제외시킴
    playersAtStage -= playersFailed;
  }

  // 실패율을 기준으로 결과 배열을 내림차순으로 정렬
  result.sort((a, b) => b.failureRate - a.failureRate);

  // 정렬된 결과 배열에서 스테이지 번호만 추출하여 반환
  var answer = result.map((item) => item.stage);

  return answer;
}
