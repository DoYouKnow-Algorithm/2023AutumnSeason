const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);      // 행, 열, 회전 횟수
let start = input.slice(1, n+1).map((line) => line.split(" ").map(Number));     // 2차원 배열에 값을 저장
let end = input.slice(1, n+1).map((line) => line.split(" ").map(Number));       // 같은 배열을 하나 더 생성

let min = Math.min(n, m) / 2;       // 돌려야하는 그룹의 수를 계산

// 왼쪽 위 x, 왼쪽 위 y, 오른쪽 아래 x, 오른쪽 아래 y, 시작 배열의 인덱스, 결과 배열의 인덱스
let min_x = 0, min_y = 0, max_x = 0, max_y = 0, s_x = 0, s_y = 0, e_x = 0, e_y = 0;
for(let i = 0; i < min; i++) {
    min_x = i; min_y = i; max_x = (n-1)-i; max_y = (m-1)-i;
    s_x = i; s_y = i; e_x = i; e_y = i;
    for(let j = 0; j < r; j++) {            // 회전 횟수만큼 인덱스의 위치를 조정
        let temp = recycle(e_x, e_y).split(" ").map(Number);
        e_x = temp[0]; e_y = temp[1];
    }
    for(let j = 0; j < n*m; j++) {          // 인덱스의 위치부터 하나하나 값을 대입
        end[e_x][e_y] = start[s_x][s_y];
        let temp = cycle(e_x, e_y).split(" ").map(Number);
        e_x = temp[0]; e_y = temp[1];
        temp = cycle(s_x, s_y).split(" ").map(Number);
        s_x = temp[0]; s_y = temp[1];
        if(s_x == i && s_y == i) {
            break;
        }
    }
}

for(let num of end) {           // 결과 출력
    console.log(num.join(" "));
}

function cycle(x, y) {          // 시계 방향으로 회전
    if(min_x == x && min_y <= y && y < max_y) {
        y+=1;
    } else if(max_y == y && min_x <= x && x < max_x) {
        x+=1;
    } else if(max_x == x && min_y < y && y <= max_y) {
        y-=1;
    } else if(min_y == y && min_x < x && x <= max_x) {
        x-=1;
    }
    return x + " " + y;
}

function recycle(x, y) {        // 반시계 방향으로 회전
    if(min_y == y && min_x <= x && x < max_x) {
        x+=1;
    } else if(max_x == x && min_y <= y && y < max_y) {
        y+=1;
    } else if(max_y == y && min_x < x && x <= max_x) {
        x-=1;
    } else if(min_x == x && min_y < y && y <= max_y) {
        y-=1;
    }
    return x + " " + y;
}