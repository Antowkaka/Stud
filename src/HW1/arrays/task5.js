"use strict";
let arr = [1, 4, 5, 8, 7, 4, 5, 9, 5, 3, 7, 2];
let summ = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        summ+= arr[i];
    };
};
console.log('Summ = ', summ);