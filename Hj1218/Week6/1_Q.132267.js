function solution(a, b, n) {
    let save = 0;
    let answer = 0;
    while(n+save>=a){
        n += save;
        answer += parseInt(n/a)*b;
        save = n%a;
        n = parseInt(n/a)*b;
    }
    return answer;
}