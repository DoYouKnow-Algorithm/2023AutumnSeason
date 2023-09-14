const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n"); //여러 줄 입력받기
const k = Number(input[0]); //테스트 케이스 개수
var n = 1;
for(let i=0;i<k;i++){ //테스트 케이스 개수만큼 반복
  const num = Number(input[n]); //의상 수
  let map = new Map(); //해시맵
  const clothes = []; 
  for(let j=1+n;j<1+n+num;j++){ //의상 수만큼
    clothes.push(input[j].split(" ")); //공백으로 나누어 저장
  }
  for(let l=0;l<num;l++){ //(hat), (turban), (sunglasses), (hat,sunglasses), (turban,sunglasses)만 비교
    if(map.has(clothes[l][1])){ //맵에 존자하는 경우
      map.set(clothes[l][1],map.get(clothes[l][1])+1);
    }
    else{ //존재하지 않는 경우
      map.set(clothes[l][1],1);
    }
  }
  n+=num+1; //다음 케이스의 의상 수가 적힌 인덱스 = 현재 인덱스 + 의상 수 + 1
  var result = 1; //경우의 수
  for(let value of map.values()){
    result *= (value+1); //ex) 같은 종류의 의상이 2개인 경우 1개씩 입거나 안 입는 방법 (개수 + 1)
  }
  console.log(result-1); //전체 경우에서 아무것도 입지 않은 경우를 제외
}