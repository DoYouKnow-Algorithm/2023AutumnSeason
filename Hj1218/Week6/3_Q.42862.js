function solution(n, lost, reserve) {
  let arr = new Array(n).fill(1);
  for(let i=0;i<lost.length;i++){
      arr[lost[i]-1] = 0;
  }
  for(let i=0;i<reserve.length;i++){
      arr[reserve[i]-1] += 1;
  }
  for(let i=0;i<n;i++){
      if(i==0){
          if(arr[i]==0 && arr[i+1]==2){
              arr[i] = arr[i+1] = 1;
          }
      }
      else {
          if(arr[i]==0){
              if(arr[i-1]==2){
                  arr[i] = arr[i-1] = 1;
              }
              else if(arr[i-1] != 2 && arr[i+1] == 2){
                  arr[i] = arr[i+1] = 1;
              }
          }
      }
  }
  let count = 0;
  for(let i=0;i<n;i++){
      if(arr[i]!=0){
          count ++;
      }
  }
  return count;
}