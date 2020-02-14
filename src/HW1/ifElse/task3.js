"use strict";
function summPositiveNumb(array){
    for(let i = 0; i < 3; i++){
        if(typeof(array[i]) != 'number' || isNaN(array[i]) == true){
            return undefined;
        }
    }
    let result = 0;
    for(let i = 0; i < 3; i++){
        if(array[i] > 0){
            result += array[i];
        }
    }
    return result;
}
