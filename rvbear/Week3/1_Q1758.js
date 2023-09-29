const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);                       // 사람의 수
let arr = [];
for(let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => b - a);                      // 내림차순 정렬

let sum = 0;                                    // 팁을 받을 수 있는 총합
for(let i = 0; i < n; i++) {
    let temp = arr[i] - i;                      // 팁을 내려고 한 값 - (자신의 등수 - 1)
    if(temp <= 0) {                             // 계산한 값이 0보다 작거나 같을 경우 반복문 종료
        break;
    }
    sum += temp;                                // 총합에 계산한 값을 더해줌
}

console.log(sum);