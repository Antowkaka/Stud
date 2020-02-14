"use strict";
function factorFind(numb){
    if(typeof numb != 'number') return undefined;
    if(typeof numb == 'string') return undefined;
    if(isNaN(numb) == true) return 'NaN';
    let res = 1;
    for(let i = 1; i <= numb; i++){
        res *= i;
    };
    return res;
}
