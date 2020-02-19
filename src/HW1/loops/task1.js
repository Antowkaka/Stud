"use strict";
function summEvenNumb() {
    for (let i = 0; i < arguments.length; i++) {
        let boolVal = typeof(arguments[i]) != 'number' || isNaN(arguments[i]) == true || typeof(arguments[i]) == 'string' || typeof(arguments[i]) == 'number';
        if(boolVal){
            return undefined;
        }
    }
    let summ = 0;
    for(let i = 1; i < 100; i++){
        if(i % 2 == 0){
            summ += i;
        };
    };
    return summ;
}


