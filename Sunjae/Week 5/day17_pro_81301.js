function solution(s) {
  // 정규표현식을 이용하여 replace
  str0 = s.replace(/zero/g, 0);
  str1 = str0.replace(/one/g, 1);
  str2 = str1.replace(/two/g, "2");
  str3 = str2.replace(/three/g, "3");
  str4 = str3.replace(/four/g, "4");
  str5 = str4.replace(/five/g, "5");
  str6 = str5.replace(/six/g, "6");
  str7 = str6.replace(/seven/g, "7");
  str8 = str7.replace(/eight/g, "8");
  str9 = str8.replace(/nine/g, "9");

  var answer = Number(str9);
  return answer;
}
