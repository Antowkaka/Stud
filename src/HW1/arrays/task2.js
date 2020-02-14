"use strict";
let arr = [1, 4, 5, 6, 8, 4, 6, 2, 7, 5, 7, 9];
let x = 0;
for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
        if(arr[i] > arr[j]){
            x = arr[j];
            arr[j] = arr[i];
            arr[i] = x;
        }
    };
};
console.log('Last elem in arr is max:', arr[arr.length-1]);