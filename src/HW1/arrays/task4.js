"use strict";
let arr = [3, 5, 7, 4, 6, 3, 3, 5, 8, 5, 4];
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length-1; j++){
        if(arr[i] > arr[j]){
            if(j == arr.length-2){
                console.log('Max elem index is ', i);
            };
            continue;
        }else if(arr[i] < arr[j]){
            break;
        };
    };
};