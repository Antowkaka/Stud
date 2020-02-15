"use strict";
function maxElem(arr){
    let x = 0;
    if(typeof arr != 'object' || arr == null) return undefined;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        };
    };
    return arr[arr.length-1];
}
