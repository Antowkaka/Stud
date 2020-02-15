"use strict";
function findIndexMinElem(arr){
    let x = 0;
    if(typeof arr != 'object' || arr == null) return undefined;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length-1; j++){
            if(arr[i] < arr[j]){
                if(j == arr.length-2){
                    return i;
                };
                continue;
            }else if(arr[i] > arr[j]){
                break;
            };
        };
    };
}
