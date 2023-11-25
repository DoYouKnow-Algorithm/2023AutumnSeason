function solution(fees, records) {
  let car = [];
  let answer = [];
  for(let r of records){
      let data = r.split(" "); //시각, 차량 번호, 내역 저장
      let time = data[0].split(":"); //시각을 시와 분으로 나눠 저장
      data[0] = 60*Number(time[0])+Number(time[1]); //시각이 6:00인 경우 6*60+0=360분으로 바꿔서 저장
      car.push(data);
  }
  car.sort((a,b)=>{ //차량 번호 순서대로 정렬
      if(a[1]==b[1]){
          return a[0]-b[0];
      }
      else{
          return a[1]-b[1];
      }
  })
  let start = 0;
  let end = 0;
  while(car.length){
      let current = car.shift(); 
      if(car.length&&car[0][1]===current[1]){ //다음 차량이 존재하고 현재 차 번호와 다음 차 번호가 같은 경우
          if(current[2]==="IN"){ //현재 차의 상태가 IN인 경우
              start = current[0]; //시각 저장
          }
          else{ //현재 차의 상태가 OUT인 경우
              end += current[0]-start; //출차 시간 - 입차 시간 저장
          }
      }
      else{ //다음 차량이 존재하지 않거나 현재 차 번호와 다음 차 번호가 다른 경우
          if(current[2]==="IN"){
              end += 1439 - current[0]; //23:59 => 1439분
          }
          else{
              end += current[0]-start;
          }
          if(end <= fees[0]){ //기본 시간보다 작거나 같은 경우
          answer.push(fees[1]); //기본 요금
      }
      else{ //기본 시간보다 큰 경우 기본 요금 + 단위 시간*단위 요금
          let cost = fees[1]+Math.ceil((end-fees[0])/fees[2])*fees[3]; //Math.ceil(num)은 num보다 크거나 같은 수 중 가장 작은 수를 Integer로 반환
          answer.push(cost);
      }
      end = 0;
      }
  }
  return answer;
}