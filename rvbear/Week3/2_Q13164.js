const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");        // 여러 줄 입력

let arr = input[0].split(" ");              // 사람의 수, 만들고자하는 조의 수
let person = input[1].split(" ");           // 사람의 키

let temp = [];                              // 키 차이 저장 배열
let before = Number(person[0]);             // 이전 값
for(let i = 1; i < Number(arr[0]); i++) {
    let pre = Number(person[i]);            // 현재 값
    temp[i-1] = pre - before;               // 현재 값에서 이전 값을 빼주고 그 값을 저장
    before = pre;                           // 현재 값을 이전 값에 저장
}

temp.sort((a,b) => a-b);                    // 내림차순 정렬

let sum = 0;                                // 결과값
for(let i = 0; i < Number(arr[0]) - Number(arr[1]); i++) {          // 사람의 수 - 만들고자하는 조의 수 만큼 묶음의 값을 저장
    sum += temp[i];
}

console.log(sum);                           