const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n");
const a = input[0].split(" ");
const n = Number(a[0]); //소의 수
const q = Number(a[1]); //욱제가 장난칠 횟수
const b = input[1].split(" ");
let arr = []; //n마리 소들의 품질 점수
for(let i=0;i<n;i++){
  arr.push(Number(b[i]));
}
const c = input[2].split(" ");
let arr2 = []; //욱제가 장난칠 q개의 소의 번호
for(let i=0;i<q;i++){
  arr2.push(Number(c[i]-1)); //인덱스 편하게 계산하기 위해 -1 (3번째 소 = 인덱스 2)
}
let num = []; //해당 인덱스에 위치한 소부터 +3에 위치한 소까지 품질 점수를 곱한 값
let s = 0; 

//만약 인덱스 6에 위치한 소부터 연속한 4마리의 품질 점수를 곱하려는 경우
//인덱스는 7까지(n=8) 존재하므로 6+2, 6+3 두가지 경우가 인덱스 범위를 벗어남
//6+2는 인덱스 0, 6+3은 인덱스 1
//벗어나는 경우 n으로 나눈 나머지가 인덱스가 됨

for(let i=0;i<arr.length;i++){
  let temp = arr[i];
  if(i+1>=n){ //범위를 벗어나는 경우
    temp *= arr[(i+1)%n];
  }
  else{
    temp *= arr[i+1];
  }
  if(i+2>=n){ //범위를 벗어나는 경우
    temp *= arr[(i+2)%n];
  }
  else{
    temp *= arr[i+2];
  }
  if(i+3>=n){ //범위를 벗어나는 경우
    temp *= arr[(i+3)%n];
  }
  else{
    temp *= arr[i+3];
  }
  num.push(temp); //연속한 네마리 소들의 품질 점수를 곱한 값 저장
  s+=temp; //모두 더해줌
}
let result = []; //q번에 걸쳐 계산한 s 저장

//s를 매번 더해서 계산하는 경우 시간초과 발생
//미리 구한 s에서 장난친 소의 품질 점수가 포함되는 num 배열 값을 -1을 곱해주고 2배를 s에 더해주면 됨
//인덱스 2에 위치한 소의 품질점수가 포함되는 num 배열의 인덱스는 0, 1, 2, 7 (n=8)
//인덱스 2에서 0~3를 빼 포함되는 num 배열의 인덱스를 구해줌
//위 예시로는 인덱스 2에서 3을 뺀 경우 2-3=-1로 0보다 작은 값을 가짐
//0보다 작은 값을 가지는 경우 해당 값에 n을 더해주면 됨
//ex) -1에 해당하는 인덱스는 -1 + 8 = 7 (n=8)

for(let i=0;i<arr2.length;i++){
  for(let j=0;j<4;j++){
    if(arr2[i]-j<0){
      num[n+arr2[i]-j] *= -1;
      s+=2*num[n+arr2[i]-j];
    }
    else{
      num[arr2[i]-j] *=-1;
      s+=2*num[arr2[i]-j];
    }
  }
  result.push(s);
}
console.log(result.join("\n"));