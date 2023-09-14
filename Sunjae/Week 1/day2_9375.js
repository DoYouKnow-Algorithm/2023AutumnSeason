// var readFileSyncAddress = "/dev/stdin"; // 백준 제출
var readFileSyncAddress = "예제.txt"; // VScode 확인

// 파일을 읽어오기 위해 Node.js의 built-in file system module fs 사용
var fs = require("fs");

// input을 읽어와 변수로 선언 & 할당
// 그 내용을 input에 저장, toString(), trim(), split()을 사용해서
// Array로 저장.
var [n, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 결과를 Array로 저장
var output = [];

// **전처리 과정**
// arr의 첫 값은 숫자기 때문에 count++를 해도 0부터 들어가도록 초기값을 -1로 초기화 함
let count = -1;

// 1을 곱했을 때 값이 NaN이라면 옷이 담겼기 때문에 공백에 따라 split해준다
for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i] * 1)) {
    output[count].push(input[i].split(" ")); // 숫자가 아닐 때
  } else {
    // 만약 1을 곱한 값이 숫자라면 배열을 push하고 count에 1을 더한다
    output.push([]);
    count++;
  }
}

// 전처리 결과
// output : [
//            [ [ 'hat', 'headgear' ],[ 'sunglasses', 'eyewear' ],[ 'turban', 'headgear' ] ],
//            [ ['mask', 'face' ],[ 'sunglasses', 'face' ],[ 'makeup', 'face' ] ]
//          ]

for (let i = 0; i < output.length; i++) {
  // 해시 맵 이용
  let key = new Map();

  for (let j = 0; j < output[i].length; j++) {
    // output[i][j] 배열에서 2번째 값이 의상 -> 의상을 가지고 있다면 보유한 의상 개수 +1
    if (key.has(output[i][j][1])) {
      key.set(output[i][j][1], key.get(output[i][j][1]) + 1);
      // 의상을 가지고 있지 않다면 +1
    } else {
      key.set(output[i][j][1], 1);
    }
  }

  let answer = 1;
  // for.. of 문법으로 map 순회하기
  for (let a of key.values()) {
    // 조합의 수 *= 의상 수 + 1(알몸)
    answer *= a + 1;
  }

  // 모든 부위가 알몸 -> -1
  console.log(answer - 1);
}
