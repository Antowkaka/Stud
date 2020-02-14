"use strict";
let arr = [1, 4, 5, 8, 7, 4, 5, 9, 5, 3, 7, 2];
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        count++;
    };
};
console.log('Count = ', count);