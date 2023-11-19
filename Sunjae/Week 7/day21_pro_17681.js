function solution(n, arr1, arr2) {
  var answer = [];

  let map_1 = [];
  let map_2 = [];

  // 이진수로 변환하여 지도 1에 저장
  for (let i = 0; i < n; i++) {
    let binary1 = arr1[i].toString(2);
    binary1 = "0".repeat(n - binary1.length) + binary1;
    map_1.push([...binary1]);
  }

  // 이진수로 변환하여 지도 2에 저장
  for (let j = 0; j < n; j++) {
    let binary2 = arr2[j].toString(2);
    binary2 = "0".repeat(n - binary2.length) + binary2;
    map_2.push([...binary2]);
  }

  for (let i = 0; i < n; i++) {
    let code = "";
    for (let j = 0; j < n; j++) {
      code += comparison(map_1[i][j], map_2[i][j]);
    }
    answer.push(code);
  }

  return answer;
}

// 규칙에 맞춰 암호 리턴
function comparison(x, y) {
  if (x == 1 || y == 1) {
    return "#";
  } else {
    return " ";
  }
}
