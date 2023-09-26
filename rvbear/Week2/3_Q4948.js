const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

var result = [];                            // 결과 저장 배열

function isPrime(num) {                     // 소수 판정 메서드
    if(num < 2) {                           // num = 1이라면 false
        return false;
    }
    for(let i = 2; i * i <= num; i++) {     // i의 제곱이 num 보다 작거나 같을 경우만 반복
        if(num % i == 0) {                  // num이 i로 나누어 떨어진다면 소수가 아님
            return false;
        }
    }
    return true;                            // 모든 경우를 만족한다면 소수임
}

for(let i = 0; i < input.length-2; i++) {
    var n = Number(input[i]);               // 값을 입력 받음

    var count = 0;                          // 소수의 개수
    for(let i = n+1; i <= 2*n; i++) {       // n보다 크고 2n보다 작거나 같은 수들 중
        if(isPrime(i)) {                    // 소수인 경우 count 증가
            count++;
        }
    }

    result.push(count);                     // 결과값 저장
}

console.log(result.join("\n"));             // enter를 포함하여 출력