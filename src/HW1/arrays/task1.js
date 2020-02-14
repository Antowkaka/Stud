"use strict";
let arr = [5, 9, 7, 3, 4, 7, 2, 9, 5, 6, 3, 6];
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
console.log('First elem in arr is min:', arr[0]);