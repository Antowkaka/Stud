"use strict";
let numb = 2345;
let numbToStr = numb.toString();
let res = 0;
for(let i = 0; i < numbToStr.length; i++){
    res += Number(numbToStr[i]);
};
console.log(res);
