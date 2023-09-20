const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");        // 여러 줄 입력 받음

var n = Number(input[0]);           // 깃발의 개수
var count = 1;                      // 백기의 수, 1은 무조건 백기가 올라옴

for(let i = 2; i < n; i++) {
    if(i * i > n) {                 // 해당 수의 제곱이 n보다 작을 경우 더 탐색할 필요가 없음
        break;
    }
    count++;                        // 제곱근으로 해당 수를 제곱하면 백기가 올라오는 번째 수가 됨
}

console.log(count);                 // 결과값 출력