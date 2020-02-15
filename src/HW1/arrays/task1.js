"use strict";
//let arr = [5, 9, 7, 3, 4, 7, 2, 9, 5, 6, 3, 6];

function minElem(arr) {
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
    return arr[0];
}
