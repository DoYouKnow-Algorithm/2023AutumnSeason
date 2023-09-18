const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");        // 여러 줄 입력 받음
var n = input[0];

class Homework {
    constructor(score, time) {
        this.score = score;
        this.time = time-1;
    }
    
    setTime() {
        this.time = this.time-1;
    }
}

let hw = [];
let total = 0;
for(let i = 1; i <= n; i++) {
    let arr = input[i].split(" ");
    if(arr[0] == 1) {
        var score = Number(arr[1]);
        var time = Number(arr[2]);
        if(time == 1) {
            total += score;
        } else {
            hw.push(new Homework(score, time));
        }
    } else {
        if(hw.length > 0) {
            hw[hw.length-1].setTime();
            if(hw[hw.length-1].time == 0) {
                total += hw[hw.length-1].score;
                hw.pop();
            }
        }
    }
}

console.log(total);