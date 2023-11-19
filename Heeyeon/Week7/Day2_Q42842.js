function solution(brown, yellow) {
    var answer = [];
    var temp=[1];  //yellow가 1인 경우, 아래 for문에 안들어감
    
    for(let i=2;i<=yellow/2;i++){
        if(yellow%i==0){
            temp.push(i);  //yellow의 약수 저장
        }
    }
    
    for(let t of temp){
        if((t+1)*2+((yellow/t)+1)*2 == brown){  //yellow의 크기 구함 (t, yellow/t)
            answer.push(t+2);  
            answer.push(yellow/t+2);
            break;
        }
    }
    
    answer.sort(function(a,b) {return b-a;});  //가로의 크기가 더 커야하므로 가로의 크기부터 출력
    
    return answer;
}
