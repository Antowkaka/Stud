"use strict";
let arr = [1, 4, 5, 8, 7, 4, 5, 9, 5, 3, 7, 2];
let helpArr = [];
let temp = 0;
console.log('Start arr is ', arr);
for(let i = 0, j = arr.length-1; i < arr.length && j >= 0; i++, j--){    temp = arr[i];
    helpArr[i] = arr[j];
};
console.log('Finish arr is ', helpArr);