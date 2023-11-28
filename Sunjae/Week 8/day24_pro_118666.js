function solution(survey, choices) {
  // 각 성격 요소의 누적 점수를 저장하는 Map
  let personality = new Map();

  // 각 성격 요소를 키로 하여 초기값을 0으로 설정한 Map 생성
  Array("R", "T", "C", "F", "J", "M", "A", "N").forEach((e) =>
    personality.set(e, 0)
  );

  survey.forEach((e, i) => {
    // 각 선택지의 가중치에서 4를 뺀 값을 score로 정의
    let score = choices[i] - 4;

    // 가중치에 따라 각 성격 요소의 점수를 증가 또는 감소
    if (score > 0) {
      personality.set(e[1], personality.get(e[1]) + score);
    } else if (score < 0) {
      personality.set(e[0], personality.get(e[0]) + Math.abs(score));
    }
  });

  let answer = "";

  // 각 성격 유형 그룹에 대해 최고 점수를 가진 성격 요소를 찾아서 answer에 추가
  Array("RT", "CF", "JM", "AN").forEach((e) => {
    // 현재 그룹에 속하는 성격 요소를 점수를 기준으로 내림차순으로 정렬하고,
    // 가장 높은 점수를 가진 성격 요소를 선택하여 answer에 추가
    // [...e]: 문자열을 배열로 전개 -> ex) "RT"는 ["R", "T"]로 전개
    answer += [...e].sort((a, b) => personality.get(b) - personality.get(a))[0];
  });

  // 최종적으로 구성된 성격 유형 문자열 반환
  return answer;
}
