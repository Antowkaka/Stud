"use strict";
let arr = [1, 4, 5, 8, 7, 4, 5, 9, 5, 3, 7, 2];
let arrLn = arr.length;
let helpArr = [];
console.log('Arr is', arr);
if(arr.length % 2 == 0){
    for(let i = 0, j = arrLn/2; i < arrLn/2 && j < arrLn; i++, j++){
        helpArr[i] = arr[j];
        arr[j] = arr[i];
        arr[i] = helpArr[i];
    };
};
console.log('Swap arr is', arr);