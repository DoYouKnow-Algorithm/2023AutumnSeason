function solution(n, lost, reserve) {
  var answer = n - lost.length;
  let arr = []; 
    
  lost.sort();
  reserve.sort();

  //도난 당한 학생이 여분을 가지고 있을때
  for(let l of lost){
      if(reserve.includes(l)){  
          answer+=1;
          reserve.splice(reserve.indexOf(l),1);
          arr.push(l);  //for문 돌면서 lost 건들이면 안됨. 따로 저장해둠.
      }
  }

    for(let a of arr){  //도난 당한 학생이 여분 가지고 있는 경우 제외
        lost.splice(lost.indexOf(a),1);
    }
    
  for(let l of lost){  
    if(reserve.includes(l-1)){  //도난 당한 학생의 왼쪽이 여분을 가지고 있을 때
        answer+=1;
        reserve.splice(reserve.indexOf(l-1),1);
    } else if(reserve.includes(l+1)){  //도난 당한 학생의 오른쪽이 여분을 가지고 있을 때
        answer+=1;
        reserve.splice(reserve.indexOf(l+1),1);
    }
  }
    
  return answer;
}
