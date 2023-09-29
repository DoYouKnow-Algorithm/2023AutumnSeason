const fs = require("fs");  //입력을 받아 처리하는 FileSystem 모듈 불러오기
const input = fs.readFileSync("test.txt").toString().split("\n");
const [n,k] = input[0].split(" "); //입력받은 첫 줄 유치원생 n, 조 k개
const num = input[1].split(" "); //유치원생들의 키
let count = 0; //티셔츠 만드는 비용
const arr = []; //키 차이
for(let j=1;j<n;j++){
  let a = Number(num[j]);
  let b = Number(num[j-1]);
  arr.push(a-b); //키 차이 저장
}
arr.sort((a,b)=>a-b); //오름차순 정렬
//키 차이가 큰 부분에 짝대기를 세워주면 티셔츠 만드는 비용이 최소가 됨
//k개의 조로 나눠야하기 때문에 k-1개 짝대기 세움
//1 3 / 5 6 / 10
//유치원생들의 키가 1 3 5 6 10라면 정렬된 arr는 1 2 2 4
//큰 값부터 k-1개를 제외한 값을 더하면 최소 비용
for(let j=0;j<arr.length-k+1;j++){
  count+=arr[j];
}
console.log(count);