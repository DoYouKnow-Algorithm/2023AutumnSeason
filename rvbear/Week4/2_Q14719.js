const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let temp = input[0].split(" ");
const h = Number(temp[0]);                        // 높이
const w = Number(temp[1]);                        // 너비

temp = input[1].split(" ");
let block = [];                                   // 블럭들의 높이
for(let i = 0; i < w; i++) {      
    block[i] = Number(temp[i]);
}

let sum = 0;                                      // 빗물의 총합
for(let i = 1; i < w-1; i++) {                    // 가장 왼쪽과 가장 오른쪽은 탐색하지 않음
    let leftMax = 0, rightMax = 0;                // 해당 블럭을 기준으로 좌측과 우측에서 각각 가장 높은 값을 저장

    for(let l = 0; l < i; l++) {
        leftMax = Math.max(leftMax, block[l]);
    }
    for(let r = i+1; r < w; r++) {
        rightMax = Math.max(rightMax, block[r]);
    }

    temp = Math.min(leftMax, rightMax);            // 좌측과 우측 중 낮은 값을 temp에 저장
    if(block[i] < temp) {                          // 낮은 값보다 해당 블럭의 높이가 낮아야 빗물이 고이기 때문
        sum += temp - block[i];                    // 블럭의 높이와 temp의 차를 sum에 저장
    }
}

console.log(sum);                                  // 결과값 출력
