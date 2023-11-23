function solution(survey, choices) {
    var answer = '';
    var test = [['R',0],['T',0],['C',0],['F',0],['J',0],['M',0],['A',0],['N',0]]; 
    
    for(let i=0;i<choices.length;i++){
        if(choices[i]<=3){  //choices가 1,2,3
            let index= test.findIndex(e => e[0]=== survey[i][0]);  //A라면 A가 포함된 test의 인덱스를 찾아서 index에 저장
            test[index][1]+=4-choices[i];  //A의 점수에 더해줌
        }else if(choices[i]>=4){    //choices가 5,6,7
            let index= test.findIndex(e => e[0]=== survey[i][1]);            
            test[index][1]+=choices[i]-4;
        } 
    }
    
    for(let i =0;i<8;i=i+2){  //더 큰 점수를 가진 알파벳 출력
        answer+= test[i][1]>=test[i+1][1] ? test[i][0] : test[i+1][0];
    }
    
    return answer;
}
