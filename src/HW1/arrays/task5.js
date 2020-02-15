"use strict";
function summOddDigits(arr){
    if(typeof arr != 'object' || arr == null) return undefined;
    let summ = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            summ+= arr[i];
        };
    };
    return summ;
}

