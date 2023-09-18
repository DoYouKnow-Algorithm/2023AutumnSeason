const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");        // 여러 줄 입력 받음
var n = input[0];

class Homework {                    // 과제 클래스
    constructor(score, time) {      // 생성자
        this.score = score;
        this.time = time-1;
    }
    
    setTime() {                     // 시간 설정 메서드
        this.time = this.time-1;
    }
}

let hw = [];                        // 과제들을 저장할 배열
let total = 0;                      // 받게될 총 점수
for(let i = 1; i <= n; i++) {
    let arr = input[i].split(" ");
    if(arr[0] == 1) {                  // 과제가 들어온 경우
        var score = Number(arr[1]);    // 과제의 점수
        var time = Number(arr[2]);     // 과제하는데 걸리는 소요시간
        if(time == 1) {                // 만약 1분이라면 곧바로 종료되므로 배열에 저장하지 않고 바로 total에 점수 추가
            total += score;
        } else {                       // 1분 초과라면 배열에 저장
            hw.push(new Homework(score, time));
        }
    } else {                           // 과제가 들어오지 않았을 경우
        if(hw.length > 0) {            // 해야하는 과제가 존재할 경우
            hw[hw.length-1].setTime(); // 가장 마지막에 들어온 과제를 수행
            if(hw[hw.length-1].time == 0) {        // 과제가 끝이 났다면
                total += hw[hw.length-1].score;    // 점수를 추가해주고 배열에서 제거
                hw.pop();
            }
        }
    }
}

console.log(total);
