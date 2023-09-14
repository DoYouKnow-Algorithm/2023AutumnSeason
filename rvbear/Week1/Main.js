const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");        // 라인으로 입력받기

var result = [];                                                                      // 결과를 저장할 배열

for(var i = 0; i < input.length; i++) {
    if(input[i] == ".") {                                                             // .이 들어왔을 경우 종료
        break;
    }
    var arr = [];                                                                     // 괄호를 저장할 배열
    var flag = false;                                                                 // 오류 여부 확인
    for(var j = 0; j < input[i].length; j++) {
        var c = input[i].charAt(j);
        if(c == '(' || c == '[') {                                                    // 열린 괄호일 경우 배열에 저장
            arr.push(c);
        } else if(c == ')' || c == ']') {                                             // 닫힌 괄호일 경우
            if(c == ')' && arr[arr.length - 1] == '(' && arr.length != 0) {           // 배열에 값이 있으며 가장 마지막에 들어온 열린 괄호와 짝이 맞을 경우
                arr.pop();
            } else if(c == ']' && arr[arr.length - 1] == '[' && arr.length != 0) {    
                arr.pop();
            } else {                                                                   // 그 외의 경우는 오류가 발생함
                flag = true;
            }
        }
        if(flag) {                                                                     // 오류가 발생했을시 더이상의 탐색을 종료하고
            break;
        }
    }
    if(arr.length == 0 && !flag) {                                                     // 오류가 발생하지 않았으며 배열에 값이 없는 경우 yes를
        result.push("yes");
    } else {                                                                           // 그 외의 경우 no를 저장
        result.push("no");
    }
}

console.log(result.join("\n"));                                                         // 배열에 저장된 모든 값을 출력
