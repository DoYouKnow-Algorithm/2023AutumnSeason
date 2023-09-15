const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");        // 여러 줄 입력 받음
var n = Number(input[0]);       // 탑의 개수
const arr = input[1].split(" ");        // 각각 탑의 높이를 저장한 배열
var result = [];        // 결과값 저장 배열

class Top {             // 탑 클래스 선언
    constructor(num, high) {
        this.num = num;
        this.high = high;
    }
}

var stack = [];         // 스택으로 사용할 배열 생성
stack.push(new Top(1, Number(arr[0])));     // 첫번째 값을 넣어줌
result[0] = 0;                      // 첫번째 탑의 결과는 무조건 0
for(var i = 1; i < n; i++) {
    var new_top = Number(arr[i]);           // 새로운 탑의 높이를 받아와서 비교
    while(stack[stack.length-1].high < new_top && stack.length > 1) {       // 반복문을 통해 값을 충분히 제거해준 뒤
        stack.pop();
    }
    if(stack[stack.length-1].high < new_top) {          // 마지막으로 확인하여 신호를 받을 수 있는 탑이 없다면 pop을 하고 결과값 0을 저장
        stack.pop();
        result[i] = 0;
    } else {        // 신호를 받을 수 있는 탑이 있을 경우 해당 결과값에 탑의 순서를 저장
        result[i] = stack[stack.length-1].num;
    }
    stack.push(new Top(i+1, new_top));      // 값을 스택에 저장
}

console.log(result.join(" "));      // 띄어쓰기를 포함하여 결과값을 출력