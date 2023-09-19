const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var n = Number(input[0]);           // 라우터의 크기
var start = 0, end = 0;             // 배열을 큐로 구현하기 위한 시작점 인덱스
var router = [];                    // 라우터

for(let i = 1; i < input.length - 2; i++) {     // -1을 입력 받으면 종료
    var packet = Number(input[i]);              // 패킷을 입력
    if(packet == 0 && start != end) {           // 0을 입력 받았을 경우 && 큐에 값이 있는 경우(시작 지점와 마지막 지점이 다르다)
        start++;                                // 시작 위치를 조정
    } else if(end - start < n) {                // 패킷을 입력 받았을 경우 && 라우터에 값이 차있지 않은 경우(마지막 지점과 시작 지점 사이의 간격 비교)
        router.push(packet);                    // 라우터에 저장
        end = router.length;                    // 마지막 위치를 조정
    }
}

if(start == end) {                          // 라우터의 모든 패킷이 처리되었을 경우
    console.log("empty");
} else {                                    // 라우터에 패킷이 남아있을 경우
    var result = [];                        // 결과 저장 배열에
    for(let i = start; i < end; i++) {      // 시작지점부터 마지막지점까지의 라우터 배열에 있는 값을 저장
        result.push(router[i]);
    }
    console.log(result.join(" "));          // 각 값 사이에 띄어쓰기를 포함하여 출력
}