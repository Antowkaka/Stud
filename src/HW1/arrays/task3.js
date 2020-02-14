"use strict";
let arr = [3, 5, 7, 4, 6, 8, 3, 5, 2, 5, 4];
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length-1; j++){
        if(arr[i] < arr[j]){
            if(j == arr.length-2){
                console.log('Min elem index is ', i);
            };
            continue;
        }else if(arr[i] > arr[j]){
            break;
        };
    };
};