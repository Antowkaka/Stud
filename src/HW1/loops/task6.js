"use strict";
let numb = 123;
numb = numb.toString();
let res = [];
for(let i = numb.length-1; i >= 0; i--){
    res += numb[i];
}
console.log(res);
