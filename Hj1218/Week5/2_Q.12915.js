function solution(strings, n) {
  strings.sort((a,b)=>{ //오름차순 정렬
      if(a[n]>b[n]){ //n번째 인덱스에 해당하는 문자를 비교해 정렬
          return 1;
      }
      else if(a[n]<b[n]){ //n번째 인덱스에 해당하는 문자를 비교해 정렬
          return -1;
      }
      else{ //n번째 인덱스에 해당하는 문자가 같은 경우
          return a>b?1:-1; //오름차순 정렬
      }
  })
  return strings;
}