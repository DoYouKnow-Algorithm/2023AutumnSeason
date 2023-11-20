function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    var temp1 = arr1[i].toString(2);  //2진수로 변환
    temp1 = temp1.length == n ? temp1 : temp1.padStart(n, "0");  //글자수 n으로 맞혀줌
    var temp2 = arr2[i].toString(2);  //2진수로 변환
    temp2 = temp2.length == n ? temp2 : temp2.padStart(n, "0");  //글자수 n으로 맞혀줌
    var a = "";

    for (let j = 0; j < n; j++) {
      if (temp1[j] == temp2[j]) {  //두 글자 비교해서 같은 글자이면
        a += temp1[j] == 1 ? "#" : " ";  //1일때 #, 0일때 공백 저장
      } else {
        a += "#";  //두 글자가 다르면 둘 중 하나는 1 -> # 저장
      }
    }
    answer[i] = a;
  }
  return answer;
}
