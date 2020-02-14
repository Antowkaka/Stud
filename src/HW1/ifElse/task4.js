"use strict";
function maxMultiplOrSumm(a, b, c){
    let array = [a, b, c];
    for(let i = 0; i < 3; i++){
        if(typeof(array[i]) != 'number' || isNaN(array[i]) == true){
            return undefined;
        }
    }
    let multipl = a*b*c;
    let summ = a+b+c;
    if(multipl > summ){
        return multipl;
    }else if(multipl < summ){
        return summ;
    }
}
