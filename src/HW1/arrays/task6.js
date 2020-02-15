"use strict";
function reverseArray(arr){
    if(typeof arr != 'object' || arr == null) return undefined;
    let helpArr = [];
    let temp = 0;
    for(let i = 0, j = arr.length-1; i < arr.length && j >= 0; i++, j--){
        temp = arr[i];
        helpArr[i] = arr[j];
    };
    return helpArr;
}