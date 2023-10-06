const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let temp = input[0].split(" ");
const h = Number(temp[0]);
const w = Number(temp[1]);

temp = input[1].split(" ");
let block = [];
for(let i = 0; i < w; i++) {
    block[i] = Number(temp[i]);
}

let sum = 0;
for(let i = 1; i < w-1; i++) {
    let leftMax = 0, rightMax = 0;

    for(let l = 0; l < i; l++) {
        leftMax = Math.max(leftMax, block[l]);
    }
    for(let r = i+1; r < w; r++) {
        rightMax = Math.max(rightMax, block[r]);
    }

    temp = Math.min(leftMax, rightMax);
    if(block[i] < temp) {
        sum += temp - block[i];
    }
}

console.log(sum);