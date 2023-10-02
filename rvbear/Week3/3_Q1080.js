const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const arr = input[0].split(" ");
const n = Number(arr[0]);               // 행
const m = Number(arr[1]);               // 열

const a = Array.from(new Array(n), () => new Array(m));     // 2차원 배열 a 생성
const b = Array.from(new Array(n), () => new Array(m));     // 2차원 배열 b 생성

for(let i = 0, k = 1; k < n+1; i++, k++) {          // 행렬 a의 값 저장
    let line = input[k];
    for(let j = 0; j < m; j++) {
        a[i][j] = Number(line.charAt(j) - '0');
    }
}

for(let i = 0, k = n+1; k < input.length-1; i++, k++) {         // 행렬 b의 값 저장
    let line = input[k];
    for(let j = 0; j < m; j++) {
        b[i][j] = Number(line.charAt(j) - '0');
    }
}

let count = 0;                  // 교환 횟수

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(a[i][j] != b[i][j] && i+2 < n && j+2 < m) {           // 3*3 행렬을 교환하는 경우
            for(let x = i; x < i+3; x++) {
                for(let y = j; y < j+3; y++) {
                    a[x][y] = a[x][y] == 0 ? 1 : 0;
                }
            }
            count++;        // 교환한 뒤 count 증가
        }
    }
}

for(let i = 0; i < n; i++) {         // 교환을 마친 뒤 행렬 a와 b가 같은지 확인    
    for(let j = 0; j < m; j++) {
        if(a[i][j] != b[i][j]) {     // 다르다면 결과값에 -1 저장
            count = -1;
        }
    }
}

console.log(count);                 // 결과값 출력