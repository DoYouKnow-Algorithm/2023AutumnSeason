const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let temp = input[0].split(" ");
const n = Number(temp[0]);              // 소의 수
const q = Number(temp[1]);              // 장난 횟수

let cow = [];
temp = input[1].split(" ");
for(let i = 1; i <= n; i++) {           // 소의 품질 점수
    cow[i] = Number(temp[i-1]);
}

let mul = [];
let total = 0;                          // 총 점수
for(let i = 1; i <= n; i++) {           // 네개의 수를 곱한 뒤 배열에 저장
    mul[i] = 1;
    for(let j = i, s = i; j < i+4; j++, s++) {
        mul[i] *= cow[s = s <= n ? s : s - n];
    }
    total += mul[i];
}

let result = [];
temp = input[2].split(" ");
for(let i = 0; i < q; i++) {
    let joke = Number(temp[i]);         // 장난칠 번호
    for(let j = joke, s = joke; j > joke - 4; j--, s--) {       // 장난치고 난 뒤 곱한 배열의 값을 변경 후 총점에 더해줌
        mul[s = s > 0 ? s : n] *= -1;
        total += 2*mul[s];
    }
    result[i] = total;                  // 결과값을 저장
}

console.log(result.join("\n"));