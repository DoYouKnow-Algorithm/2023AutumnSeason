function solution(N, stages) {
   let temp = [];  
   let num = stages.length  //사람 수

    for(let i = 1; i <= N; i++){
        let count = stages.filter(v=> v === i).length;  //i번째 단계에 있는 사람 수
        temp.push([i,count/num]);  //i=단계, count/num=실패율 저장
        num = num - count;  //다음 단계까지 도달한 사람 수 
    }
    const answer = temp.sort((a,b)=>b[1]-a[1]);  //내림차순 정렬(실패율 기준으로)
    return answer.map(v=>v[0]);  //단계를 return 해줌
}
